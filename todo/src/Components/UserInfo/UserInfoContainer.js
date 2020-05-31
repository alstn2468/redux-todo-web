import React from 'react';
import UserInfoComponent from './UserInfoComponent';
import { connect } from 'react-redux';
import { openLoginDialog } from 'redux/action';

function mapStateToProps(state) {
    return {
        ...state.authReducer,
    };
}

function UserInfoContainer({ isLoggedIn, user, dispatch }) {
    function onClickLoginButton() {
        dispatch(openLoginDialog());
    }
    return (
        <UserInfoComponent
            isLoggedIn={isLoggedIn}
            user={user}
            onClickLoginButton={onClickLoginButton}
        />
    );
}

export default connect(mapStateToProps)(UserInfoContainer);
