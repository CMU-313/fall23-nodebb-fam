'use strict';

const _ = require('lodash');

const db = require('../database');
const groups = require('.');
const privileges = require('../privileges');
const posts = require('../posts');
const topics = require('../topics');

module.exports = function (Groups) {
    Groups.onNewPostMade = async function (postData) {
        if (!parseInt(postData.uid, 10)) {
            return;
        }

        let groupNames = await Groups.getUserGroupMembership('groups:visible:createtime', [postData.uid]);
        groupNames = groupNames[0];

        // Only process those groups that have the cid in its memberPostCids setting (or no setting at all)
        const groupData = await groups.getGroupsFields(groupNames, ['memberPostCids']);
        groupNames = groupNames.filter((groupName, idx) => (
            !groupData[idx].memberPostCidsArray.length ||
            groupData[idx].memberPostCidsArray.includes(postData.cid)
        ));

        const keys = groupNames.map(groupName => `group:${groupName}:member:pids`);
        await db.sortedSetsAdd(keys, postData.timestamp, postData.pid);
        await Promise.all(groupNames.map(name => truncateMemberPosts(name)));
    };

    async function truncateMemberPosts(groupName) {
        let lastPid = await db.getSortedSetRevRange(`group:${groupName}:member:pids`, 10, 10);
        lastPid = lastPid[0];
        if (!parseInt(lastPid, 10)) {
            return;
        }
        const score = await db.sortedSetScore(`group:${groupName}:member:pids`, lastPid);
        await db.sortedSetsRemoveRangeByScore([`group:${groupName}:member:pids`], '-inf', score);
    }

    Groups.getLatestMemberPosts = async function (groupName, max, uid) {
        let pids = await db.getSortedSetRevRange(`group:${groupName}:member:pids`, 0, max - 1);
        pids = await privileges.posts.filter('topics:read', pids, uid);
        const groupNames = await getGroupNames(); 
        const filteredPids = await filterPostsByTitle(pids, groupName, groupNames);
        return await posts.getPostSummaryByPids(filteredPids, uid, { stripTags: false });
    };

    async function filterPostsByTitle(pids, groupName, groupNameData) {
        const postsData = await posts.getPostsFields(pids, ['tid']);
        const filteredPids = [];
        const tids = _.uniq(postsData.map(post => post.tid));
        const [topics] = await Promise.all([
            getTopics(tids),
        ]);

        const groupNames = groupNameData.map(entry => {
            const parts = entry.split(':');
            if (parts.length > 0) {
                return parts[0].toLowerCase();
            } else {
                return ''; 
            }
        });
                
        const tidToTopic = _.zipObject(tids, topics);
        postsData.forEach((post, idx) => {
            const tid = post.tid || 0;
            const topic = tidToTopic[tid];
            const postTitle = topic ? topic.title : '';
            if (postTitle.toLowerCase().includes(groupName.toLowerCase())) {
                filteredPids.push(pids[idx]);
            } else if (groupName.toLowerCase() === 'miscellaneous') {
                let misc = true; 
                for (const group of groupNames) {
                    if (postTitle.toLowerCase().includes(group)) {
                        misc = false; 
                        break; 
                    }
                }
                if (misc) {
                    filteredPids.push(pids[idx]);
                }
            }
            

        });
        return filteredPids;
    }

    async function getTopics(tids) {
        const topicsData = await topics.getTopicsData(tids);
        topicsData.forEach((topic) => {
            if (topic && topic.tags) {
                topic.tags = topic.tags.map(tag => tag.value);
            }
        });

        return topicsData;
    }

    async function getGroupNames() {
        return new Promise((resolve, reject) => {
            Groups.getGroups('groups:visible:name', 0, -1, (err, groupNames) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(groupNames);
                }
            });
        });
    }
};
