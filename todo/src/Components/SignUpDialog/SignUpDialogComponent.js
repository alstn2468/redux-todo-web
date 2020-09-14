import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
    DialogInfo,
    DialogCloseButton,
    DialogInput,
    DialogButton,
} from "Components/Dialog";

const SignUpDialogWrapper = styled.div`
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

const SignUpDialogContainer = styled.div`
    width: 25%;
    height: 300px;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease;
    opacity: ${(prop) => (prop.dialogOpen ? 1 : 0)};

    @media (min-width: 320px) and (max-width: 480px) {
        width: 80%;
        height: 230px;
    }
`;

const SignUpDialogFormContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function SignUpDialogComponent({
    username,
    password,
    passwordConfirm,
    usernameValid,
    passwordValid,
    passwordConfirmValid,
    passwordConfirmInputRef,
    dialogOpen,
    closeDialog,
    onChangeUsername,
    onChangePassword,
    onClickSignUpButton,
    onChangePasswordConfirm,
    onKeyPressEnter,
}) {
    return (
        <SignUpDialogWrapper className="dialog-wrapper" dialogOpen={dialogOpen}>
            <SignUpDialogContainer
                className="dialog-container"
                dialogOpen={dialogOpen}
            >
                <DialogInfo />
                <DialogCloseButton onClick={closeDialog} />
                <SignUpDialogFormContainer>
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
                        isValid={passwordValid}
                        maxLength={30}
                    />
                    <DialogInput
                        label="PASSWORD CONFIRM"
                        name="passwordConfirm"
                        type="password"
                        ref={passwordConfirmInputRef}
                        value={passwordConfirm}
                        onChange={onChangePasswordConfirm}
                        onKeyPress={onKeyPressEnter}
                        isValid={passwordConfirmValid}
                        maxLength={30}
                    />
                    <DialogButton
                        onClick={onClickSignUpButton}
                        disabled={
                            !usernameValid ||
                            !passwordValid ||
                            !passwordConfirmValid
                        }
                        label="SIGN UP"
                    />
                </SignUpDialogFormContainer>
            </SignUpDialogContainer>
        </SignUpDialogWrapper>
    );
}

SignUpDialogComponent.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirm: PropTypes.string.isRequired,
    onClickSignUpButton: PropTypes.func.isRequired,
    onChangeUsername: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onChangePasswordConfirm: PropTypes.func.isRequired,
    passwordConfirmInputRef: PropTypes.object.isRequired,
    dialogOpen: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
    usernameValid: PropTypes.bool.isRequired,
    passwordValid: PropTypes.bool.isRequired,
    passwordConfirmValid: PropTypes.bool.isRequired,
    onKeyPressEnter: PropTypes.func.isRequired,
};

export default SignUpDialogComponent;
