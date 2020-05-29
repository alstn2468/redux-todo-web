import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserInfoContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: -20px;
    z-index: 10;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 88%;
    }
`;

const UserName = styled.div`
    display: block;
    font-size: 20px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
    }
`;

const AuthButton = styled.button`
    font-size: 20px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
    }
`;

function UserInfoComponent({ isLoggedIn, user }) {
    return (
        <UserInfoContainer>
            {isLoggedIn ? (
                <>
                    <UserName>{user}</UserName>
                    <AuthButton className="auth-button logout">
                        LOGOUT
                    </AuthButton>
                </>
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
