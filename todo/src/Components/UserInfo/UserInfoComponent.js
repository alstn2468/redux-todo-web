import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const UserName = styled.div`
    display: flex;
    justify-content: flex-start;
    flex: 1;
    font-size: 20px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 10px;
    }
`;

const AuthButton = styled.button`
    font-size: 20px;
    display: flex;
    justify-content: flex-end;
    flex: 1;
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 10px;
    }
`;

function UserInfoComponent({ isLoggedIn, user }) {
    return (
        <UserInfoContainer>
            <UserName>{user}</UserName>
            {isLoggedIn ? (
                <AuthButton className="auth-button">LOGOUT</AuthButton>
            ) : (
                <AuthButton className="auth-button">LOGIN</AuthButton>
            )}
        </UserInfoContainer>
    );
}

UserInfoComponent.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.string,
};

export default UserInfoComponent;
