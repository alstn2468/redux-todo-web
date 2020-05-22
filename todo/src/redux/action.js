import { SUCCESS } from "../Constants/SnackBarVariant";

export const SET_TODO_LIST = "SET_TODO_LIST";
export const CREATE_TODO_ITEM = "CREATE_TODO_ITEM";
export const DELETE_TODO_ITEM = "DELETE_TODO_ITEM";
export const UPDATE_TODO_ITEM = "UPDATE_TODO_ITEM";
export const CHANGE_TODO_ITEM_COMPLETED = "CHANGE_TODO_ITEM_COMPLETED";
export const CLEAR_COMPLETED_TODO_ITEM = "CLEAR_COMPLETED_TODO_ITEM";
export const SET_DISPLAY_FILTER = "SET_DISPLAY_FILTER";
export const SET_SNACK_BAR_STATE = "SET_SNACK_BAR_STATE";

export const todoDisplayFilter = {
    DISPLAY_ALL_TODO: "DISPLAY_ALL_TODO",
    DISPLAY_COMPLETD_TODO: "DISPLAY_COMPLETED_TODO",
    DISPLAY_UNCOMPLETD_TODO: "DISPLAY_UNCOMPLETED_TODO",
};

const API_URL = process.env.REACT_APP_API_URL + "todo";

function fetchTodoList() {
    return async (dispatch) => {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const response_json = await response.json();

        dispatch(setTodoList(response_json));
        dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: SUCCESS,
                snackBarContent: "Success Fetch Todo List!",
            })
        );
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
    createTodoItem,
    deleteTodoItem,
    updateTodoItem,
    changeTodoItemCompleted,
    clearCompletedTodoItem,
    setDisplayFilter,
    setSnackBarState,
    setTodoList,
    fetchTodoList,
};

export default actionCreators;
