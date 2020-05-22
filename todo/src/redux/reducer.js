import { combineReducers } from 'redux';
import {
    CREATE_TODO_ITEM,
    CHANGE_TODO_ITEM_COMPLETED,
    DELETE_TODO_ITEM,
    UPDATE_TODO_ITEM,
    CLEAR_COMPLETED_TODO_ITEM,
    SET_DISPLAY_FILTER,
    SET_SNACK_BAR_STATE,
    SET_TODO_LIST,
    todoDisplayFilter,
} from 'redux/action';
import { SUCCESS } from '../Constants/SnackBarVariant';

const initialState = {
    todos: [],
    isFetching: true,
    completed: 0,
    uncompleted: 0,
};

export const initialSnackBarState = {
    snackBarOpen: false,
    snackBarVariant: SUCCESS,
    snackBarContent: '',
};

function todoReducer(state = initialState, action) {
    let newTodos;

    switch (action.type) {
        case SET_TODO_LIST:
            const {
                todos: { data },
            } = action;
            const completed = data.filter((todo) => todo.isCompleted).length;
            const uncompleted = data.filter((todo) => !todo.isCompleted).length;

            return {
                ...state,
                todos: data,
                completed: completed,
                uncompleted: uncompleted,
                isFetching: false,
            };

        case CREATE_TODO_ITEM:
            return {
                ...state,
                todos: [...state.todos, action.item],
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

        case CHANGE_TODO_ITEM_COMPLETED:
            newTodos = state.todos.map((todo) => {
                if (todo.id === action.item.id) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted,
                    };
                }
                return todo;
            });

            if (action.item.isCompleted) {
                return {
                    todos: newTodos,
                    completed: state.completed - 1,
                    uncompleted: state.uncompleted + 1,
                };
            }

            return {
                todos: newTodos,
                completed: state.completed + 1,
                uncompleted: state.uncompleted - 1,
            };

        case UPDATE_TODO_ITEM:
            newTodos = state.todos.map((todo) => {
                if (todo.id === action.item.id) {
                    if (todo.isCompleted) {
                        return {
                            ...todo.item,
                            isCompleted: !todo.isCompleted,
                            text: action.item.text,
                        };
                    }

                    return {
                        ...todo,
                        text: action.item.text,
                    };
                }
                return todo;
            });

            if (action.item.isCompleted) {
                return {
                    todos: newTodos,
                    completed: state.completed - 1,
                    uncompleted: state.uncompleted + 1,
                };
            }

            return {
                ...state,
                todos: newTodos,
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

function todoDisplayFilterReducer(
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

function snackBarReducer(state = initialSnackBarState, action) {
    switch (action.type) {
        case SET_SNACK_BAR_STATE:
            return {
                ...state,
                ...action.snackBarState,
            };

        default:
            return {
                ...state,
            };
    }
}

const reducer = combineReducers({
    todoReducer,
    todoDisplayFilterReducer,
    snackBarReducer,
});

export default reducer;
