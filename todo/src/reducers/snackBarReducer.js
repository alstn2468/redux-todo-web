import { SET_SNACK_BAR_STATE } from "actions/snackBarAction";
import { initialSnackBarState } from "reducers/initialState";

export function snackBarReducer(state = initialSnackBarState, action) {
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
