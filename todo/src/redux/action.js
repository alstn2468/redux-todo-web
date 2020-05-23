import { SUCCESS, ERROR } from '../Constants/SnackBarVariant';

export const SET_TODO_LIST = 'SET_TODO_LIST';
export const CREATE_TODO_ITEM = 'CREATE_TODO_ITEM';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const UPDATE_TODO_ITEM = 'UPDATE_TODO_ITEM';
export const CHANGE_TODO_ITEM_COMPLETED = 'CHANGE_TODO_ITEM_COMPLETED';
export const CLEAR_COMPLETED_TODO_ITEM = 'CLEAR_COMPLETED_TODO_ITEM';
export const SET_DISPLAY_FILTER = 'SET_DISPLAY_FILTER';
export const SET_SNACK_BAR_STATE = 'SET_SNACK_BAR_STATE';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';

export const todoDisplayFilter = {
    DISPLAY_ALL_TODO: 'DISPLAY_ALL_TODO',
    DISPLAY_COMPLETD_TODO: 'DISPLAY_COMPLETED_TODO',
    DISPLAY_UNCOMPLETD_TODO: 'DISPLAY_UNCOMPLETED_TODO',
};

const API_URL = process.env.REACT_APP_API_URL + 'todo';

function fetchTodoList() {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            const response_json = await response.json();
            const { data } = response_json;

            dispatch(setTodoList(data));
            dispatch(setIsFetching(false));
            return dispatch(
                setSnackBarState({
                    snackBarOpen: true,
                    snackBarVariant: SUCCESS,
                    snackBarContent: 'Success Fetch Todo List!',
                })
            );
        }

        dispatch(setIsFetching(false));
        return dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: ERROR,
                snackBarContent: 'Fail Fetch Todo List!',
            })
        );
    };
}

function addTodoItem(text) {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(text),
        });

        if (response.status === 200) {
            const response_json = await response.json();
            const { data } = response_json;

            dispatch(createTodoItem(data));
            dispatch(setIsFetching(false));

            return dispatch(
                setSnackBarState({
                    snackBarOpen: true,
                    snackBarVariant: SUCCESS,
                    snackBarContent: 'Success Add Todo Item!',
                })
            );
        }

        dispatch(setIsFetching(false));
        return dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: ERROR,
                snackBarContent: 'Fail Fetch Todo List!',
            })
        );
    };
}

function setIsFetching(isFetching) {
    return {
        type: SET_IS_FETCHING,
        isFetching,
    };
}

function setTodoList(todos) {
    return {
        type: SET_TODO_LIST,
        todos,
    };
}

function createTodoItem(item) {
    return {
        type: CREATE_TODO_ITEM,
        item,
    };
}

function deleteTodoItem(item) {
    return {
        type: DELETE_TODO_ITEM,
        item,
    };
}

function updateTodoItem(item) {
    return {
        type: UPDATE_TODO_ITEM,
        item,
    };
}

function changeTodoItemCompleted(item) {
    return {
        type: CHANGE_TODO_ITEM_COMPLETED,
        item,
    };
}

function clearCompletedTodoItem() {
    return {
        type: CLEAR_COMPLETED_TODO_ITEM,
    };
}

function setDisplayFilter(filter) {
    return {
        type: SET_DISPLAY_FILTER,
        filter,
    };
}

function setSnackBarState(snackBarState) {
    return {
        type: SET_SNACK_BAR_STATE,
        snackBarState,
    };
}

const actionCreators = {
    addTodoItem,
    deleteTodoItem,
    updateTodoItem,
    changeTodoItemCompleted,
    clearCompletedTodoItem,
    setDisplayFilter,
    setSnackBarState,
    fetchTodoList,
};

export default actionCreators;
