import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Username from "Components/UserInfo/Username";
import AuthButton from "Components/UserInfo/AuthButton";

const UserInfoContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    margin-bottom: -20px;
    z-index: 10;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 90%;
    }
`;

const AuthButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    padding-right: 5px;
`;

const AuthButtonDivisor = styled.div`
    font-size: 18px;
    margin: 0 5px;
    margin-top: -4px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 10px;
        margin: 0 2px;
        margin-top: -2px;
    }
`;

function UserInfoComponent({
    isLoggedIn,
    user,
    onClickLoginButton,
    onClickLogoutButton,
    onClickSignUpButton,
}) {
    return (
        <UserInfoContainer>
            <Username isLoggedIn={isLoggedIn} user={user} />
            <AuthButtonContainer>
                {isLoggedIn ? (
                    <AuthButton onClick={onClickLogoutButton} label="LOGOUT" />
                ) : (
                    <>
                        <AuthButton
                            onClick={onClickLoginButton}
                            label="LOGIN"
                        />
                        <AuthButtonDivisor>/</AuthButtonDivisor>
                        <AuthButton
                            onClick={onClickSignUpButton}
                            label="SIGN UP"
                        />
                    </>
                )}
            </AuthButtonContainer>
        </UserInfoContainer>
    );
}

UserInfoComponent.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.string,
    onClickLoginButton: PropTypes.func.isRequired,
    onClickLogoutButton: PropTypes.func.isRequired,
};

export default UserInfoComponent;
