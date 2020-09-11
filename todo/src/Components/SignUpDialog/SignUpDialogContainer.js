import React, { useState, useRef } from "react";
import SignUpDialogComponent from "Components/SignUpDialog/SignUpDialogComponent";
import { connect } from "react-redux";
import { fetchSignUp } from "actions/authAction";
import { closeSignUpDialog } from "actions/signUpDialogAction";
import {
    validUsername,
    validPassword,
    validPasswordConfirm,
} from "utils/Validation";

function mapStateToProps(state) {
    return {
        ...state.signUpDialogReducer,
    };
}

function SignUpDialogContainer({ dialogOpen, dispatch }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const passwordConfirmInputRef = useRef(null);
    const isValidUsername = validUsername(username);
    const isValidPassword = validPassword(password);
    const isValidPasswordConfirm = validPasswordConfirm(
        password,
        passwordConfirm
    );

    function onClickSignUpButton() {
        setUsername("");
        setPassword("");
        setPasswordConfirm("");
        passwordConfirmInputRef.current &&
            passwordConfirmInputRef.current.blur();
        dispatch(fetchSignUp(username, password, passwordConfirm));
    }

    function onKeyPressEnter(event) {
        if (
            event.key === "Enter" &&
            isValidUsername &&
            isValidPassword &&
            isValidPasswordConfirm
        ) {
            onClickSignUpButton();
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
            passwordConfirmInputRef={passwordConfirmInputRef}
            onClickSignUpButton={onClickSignUpButton}
            onChangePassword={onChangePassword}
            onChangeUsername={onChangeUsername}
            onChangePasswordConfirm={onChangePasswordConfirm}
            onKeyPressEnter={onKeyPressEnter}
        />
    );
}

export default connect(mapStateToProps)(SignUpDialogContainer);
