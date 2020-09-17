import { todoDisplayFilter } from "actions/filterAction";

export function getDisplayTodos(state, filter) {
    switch (filter) {
        case todoDisplayFilter.DISPLAY_ALL_TODO:
            return { ...state };

        case todoDisplayFilter.DISPLAY_COMPLETD_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.isCompleted),
            };

        case todoDisplayFilter.DISPLAY_UNCOMPLETD_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => !todo.isCompleted),
            };

        default:
            throw new Error("Unknown Filter : " + filter);
    }
}
