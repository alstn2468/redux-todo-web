import React, { useState, useRef } from 'react';
import SignUpDialogComponent from './SignUpDialogComponent';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';
import {
    validUsername,
    validPassword,
    validPasswordConfirm,
} from 'utils/Validation';

function mapStateToProps(state) {
    return {
        ...state.signUpDialogReducer,
    };
}

function SignUpDialogContainer({ dialogOpen, dispatch }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const passwordConfirmInputRef = useRef(null);

    function onClickSignUpButton() {
        setUsername('');
        setPassword('');
        setPasswordConfirm('');
        passwordConfirmInputRef.current &&
            passwordConfirmInputRef.current.blur();
        dispatch(
            actionCreators.fetchSignUp(username, password, passwordConfirm)
        );
    }

    function onKeyPressEnter(event) {
        if (event.key === 'Enter') {
            onClickSignUpButton();
        }
    }

    function closeDialog() {
        setUsername('');
        setPassword('');
        setPasswordConfirm('');
        dispatch(actionCreators.closeSignUpDialog());
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
            usernameValid={validUsername(username)}
            passwordValid={validPassword(password)}
            passwordConfirmValid={validPasswordConfirm(
                password,
                passwordConfirm
            )}
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
