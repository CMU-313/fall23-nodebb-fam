- follow rest of userguide.md and add screenshots into the PR's

- categories.js
    - deleted topic titles with regex
- controllers.js
    - sorted topics and topics from a specific users topics from a category with tags have correct timestamps (search for &#x2F;)
- posts.js
    - should bypass post queue if user is in exempt group &#x2F
- search.js
    - child categories check for correct ones if u search for regex
- topics.js (bulk)
    - posting a new topic
    - escaping a title
    - return topics
    - merging topics
    - search for "+ ' ("
    - scheduled timestamps
- user.js
    - banned topics check with regex

filtering
- controllers.js (lines 926-967)
    - checks that the post group-details goes in the group-details group
    - also checks that a post without the group name in its title does not show in the group at all

misc group and misc filter
- controllers.js (lines 969-995)
    - checks that you can join the group without having to create it (this isn't implemented because I don't know how)
    - checks that an umnatched post goes inside misc; this post title does not have miscellaneous in it, but it still shows up
        - this combined with the previous test in filtering section affirm that posts only show up in other groups when they match, but only in misc when they don't match
- groups.js
    - user can be safely added to miscellaneous group "should add user to Miscellaneous group"


