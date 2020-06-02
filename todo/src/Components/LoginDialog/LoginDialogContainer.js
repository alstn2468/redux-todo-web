import React, { useState, useRef } from 'react';
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
    const passwordInputRef = useRef(null);

    function onClickLoginButton() {
        passwordInputRef.current && passwordInputRef.current.blur();
        dispatch(actionCreators.fetchLogin(username, password));
        setUsername('');
        setPassword('');
    }

    function onKeyPressEnter(event) {
        if (
            event.key === 'Enter' &&
            username.length >= usernameMinLength &&
            password.length >= passwordMinLength
        ) {
            onClickLoginButton();
        }
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
            passwordInputRef={passwordInputRef}
            onClickLoginButton={onClickLoginButton}
            onKeyPressEnter={onKeyPressEnter}
            onChangePassword={onChangePassword}
            onChangeUsername={onChangeUsername}
        />
    );
}

export default connect(mapStateToProps)(LoginDialogContainer);
