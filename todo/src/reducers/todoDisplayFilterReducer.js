import { SET_DISPLAY_FILTER, todoDisplayFilter } from "actions/filterAction";

export function todoDisplayFilterReducer(
    state = todoDisplayFilter.DISPLAY_ALL_TODO,
    action
) {
    switch (action.type) {
        case SET_DISPLAY_FILTER:
            return action.filter;

        default:
            return state;
    }
}
