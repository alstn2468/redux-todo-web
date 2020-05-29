import { SUCCESS, ERROR } from '../Constants/SnackBarVariant';

export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_TODO_LIST = 'SET_TODO_LIST';
export const CREATE_TODO_ITEM = 'CREATE_TODO_ITEM';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const UPDATE_TODO_ITEM = 'UPDATE_TODO_ITEM';
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
        });

        if (response.status === 200) {
            const response_json = await response.json();
            const { data } = response_json;

            setTimeout(() => dispatch(setIsFetching(false)), 150);
            dispatch(setTodoList(data));

            return dispatch(
                setSnackBarState({
                    snackBarOpen: true,
                    snackBarVariant: SUCCESS,
                    snackBarContent: 'Success Fetch Todo List!',
                })
            );
        }

        setTimeout(() => dispatch(setIsFetching(false)), 150);

        return dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: ERROR,
                snackBarContent: 'Fail Fetch Todo List!',
            })
        );
    };
}

function fetchCreateTodoItem(text) {
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
            setTimeout(() => dispatch(setIsFetching(false)), 150);

            return dispatch(
                setSnackBarState({
                    snackBarOpen: true,
                    snackBarVariant: SUCCESS,
                    snackBarContent: 'Success Add Todo Item!',
                })
            );
        }

        setTimeout(() => dispatch(setIsFetching(false)), 150);

        return dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: ERROR,
                snackBarContent: 'Fail Fetch Todo List!',
            })
        );
    };
}

function fetchUpdateTodoItem(item) {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await fetch(API_URL + `/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });

        if (response.status === 200) {
            const response_json = await response.json();
            const { data } = response_json;

            dispatch(updateTodoItem(data));
            setTimeout(() => dispatch(setIsFetching(false)), 150);

            return dispatch(
                setSnackBarState({
                    snackBarOpen: true,
                    snackBarVariant: SUCCESS,
                    snackBarContent: 'Success Update Todo Item!',
                })
            );
        }

        setTimeout(() => dispatch(setIsFetching(false)), 150);

        return dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: ERROR,
                snackBarContent: 'Fail Update Todo Item!',
            })
        );
    };
}

function fetchDeleteTodoItem(item) {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await fetch(API_URL + `/${item.id}`, {
            method: 'DELETE',
        });

        if (response.status === 204) {
            dispatch(deleteTodoItem(item));
            setTimeout(() => dispatch(setIsFetching(false)), 150);

            return dispatch(
                setSnackBarState({
                    snackBarOpen: true,
                    snackBarVariant: SUCCESS,
                    snackBarContent: 'Success Delete Todo Item!',
                })
            );
        }

        setTimeout(() => dispatch(setIsFetching(false)), 150);

        return dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: ERROR,
                snackBarContent: 'Fail Delete Todo Item!',
            })
        );
    };
}

function fetchClearCompletedTodoItem() {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await fetch(API_URL, {
            method: 'DELETE',
        });

        if (response.status === 204) {
            dispatch(clearCompletedTodoItem());
            setTimeout(() => dispatch(setIsFetching(false)), 150);

            return dispatch(
                setSnackBarState({
                    snackBarOpen: true,
                    snackBarVariant: SUCCESS,
                    snackBarContent: 'Success Clear Completed Todo Items!',
                })
            );
        }

        setTimeout(() => dispatch(setIsFetching(false)), 150);

        return dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: ERROR,
                snackBarContent: 'Fail Clear Completed Todo Items!',
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
    fetchTodoList,
    fetchCreateTodoItem,
    fetchUpdateTodoItem,
    fetchDeleteTodoItem,
    fetchClearCompletedTodoItem,
    setDisplayFilter,
    setSnackBarState,
};

export default actionCreators;
