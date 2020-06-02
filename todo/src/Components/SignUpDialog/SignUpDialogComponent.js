import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from 'assets/Icons/close.svg';

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
        prop.dialogOpen ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'};
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

const CloseButtonContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;
const CloseButton = styled.button`
    width: 14px;
    height: 14px;
    margin-right: 10px;
    margin-bottom: 15px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 11px;
        height: 11px;
        margin-bottom: 5px;
    }
`;

const SignUpDialogFormContainer = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    align-items: center;
    margin-top: -25px;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-top: -25px;
    }
`;

const SignUpDialogLabel = styled.label`
    font-size: 16px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
    }
`;

const SignUpDialogInput = styled.input`
    width: 60%;
    margin-top: 5px;
    margin-bottom: 8px;
    height: 30px;
    padding-left: 5px;

    &:focus {
        outline: none;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        height: 20px;
    }
`;

const ValidStatus = styled.span`
    transition: all 0.5s ease;
    margin-top: -10px;
    margin-bottom: 10px;
    width: ${(props) => (props.isValid ? '60%' : '0%')};
    height: 2px;
    background-color: ${(props) => (props.isEqual ? '#00c851' : '#ff4444')};
`;

const SignUpDialogButtonContainer = styled.div`
    width: 60%;
    margin-top: 10px;
`;

const SignUpDialogSubmitButton = styled.button`
    width: 100%;
    height: 40px;
    font-size: 16px;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 34px;
        font-size: 12px;
    }
`;

function SignUpDialogComponent({
    username,
    password,
    passwordConfirm,
    usernameValid,
    passwordValid,
    passwordEqual,
    passwordConfirmValid,
    dialogOpen,
    closeDialog,
    onChangeUsername,
    onChangePassword,
    onClickSignUpButton,
    onChangePasswordConfrim,
}) {
    return (
        <SignUpDialogWrapper className="dialog-wrapper" dialogOpen={dialogOpen}>
            <SignUpDialogContainer
                className="dialog-container"
                dialogOpen={dialogOpen}
            >
                <CloseButtonContainer>
                    <CloseButton className="header-button">
                        <CloseIcon onClick={closeDialog} />
                    </CloseButton>
                </CloseButtonContainer>
                <SignUpDialogFormContainer>
                    <SignUpDialogLabel
                        htmlFor="username"
                        className="dialog-label"
                    >
                        USERNAME
                    </SignUpDialogLabel>
                    <SignUpDialogInput
                        className="dialog-input"
                        name="username"
                        autoComplete="off"
                        value={username}
                        type="text"
                        onChange={onChangeUsername}
                    />
                    <ValidStatus isValid={usernameValid} isEqual={true} />
                    <SignUpDialogLabel
                        htmlFor="password"
                        className="dialog-label"
                    >
                        PASSWORD
                    </SignUpDialogLabel>
                    <SignUpDialogInput
                        className="dialog-input"
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                    />
                    <ValidStatus
                        isValid={passwordValid}
                        isEqual={passwordEqual}
                    />
                    <SignUpDialogLabel
                        htmlFor="passwordConfirm"
                        className="dialog-label"
                    >
                        PASSWORD CONFIRM
                    </SignUpDialogLabel>
                    <SignUpDialogInput
                        className="dialog-input"
                        name="passwordConfirm"
                        type="password"
                        value={passwordConfirm}
                        onChange={onChangePasswordConfrim}
                    />
                    <ValidStatus
                        isValid={passwordConfirmValid}
                        isEqual={passwordEqual}
                    />
                    <SignUpDialogButtonContainer>
                        <SignUpDialogSubmitButton
                            className="dialog-button"
                            onClick={onClickSignUpButton}
                            disabled={
                                !usernameValid ||
                                !passwordValid ||
                                !passwordConfirmValid
                            }
                        >
                            SIGN UP
                        </SignUpDialogSubmitButton>
                    </SignUpDialogButtonContainer>
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
    onChangePasswordConfrim: PropTypes.func.isRequired,
    dialogOpen: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
    usernameValid: PropTypes.bool.isRequired,
    passwordValid: PropTypes.bool.isRequired,
    passwordEqual: PropTypes.bool.isRequired,
    passwordConfirmValid: PropTypes.bool.isRequired,
};

export default SignUpDialogComponent;
