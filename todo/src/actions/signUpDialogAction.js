export const OPEN_SIGNUP_DIALOG = "OPEN_SIGNUP_DIALOG";
export const CLOSE_SIGNUP_DIALOG = "CLOSE_SIGNUP_DIALOG";

export function openSignUpDialog() {
    return {
        type: OPEN_SIGNUP_DIALOG,
    };
}

export function closeSignUpDialog() {
    return {
        type: CLOSE_SIGNUP_DIALOG,
    };
}
