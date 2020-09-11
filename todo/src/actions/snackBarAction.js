export const SET_SNACK_BAR_STATE = "SET_SNACK_BAR_STATE";

export function setSnackBarState(snackBarState) {
    return {
        type: SET_SNACK_BAR_STATE,
        snackBarState,
    };
}
