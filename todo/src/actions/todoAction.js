import Cookies from "universal-cookie";

import { SUCCESS, ERROR } from "Constants/SnackBarVariant";
import { API_URL } from "Constants/Url";
import { setIsFetching } from "actions/fetchAction";
import { logoutUser } from "actions/authAction";
import { setSnackBarState } from "actions/snackBarAction";

export const SET_TODO_LIST = "SET_TODO_LIST";
export const CREATE_TODO_ITEM = "CREATE_TODO_ITEM";
export const DELETE_TODO_ITEM = "DELETE_TODO_ITEM";
export const UPDATE_TODO_ITEM = "UPDATE_TODO_ITEM";
export const CLEAR_COMPLETED_TODO_ITEM = "CLEAR_COMPLETED_TODO_ITEM";

export function setTodoList(todos) {
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

const cookies = new Cookies();

export async function tokenIsExpired(dispatch, response) {
    const response_json = await response.json();
    const { error } = response_json;

    dispatch(logoutUser());

    setTimeout(() => dispatch(setIsFetching(false)), 150);

    return dispatch(
        setSnackBarState({
            snackBarOpen: true,
            snackBarVariant: ERROR,
            snackBarContent: error,
        })
    );
}

export function fetchTodoList() {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                Authorization: cookies.get("Access-Token"),
            },
        });

        if (response.status === 200) {
            const response_json = await response.json();
            const { data } = response_json;

            dispatch(setTodoList(data));
            setTimeout(() => dispatch(setIsFetching(false)), 150);

            return dispatch(
                setSnackBarState({
                    snackBarOpen: true,
                    snackBarVariant: SUCCESS,
                    snackBarContent: "Success Fetch Todo List!",
                })
            );
        }

        if (response.status === 403) {
            return tokenIsExpired(dispatch, response);
        }

        setTimeout(() => dispatch(setIsFetching(false)), 150);

        return dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: ERROR,
                snackBarContent: "Fail Fetch Todo List!",
            })
        );
    };
}

export function fetchCreateTodoItem(text) {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: cookies.get("Access-Token"),
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
                    snackBarContent: "Success Create Todo Item!",
                })
            );
        }

        setTimeout(() => dispatch(setIsFetching(false)), 150);

        return dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: ERROR,
                snackBarContent: "Fail Create Todo List!",
            })
        );
    };
}

export function fetchUpdateTodoItem(item) {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await fetch(API_URL + `/${item.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: cookies.get("Access-Token"),
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
                    snackBarContent: "Success Update Todo Item!",
                })
            );
        }

        setTimeout(() => dispatch(setIsFetching(false)), 150);

        return dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: ERROR,
                snackBarContent: "Fail Update Todo Item!",
            })
        );
    };
}

export function fetchDeleteTodoItem(item) {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await fetch(API_URL + `/${item.id}`, {
            method: "DELETE",
            headers: {
                Authorization: cookies.get("Access-Token"),
            },
        });

        if (response.status === 204) {
            dispatch(deleteTodoItem(item));
            setTimeout(() => dispatch(setIsFetching(false)), 150);

            return dispatch(
                setSnackBarState({
                    snackBarOpen: true,
                    snackBarVariant: SUCCESS,
                    snackBarContent: "Success Delete Todo Item!",
                })
            );
        }

        setTimeout(() => dispatch(setIsFetching(false)), 150);

        return dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: ERROR,
                snackBarContent: "Fail Delete Todo Item!",
            })
        );
    };
}

export function fetchClearCompletedTodoItem() {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await fetch(API_URL, {
            method: "DELETE",
            headers: {
                Authorization: cookies.get("Access-Token"),
            },
        });

        if (response.status === 204) {
            dispatch(clearCompletedTodoItem());
            setTimeout(() => dispatch(setIsFetching(false)), 150);

            return dispatch(
                setSnackBarState({
                    snackBarOpen: true,
                    snackBarVariant: SUCCESS,
                    snackBarContent: "Success Clear Completed Todo Items!",
                })
            );
        }

        setTimeout(() => dispatch(setIsFetching(false)), 150);

        return dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: ERROR,
                snackBarContent: "Fail Clear Completed Todo Items!",
            })
        );
    };
}
