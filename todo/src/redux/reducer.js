import Cookies from 'universal-cookie';
import { combineReducers } from 'redux';
import {
    LOGIN_USER,
    LOGOUT_USER,
    CREATE_TODO_ITEM,
    DELETE_TODO_ITEM,
    UPDATE_TODO_ITEM,
    CLEAR_COMPLETED_TODO_ITEM,
    OPEN_LOGIN_DIALOG,
    CLOSE_LOGIN_DIALOG,
    OPEN_SIGNUP_DIALOG,
    CLOSE_SIGNUP_DIALOG,
    SET_DISPLAY_FILTER,
    SET_SNACK_BAR_STATE,
    SET_TODO_LIST,
    SET_IS_FETCHING,
    todoDisplayFilter,
} from 'redux/action';
import { SUCCESS } from '../Constants/SnackBarVariant';

const cookies = new Cookies();

const initialLoggedInState = {
    isLoggedIn: false,
    user: '',
};

const initialState = {
    todos: [],
    isFetching: false,
    completed: 0,
    uncompleted: 0,
};

const initialDialogState = {
    dialogOpen: false,
};

export const initialSnackBarState = {
    snackBarOpen: false,
    snackBarVariant: SUCCESS,
    snackBarContent: '',
};

function authReducer(state = initialLoggedInState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isLoggedIn: true,
                user: action.user,
            };

        case LOGOUT_USER:
            cookies.remove('Access-Token');
            cookies.remove('User');

            return {
                ...initialLoggedInState,
            };

        default:
            return state;
    }
}

function todoReducer(state = initialState, action) {
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

function loginDialogReducer(state = initialDialogState, action) {
    switch (action.type) {
        case OPEN_LOGIN_DIALOG:
            return {
                ...state,
                dialogOpen: true,
            };

        case CLOSE_LOGIN_DIALOG:
            return {
                ...state,
                dialogOpen: false,
            };
        default:
            return {
                ...state,
            };
    }
}

function signUpDialogReducer(state = initialDialogState, action) {
    switch (action.type) {
        case OPEN_SIGNUP_DIALOG:
            return {
                ...state,
                dialogOpen: true,
            };

        case CLOSE_SIGNUP_DIALOG:
            return {
                ...state,
                dialogOpen: false,
            };
        default:
            return {
                ...state,
            };
    }
}

const reducer = combineReducers({
    authReducer,
    todoReducer,
    todoDisplayFilterReducer,
    snackBarReducer,
    loginDialogReducer,
    signUpDialogReducer,
});

export default reducer;
