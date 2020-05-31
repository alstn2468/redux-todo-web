import React, { useState } from 'react';
import LoginDialogComponent from './LoginDialogComponent';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';

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
            onClickLoginButton={onClickLoginButton}
            onChangePassword={onChangePassword}
            onChangeUsername={onChangeUsername}
        />
    );
}

export default connect(mapStateToProps)(LoginDialogContainer);
