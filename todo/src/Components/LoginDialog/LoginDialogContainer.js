import React from 'react';
import LoginDialogComponent from './LoginDialogComponent';
import { connect } from 'react-redux';
import { closeLoginDialog } from 'redux/action';

function mapStateToProps(state) {
    return {
        ...state.loginDialogReducer,
    };
}

function LoginDialogContainer({ dialogOpen, dispatch }) {
    function closeDialog() {
        dispatch(closeLoginDialog());
    }

    return (
        <LoginDialogComponent
            dialogOpen={dialogOpen}
            closeDialog={closeDialog}
        />
    );
}

export default connect(mapStateToProps)(LoginDialogContainer);
