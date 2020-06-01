import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as BaseUserIcon } from 'assets/Icons/user.svg';

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

const UserIcon = styled(BaseUserIcon)`
    width: 15px;
    height: 15px;
    margin-right: 3px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 10px;
        height: 10px;
    }
`;

const UserName = styled.div`
    display: flex;
    justify-content: flex-start;
    flex: 1;
    font-size: 20px;
    padding-left: 5px;
    align-items: baseline;
    user-select: none;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 10px;
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

const AuthButton = styled.button`
    font-size: 20px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 10px;
    }
`;

function UserInfoComponent({
    isLoggedIn,
    user,
    onClickLoginButton,
    onClickLogoutButton,
}) {
    return (
        <UserInfoContainer>
            <UserName>
                {isLoggedIn && <UserIcon className="user-info-icon" />}
                {user}
            </UserName>
            <AuthButtonContainer>
                {isLoggedIn ? (
                    <AuthButton
                        className="auth-button"
                        onClick={onClickLogoutButton}
                    >
                        LOGOUT
                    </AuthButton>
                ) : (
                    <>
                        <AuthButton
                            className="auth-button"
                            onClick={onClickLoginButton}
                        >
                            LOGIN
                        </AuthButton>
                        <AuthButtonDivisor>/</AuthButtonDivisor>
                        <AuthButton
                            className="auth-button"
                            onClick={() => console.log('SIGN UP')}
                        >
                            SIGN UP
                        </AuthButton>
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
