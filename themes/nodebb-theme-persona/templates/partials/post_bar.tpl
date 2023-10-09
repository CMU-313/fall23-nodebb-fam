<div class="topic-main-buttons pull-right inline-block">
    <span class="loading-indicator btn pull-left hidden" done="0">
        <span class="hidden-xs">[[topic:loading_more_posts]]</span> <i class="fa fa-refresh fa-spin"></i>
    </span>

    <!-- IF loggedIn -->
    <button component="topic/mark-unread" class="btn btn-sm btn-default" title="[[topic:mark_unread]]">
        <i class="fa fa-fw fa-inbox"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"></span>
    </button>
        <!-- IF topics.unresolved -->
        <button component="topic/mark-resolved" class="btn btn-sm btn-default" title="[[topic:mark_resolved]]">
            <i class="fa fa-fw fa-check-square"></i> <span class="visible-sm-inline visible-md-inline visible-lg-inline"[[topic:thread_tools.markAsUnresolvedForAll]]</span>
        </button>
        <!-- ELSE -->
        <button component="topic/mark-unresolved" class="btn btn-sm btn-default" title="[[topic:mark_unresolved]]">
            <i class="fa fa-fw fa-check-square"></i> [[topic:thread_tools.markAsUnresolvedForAll]]
        <!-- ENDIF topics.unresolved -->
        </button>
    <!-- ENDIF loggedIn -->

    <!-- IMPORT partials/topic/watch.tpl -->

    <!-- IMPORT partials/topic/sort.tpl -->

    <div class="inline-block">
    <!-- IMPORT partials/thread_tools.tpl -->
    </div>
    <!-- IMPORT partials/topic/reply-button.tpl -->
</div>
