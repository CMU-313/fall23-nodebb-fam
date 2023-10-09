<!-- IF privileges.view_thread_tools -->
<div title="[[topic:thread_tools.title]]" class="btn-group thread-tools bottom-sheet">
    <button class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" type="button">
        <i class="fa fa-fw fa-gear"></i>
    </button>
    <ul class="dropdown-menu dropdown-menu-right"></ul>
</div>
<div title="[[topic:mark_unresolved]]" class="btn-group thread-tools bottom-sheet">
    <button class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" type="button">
        <ul class="dropdown-menu pull-right">
        <li>
            <a component="topic/mark-unresolved-for-all" href="#">
                <i class="fa fa-fw fa-inbox"></i> [[topic:thread_tools.markAsUnresolvedForAll]]
            </a>
        </li>
        <li>
            <a component="topic/pin" href="#">
                <i class="fa fa-fw fa-thumb-tack"></i> [[topic:thread_tools.pin]]
            </a>
        </li>
        <li>
            <a component="topic/unpin" href="#">
                <i class="fa fa-fw fa-thumb-tack fa-rotate-90"></i> [[topic:thread_tools.unpin]]
            </a>
        </li>
        </ul>
    </button>
    <ul class="dropdown-menu dropdown-menu-right"></ul>
</div>
<!-- ENDIF privileges.view_thread_tools -->