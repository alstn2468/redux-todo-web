import { combineReducers } from "redux";
import { authReducer } from "reducers/authReducer";
import { todoReducer } from "reducers/todoReducer";
import { todoDisplayFilterReducer } from "reducers/todoDisplayFilterReducer";
import { snackBarReducer } from "reducers/snackBarReducer";
import { loginDialogReducer } from "reducers/loginDialogReducer";
import { signUpDialogReducer } from "reducers/signUpDialogReducer";

const reducer = combineReducers({
    authReducer,
    todoReducer,
    todoDisplayFilterReducer,
    snackBarReducer,
    loginDialogReducer,
    signUpDialogReducer,
});

export default reducer;
