'use strict';

const db = require('../../database');
const user = require('../../user');
const topics = require('../../topics');

module.exports = function (SocketTopics) {
    SocketTopics.markAsRead = async function (socket, tids) {
        if (!Array.isArray(tids) || socket.uid <= 0) {
            throw new Error('[[error:invalid-data]]');
        }
        const hasMarked = await topics.markAsRead(tids, socket.uid);
        const promises = [topics.markTopicNotificationsRead(tids, socket.uid)];
        if (hasMarked) {
            promises.push(topics.pushUnreadCount(socket.uid));
        }
        await Promise.all(promises);
    };

    /*SocketTopics.markAsResolved = async function (socket, tids) {
        if (!Array.isArray(tids) || socket.uid <= 0) {
            throw new Error('[[error:invalid-data]]');
        }
        const hasMarked = await topics.markAsResolved(tids, socket.uid);
        const promises = [topics.markTopicNotificationsResolved(tids, socket.uid)];
        if (hasMarked) {
            promises.push(topics.pushUnresolvedCount(socket.uid));
        }
        await Promise.all(promises);
    };*/


    SocketTopics.markTopicNotificationsRead = async function (socket, tids) {
        if (!Array.isArray(tids) || !socket.uid) {
            throw new Error('[[error:invalid-data]]');
        }
        await topics.markTopicNotificationsRead(tids, socket.uid);
    };

    SocketTopics.markTopicNotificationsResolved = async function (socket, tids) {
        if (!Array.isArray(tids) || !socket.uid) {
            throw new Error('[[error:invalid-data]]');
        }
        await topics.markTopicNotificationsResolved(tids, socket.uid);
    };

    SocketTopics.markAllRead = async function (socket) {
        if (socket.uid <= 0) {
            throw new Error('[[error:invalid-uid]]');
        }
        await topics.markAllRead(socket.uid);
        topics.pushUnreadCount(socket.uid);
    };

    SocketTopics.markAllResolved = async function (socket) {
        if (socket.uid <= 0) {
            throw new Error('[[error:invalid-uid]]');
        }
        await topics.markAllResolved(socket.uid);
        topics.pushUnresolvedCount(socket.uid);
    };

    SocketTopics.markCategoryTopicsRead = async function (socket, cid) {
        const tids = await topics.getUnreadTids({ cid: cid, uid: socket.uid, filter: '' });
        await SocketTopics.markAsRead(socket, tids);
    };

    SocketTopics.markCategoryTopicsResolved = async function (socket, cid) {
        const tids = await topics.getUnresolvedTids({ cid: cid, uid: socket.uid, filter: '' });
        await SocketTopics.markAsResolved(socket, tids);
    };

    SocketTopics.markUnread = async function (socket, tid) {
        if (!tid || socket.uid <= 0) {
            throw new Error('[[error:invalid-data]]');
        }
        await topics.markUnread(tid, socket.uid);
        topics.pushUnreadCount(socket.uid);
    };

    SocketTopics.markAsUnreadForAll = async function (socket, tids) {
        if (!Array.isArray(tids)) {
            throw new Error('[[error:invalid-tid]]');
        }

        if (socket.uid <= 0) {
            throw new Error('[[error:no-privileges]]');
        }
        const isAdmin = await user.isAdministrator(socket.uid);
        const now = Date.now();
        await Promise.all(tids.map(async (tid) => {
            const topicData = await topics.getTopicFields(tid, ['tid', 'cid']);
            if (!topicData.tid) {
                throw new Error('[[error:no-topic]]');
            }
            const isMod = await user.isModerator(socket.uid, topicData.cid);
            if (!isAdmin && !isMod) {
                throw new Error('[[error:no-privileges]]');
            }
            await topics.markAsUnreadForAll(tid);
            await topics.updateRecent(tid, now);
            await db.sortedSetAdd(`cid:${topicData.cid}:tids:lastposttime`, now, tid);
            await topics.setTopicField(tid, 'lastposttime', now);
        }));
        topics.pushUnreadCount(socket.uid);
    };

    SocketTopics.markUnresolved = async function (socket, tid) {
        if (!tid || socket.uid <= 0) {
            throw new Error('[[error:invalid-data]]');
        }
        await topics.markUnresolved(tid, socket.uid);
    };

    SocketTopics.markAsResolved = async function (socket, tid) {
        if (!tid || socket.uid <= 0) {
            throw new Error('[[error:invalid-data]]');
        }
        await topics.markAsResolved(tid, socket.uid);
    };

    SocketTopics.markAsUnresolvedForAll = async function (socket, tids) {
        if (!Array.isArray(tids)) {
            throw new Error('[[error:invalid-tid]]');
        }

        if (socket.uid <= 0) {
            throw new Error('[[error:no-privileges]]');
        }
        const isAdmin = await user.isAdministrator(socket.uid);
        const now = Date.now();
        await Promise.all(tids.map(async (tid) => {
            const topicData = await topics.getTopicFields(tid, ['tid', 'cid']);
            if (!topicData.tid) {
                throw new Error('[[error:no-topic]]');
            }
            const isMod = await user.isModerator(socket.uid, topicData.cid);
            if (!isAdmin && !isMod) {
                throw new Error('[[error:no-privileges]]');
            }
            await topics.markAsUnresolvedForAll(tid);
            await topics.updateRecent(tid, now);
            await db.sortedSetAdd(`cid:${topicData.cid}:tids:lastposttime`, now, tid);
            await topics.setTopicField(tid, 'lastposttime', now);
        }));
        topics.pushUnresolvedCount(socket.uid);
    };
};
