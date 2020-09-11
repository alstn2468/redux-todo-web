import {
    CREATE_TODO_ITEM,
    DELETE_TODO_ITEM,
    UPDATE_TODO_ITEM,
    CLEAR_COMPLETED_TODO_ITEM,
    SET_TODO_LIST,
} from "actions/todoAction";
import { SET_IS_FETCHING } from "actions/fetchAction";
import { initialTodoState } from "reducers/initialState";

export function todoReducer(state = initialTodoState, action) {
    let newTodos, completed, uncompleted;

    switch (action.type) {
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };

        case SET_TODO_LIST:
            const { todos } = action;

            if (todos.length > 0) {
                completed = todos.filter((todo) => todo.isCompleted).length;
                uncompleted = todos.filter((todo) => !todo.isCompleted).length;
            } else {
                completed = 0;
                uncompleted = 0;
            }

            return {
                ...state,
                todos: todos,
                completed: completed,
                uncompleted: uncompleted,
            };

        case CREATE_TODO_ITEM:
            return {
                ...state,
                todos: [action.item, ...state.todos],
                uncompleted: state.uncompleted + 1,
            };

        case DELETE_TODO_ITEM:
            newTodos = state.todos.filter((todo) => todo.id !== action.item.id);

            if (action.item.isCompleted) {
                return {
                    ...state,
                    todos: newTodos,
                    completed: state.completed - 1,
                };
            }

            return {
                ...state,
                todos: newTodos,
                uncompleted: state.uncompleted - 1,
            };

        case UPDATE_TODO_ITEM:
            newTodos = state.todos.map((todo) => {
                if (todo.id === action.item.id) {
                    return {
                        ...action.item,
                    };
                }
                return todo;
            });

            completed = newTodos.filter((todo) => todo.isCompleted).length;
            uncompleted = newTodos.filter((todo) => !todo.isCompleted).length;

            return {
                ...state,
                todos: newTodos,
                completed: completed,
                uncompleted: uncompleted,
            };

        case CLEAR_COMPLETED_TODO_ITEM:
            newTodos = state.todos.filter((todo) => !todo.isCompleted);

            return {
                ...state,
                todos: newTodos,
                completed: 0,
            };

        default:
            return state;
    }
}
