import React, { useState } from 'react';
import LoginDialogComponent from './LoginDialogComponent';
import { connect } from 'react-redux';
import { closeLoginDialog } from 'redux/action';

function mapStateToProps(state) {
    return {
        ...state.loginDialogReducer,
    };
}

function LoginDialogContainer({ dialogOpen, dispatch }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function closeDialog() {
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
            onChangePassword={onChangePassword}
            onChangeUsername={onChangeUsername}
        />
    );
}

export default connect(mapStateToProps)(LoginDialogContainer);
