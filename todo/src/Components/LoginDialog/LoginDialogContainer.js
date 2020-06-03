import React, { useState, useRef } from 'react';
import LoginDialogComponent from './LoginDialogComponent';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';
import { validUsername, validPassword } from 'utils/Validation';

function mapStateToProps(state) {
    return {
        ...state.loginDialogReducer,
    };
}

function LoginDialogContainer({ dialogOpen, dispatch }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const passwordInputRef = useRef(null);
    const isValidUsername = validUsername(username);
    const isValidPassword = validPassword(password);

    function onClickLoginButton() {
        passwordInputRef.current && passwordInputRef.current.blur();
        dispatch(actionCreators.fetchLogin(username, password));
        setUsername('');
        setPassword('');
    }

    function onKeyPressEnter(event) {
        if (event.key === 'Enter' && isValidUsername && isValidPassword) {
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

export default connect(mapStateToProps)(LoginDialogContainer);
