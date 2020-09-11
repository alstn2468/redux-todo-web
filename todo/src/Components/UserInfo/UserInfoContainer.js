import React, { useEffect } from "react";
import UserInfoComponent from "Components/UserInfo/UserInfoComponent";
import { connect } from "react-redux";
import { openLoginDialog } from "actions/loginDialogAction";
import { openSignUpDialog } from "actions/signUpDialogAction";
import { loginUser, fetchLogoutUser } from "actions/authAction";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function mapStateToProps(state) {
    return {
        ...state.authReducer,
    };
}

function UserInfoContainer({ isLoggedIn, user, dispatch }) {
    function onClickLoginButton() {
        dispatch(openLoginDialog());
    }

    function onClickSignUpButton() {
        dispatch(openSignUpDialog());
    }

    function onClickLogoutButton() {
        dispatch(fetchLogoutUser());
    }

    const cookieUser = cookies.get("User");

    useEffect(() => {
        if (cookieUser) {
            dispatch(loginUser(cookieUser));
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
