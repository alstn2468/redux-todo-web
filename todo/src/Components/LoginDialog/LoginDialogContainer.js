import React, { useState, useRef } from "react";
import LoginDialogComponent from "Components/LoginDialog/LoginDialogComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogin } from "actions/authAction";
import { closeLoginDialog } from "actions/loginDialogAction";
import { validUsername, validPassword } from "utils/Validation";

function LoginDialogContainer() {
    const dispatch = useDispatch();
    const { dialogOpen } = useSelector((state) => state.loginDialogReducer);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const passwordInputRef = useRef(null);
    const isValidUsername = validUsername(username);
    const isValidPassword = validPassword(password);

    function onClickLoginButton() {
        passwordInputRef.current && passwordInputRef.current.blur();
        dispatch(fetchLogin(username, password));
        setUsername("");
        setPassword("");
    }

    function onKeyPressEnter(event) {
        if (event.key === "Enter" && isValidUsername && isValidPassword) {
            onClickLoginButton();
        }
    }

    function closeDialog() {
        setUsername("");
        setPassword("");
        dispatch(closeLoginDialog());
    }

    function onChangeUsername(event) {
        setUsername(event.target.value);
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <LoginDialogComponent
            dialogOpen={dialogOpen}
            closeDialog={closeDialog}
            username={username}
            password={password}
            usernameValid={isValidUsername}
            passwordValid={isValidPassword}
            passwordInputRef={passwordInputRef}
            onClickLoginButton={onClickLoginButton}
            onKeyPressEnter={onKeyPressEnter}
            onChangePassword={onChangePassword}
            onChangeUsername={onChangeUsername}
        />
    );
}

export default LoginDialogContainer;
