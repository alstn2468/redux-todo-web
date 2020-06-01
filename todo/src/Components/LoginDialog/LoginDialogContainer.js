import React, { useState } from 'react';
import LoginDialogComponent from './LoginDialogComponent';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';
import { usernameMinLength, passwordMinLength } from 'Constants/Regex';

function mapStateToProps(state) {
    return {
        ...state.loginDialogReducer,
    };
}

function LoginDialogContainer({ dialogOpen, dispatch }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onClickLoginButton() {
        dispatch(actionCreators.fetchLogin(username, password));
    }

    function closeDialog() {
        setUsername('');
        setPassword('');
        dispatch(actionCreators.closeLoginDialog());
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
            usernameValid={username.length >= usernameMinLength}
            passwordValid={password.length >= passwordMinLength}
            onClickLoginButton={onClickLoginButton}
            onChangePassword={onChangePassword}
            onChangeUsername={onChangeUsername}
        />
    );
}

export default connect(mapStateToProps)(LoginDialogContainer);
