import { SUCCESS } from "../Constants/SnackBarVariant";

export const initialLoggedInState = {
    isLoggedIn: false,
    user: "",
};

export const initialTodoState = {
    todos: [],
    isFetching: false,
    completed: 0,
    uncompleted: 0,
};

export const initialDialogState = {
    dialogOpen: false,
};

export const initialSnackBarState = {
    snackBarOpen: false,
    snackBarVariant: SUCCESS,
    snackBarContent: "",
};
