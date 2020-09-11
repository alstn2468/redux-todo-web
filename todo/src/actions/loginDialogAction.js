export const OPEN_LOGIN_DIALOG = "OPEN_LOGIN_DIALOG";
export const CLOSE_LOGIN_DIALOG = "CLOSE_LOGIN_DIALOG";

export function openLoginDialog() {
    return {
        type: OPEN_LOGIN_DIALOG,
    };
}

export function closeLoginDialog() {
    return {
        type: CLOSE_LOGIN_DIALOG,
    };
}
