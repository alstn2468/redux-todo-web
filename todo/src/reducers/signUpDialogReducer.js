import {
    OPEN_SIGNUP_DIALOG,
    CLOSE_SIGNUP_DIALOG,
} from "actions/signUpDialogAction";
import { initialDialogState } from "reducers/initialState";

export function signUpDialogReducer(state = initialDialogState, action) {
    switch (action.type) {
        case OPEN_SIGNUP_DIALOG:
            return {
                ...state,
                dialogOpen: true,
            };

        case CLOSE_SIGNUP_DIALOG:
            return {
                ...state,
                dialogOpen: false,
            };
        default:
            return {
                ...state,
            };
    }
}
