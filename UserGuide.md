# Testing our Features:

Within the following existing test files, you will find edited tests and new tests. The existing test files contain a comprehensive collection of tests for ensuring the reliability of the code. We leverage NodeBB's existing tests by editing them to fit our new functionality. Additionally, we implemented new tests to account for any other cases that NodeBB would not have made due to any edge cases with our new features.

1. Miscellaneous group and Miscellaneous filter

The following tests combined with the tests mentioned under 'Filter feature' affirm that posts only show up in other groups when their titles match, but only in the miscellaneous group when they don't match. This covers all cases for filtering with relation to this default group. It also confirms that, like the global moderators group, users are presented with a miscellaneous group and can join said group.

- test/controllers.js
    - Search for 'should load misc page and filter unmatched posts in that group' within this file
    - Tests that an umnatched post goes inside the Miscellaneous group; this post title does not have miscellaneous in it, but it still shows up (expected behavior)
    
- test/groups.js
    - Search for 'should add user to Miscellaneous group' within this file
    - Ensures that a user can be added to this default group

2. Filter feature

The two scenarios of a post appearing in a group and not appearing in a group are covered with these tests. This is comprehensive for the filtering feature.

- test/controllers.js 
    - Search for 'should load group details page' within this file
    - Tests that the post titled 'group-details' goes in the group-details group
    - Tests that a post without 'group-details' in its title does not show in the group-details group

3. Timestamp feature

Our tests ensure that a timestamp shows up in any post made by editing existing tests where titles were checked to now include timestamps. It also tests that new posts have timestamps in it.

- test/categories.js
    - Search for 'should not show deleted topic titles' within this file 
    - This test uses a Regex to ensure that any deleted topic title stays deleted and matches its original title with a timestamp
- test/controllers.js
    - Search for '&#x2F;' within this file (this is the HEX code for '\' which is used in the timestamp)
    - Any instance of that string represents a test for this file
        - Checks that sorted topics have the correct timestamp and that timestamps are used in the sorting process
        - Checks that a specific user's topics from a category with tags have correct timestamps 
- test/posts.js
    - Search for 'should bypass post queue if user is in exempt group' within this file 
    - This test uses a Regex to ensure that if a user is in the exempt group, their post publishes first even when queued with a timestamp
- test/search.js
    - Search for 'regex' within this file 
    - This test uses a Regex to ensure that posts within child categories contain timestamps
- test/topics.js (contains the bulk of the testing logic)
    - Search for 'formattedTimestamp' within this file
    - Tests for adding a timestamp into a published post
    - Tests that timestamps work fine when escaping a topic title
    - Tests that related topics contain timestamps in their titles
    - Tests that different cases for merging topics result in a topic with a timestamp in its title
    - Tests that recently replied topics have a timestamp in them
    - Tests that a scheduled post has a timestamp in it when published
- test/user.js
    - Search for 'regex' within this file
    - Ensures that categories with banned users can still contain valid posts with timestamps


# Using our Features:

For someone accessing a deployed version of this app, it looks like you will not be able to use several of our features that require an admin account unless we find a fix for this (creating groups, joining Miscellaneous group, testing the filters, etc.). You should be able to view the timestamp feature, the default miscellaneous group feature, resolved/unresolved post feature, clicking on the classes category to be redirected feature, and post breakdowns within categories feature.

Before beginning any testing, please run redis-cli FLUSHALL in your terminal. Then, setup the codebase again with ./nodebb setup (make sure to store the admin password shown at the end) and start the NodeBB server.

1. Viewing a default Miscellaneous Group

    Begin by searching the navigation bar for the classes category or clicking on the classes category from the index page. There, you will be redirected to the classes/groups page. On this page, you should see a group titled 'Miscellaneous'. Click on the group. Once inside the group, use the left panel to add yourself (admin) as a member of the group. 

2. Filtering posts and grouping posts within classes

    From the classes/groups page, create another class titled 17-313. Navigate back to the home page. Under the category 'Exams', create two posts/topics using the button in the top left. In one of them, add 17-313 in the title of the post. In the other one, add extraneous information, but DO NOT add '17-313' or 'Miscellaneous' in the title of the post. After successfully making two posts, navigate to the classes page. Click on your 17-313 class; expand the 'Exams' group you should see your first post with 17-313 in the title but not your second post. Go back to the classes page and click on your Miscellaneous group; you expand the 'Exams' group and you should see the second post but not the first post. You shoudl not see any other posts in any of the other groups.

3. Viewing timestamp in post title

    You should be able to view the timestamp of a post in the post title after successfully publishing a post.

4. Resolving / Unresoving posts

    For any posts created, there are two buttons on the right side of the hot bar, one for marking the post as resolved and the other for marking it as unresolved. Clicking them allows you to add tags to the post identifying them as solved or unresolved accordingly.

5. Viewing as classes instead of groups 

    As we want this platform to be a class management platform/forum, most instances of "groups" in the default NodeBB front end have been changed to reflect "classes". Students can join a new "class", Instructors can "create a new class", and both roles can see classes on their nav bar.

    Note that to see the changes, browser language has to be changed to en-GB (United Kingdom). This can and should be done from the Admin Control Panel to view changes on your local machine
