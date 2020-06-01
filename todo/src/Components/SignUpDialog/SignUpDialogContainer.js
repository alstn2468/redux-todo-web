import React, { useState } from 'react';
import SignUpDialogComponent from './SignUpDialogComponent';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';
import { usernameMinLength, passwordMinLength } from 'Constants/Regex';

function mapStateToProps(state) {
    return {
        ...state.signUpDialogReducer,
    };
}

function SignUpDialogContainer({ dialogOpen, dispatch }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    function onClickSignUpButton() {}

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

    function onChangePasswordConfrim(event) {
        setPasswordConfirm(event.target.value);
    }

    return (
        <SignUpDialogComponent
            dialogOpen={dialogOpen}
            closeDialog={closeDialog}
            username={username}
            password={password}
            passwordConfirm={passwordConfirm}
            usernameValid={username.length >= usernameMinLength}
            passwordValid={password.length >= passwordMinLength}
            passwordConfirmValid={
                passwordConfirm.length >= passwordMinLength &&
                password === passwordConfirm
            }
            onClickSignUpButton={onClickSignUpButton}
            onChangePassword={onChangePassword}
            onChangeUsername={onChangeUsername}
            onChangePasswordConfrim={onChangePasswordConfrim}
        />
    );
}

export default connect(mapStateToProps)(SignUpDialogContainer);
