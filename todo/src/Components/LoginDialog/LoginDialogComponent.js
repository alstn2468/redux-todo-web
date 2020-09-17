import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
    DialogInput,
    DialogButton,
    DialogCloseButton,
} from "Components/Dialog";

const LoginDialogWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    background-color: ${(prop) =>
        prop.dialogOpen ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};
    z-index: ${(prop) => (prop.dialogOpen ? 100 : -100)};
`;

const LoginDialogContainer = styled.div`
    width: 25%;
    height: 250px;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease;
    opacity: ${(prop) => (prop.dialogOpen ? 1 : 0)};

    @media (min-width: 320px) and (max-width: 480px) {
        width: 80%;
        height: 200px;
    }
`;

const LoginDialogFormContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function LoginDialogComponent({
    username,
    password,
    onClickLoginButton,
    onChangeUsername,
    onChangePassword,
    onKeyPressEnter,
    dialogOpen,
    closeDialog,
    usernameValid,
    passwordValid,
}) {
    return (
        <LoginDialogWrapper className="dialog-wrapper" dialogOpen={dialogOpen}>
            <LoginDialogContainer
                className="dialog-container"
                dialogOpen={dialogOpen}
            >
                <DialogCloseButton onClick={closeDialog} />
                <LoginDialogFormContainer>
                    <DialogInput
                        label="USERNAME"
                        name="username"
                        type="text"
                        value={username}
                        onChange={onChangeUsername}
                        isValid={usernameValid}
                        maxLength={25}
                    />
                    <DialogInput
                        label="PASSWORD"
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                        onKeyPress={onKeyPressEnter}
                        isValid={passwordValid}
                        maxLength={30}
                    />
                    <DialogButton
                        onClick={onClickLoginButton}
                        disabled={!usernameValid || !passwordValid}
                        label="LOGIN"
                    />
                </LoginDialogFormContainer>
            </LoginDialogContainer>
        </LoginDialogWrapper>
    );
}

LoginDialogComponent.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onClickLoginButton: PropTypes.func.isRequired,
    onChangeUsername: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onKeyPressEnter: PropTypes.func.isRequired,
    dialogOpen: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
    usernameValid: PropTypes.bool.isRequired,
    passwordValid: PropTypes.bool.isRequired,
};

export default LoginDialogComponent;
