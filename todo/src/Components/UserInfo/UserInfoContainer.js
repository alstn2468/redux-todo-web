import React, { useEffect } from 'react';
import UserInfoComponent from './UserInfoComponent';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function mapStateToProps(state) {
    return {
        ...state.authReducer,
    };
}

function UserInfoContainer({ isLoggedIn, user, dispatch }) {
    function onClickLoginButton() {
        dispatch(actionCreators.openLoginDialog());
    }

    function onClickSignUpButton() {
        dispatch(actionCreators.openSignUpDialog());
    }

    function onClickLogoutButton() {
        dispatch(actionCreators.fetchLogoutUser());
    }

    const cookieUser = cookies.get('User');

    useEffect(() => {
        function dispatchLoginUser() {
            dispatch(actionCreators.loginUser(cookieUser));
        }

        if (cookieUser) {
            dispatchLoginUser();
        }
    }, [dispatch, cookieUser]);

    return (
        <UserInfoComponent
            isLoggedIn={isLoggedIn}
            user={user}
            onClickLoginButton={onClickLoginButton}
            onClickLogoutButton={onClickLogoutButton}
            onClickSignUpButton={onClickSignUpButton}
        />
    );
}

export default connect(mapStateToProps)(UserInfoContainer);
