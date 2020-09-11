import Cookies from "universal-cookie";
import { BASE_URL } from "Constants/URL";
import { ERROR } from "Constants/SnackBarVariant";
import { setIsFetching } from "actions/fetchAction";
import { closeSignUpDialog } from "actions/signUpDialogAction";
import { closeLoginDialog } from "actions/loginDialogAction";
import { setSnackBarState } from "actions/snackBarAction";
import { setTodoList } from "actions/todoAction";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

const cookies = new Cookies();

export function fetchSignUp(username, password, passwordConfirm) {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await fetch(BASE_URL + "signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: username,
                password: password,
                passwordConfirm: passwordConfirm,
            }),
        });

        const response_json = await response.json();

        if (response.status === 201) {
            const { access_token, user } = response_json;

            cookies.set("Access-Token", access_token);
            cookies.set("User", user);

            dispatch(loginUser(user));
            setTimeout(() => dispatch(setIsFetching(false)), 150);

            return dispatch(closeSignUpDialog());
        }

        setTimeout(() => dispatch(setIsFetching(false)), 150);

        const { error } = response_json;

        return dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: ERROR,
                snackBarContent: error,
            })
        );
    };
}

export function fetchLogin(username, password) {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await fetch(BASE_URL + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: username,
                password: password,
            }),
        });

        const response_json = await response.json();

        if (response.status === 200) {
            const { access_token, user } = response_json;

            cookies.set("Access-Token", access_token);
            cookies.set("User", user);

            dispatch(loginUser(user));
            setTimeout(() => dispatch(setIsFetching(false)), 150);

            return dispatch(closeLoginDialog());
        }

        setTimeout(() => dispatch(setIsFetching(false)), 150);

        const { error } = response_json;

        return dispatch(
            setSnackBarState({
                snackBarOpen: true,
                snackBarVariant: ERROR,
                snackBarContent: error,
            })
        );
    };
}

export function fetchLogoutUser() {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(logoutUser());
        dispatch(setTodoList([]));
        return setTimeout(() => dispatch(setIsFetching(false)), 300);
    };
}

export function loginUser(user) {
    return {
        type: LOGIN_USER,
        user,
    };
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
    };
}
