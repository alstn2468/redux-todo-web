import React, { useState } from "react";
import SignUpDialogComponent from "Components/SignUpDialog/SignUpDialogComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUp } from "actions/authAction";
import { closeSignUpDialog } from "actions/signUpDialogAction";
import {
    validUsername,
    validPassword,
    validPasswordConfirm,
} from "utils/Validation";

function SignUpDialogContainer() {
    const dispatch = useDispatch();
    const { dialogOpen } = useSelector((state) => state.signUpDialogReducer);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const isValidUsername = validUsername(username);
    const isValidPassword = validPassword(password);
    const isValidPasswordConfirm = validPasswordConfirm(
        password,
        passwordConfirm
    );

    function onClickSignUpButton(event) {
        setUsername("");
        setPassword("");
        setPasswordConfirm("");
        event.target.blur();
        dispatch(fetchSignUp(username, password, passwordConfirm));
    }

    function onKeyPressEnter(event) {
        if (
            event.key === "Enter" &&
            isValidUsername &&
            isValidPassword &&
            isValidPasswordConfirm
        ) {
            onClickSignUpButton(event);
        }
    }

    function closeDialog() {
        setUsername("");
        setPassword("");
        setPasswordConfirm("");
        dispatch(closeSignUpDialog());
    }

    function onChangeUsername(event) {
        setUsername(event.target.value);
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    function onChangePasswordConfirm(event) {
        setPasswordConfirm(event.target.value);
    }

    return (
        <SignUpDialogComponent
            dialogOpen={dialogOpen}
            closeDialog={closeDialog}
            username={username}
            password={password}
            passwordConfirm={passwordConfirm}
            usernameValid={isValidUsername}
            passwordValid={isValidPassword}
            passwordConfirmValid={isValidPasswordConfirm}
            onClickSignUpButton={onClickSignUpButton}
            onChangePassword={onChangePassword}
            onChangeUsername={onChangeUsername}
            onChangePasswordConfirm={onChangePasswordConfirm}
            onKeyPressEnter={onKeyPressEnter}
        />
    );
}

export default SignUpDialogContainer;
