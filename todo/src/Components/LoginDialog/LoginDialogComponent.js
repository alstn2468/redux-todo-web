import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from 'assets/Icons/close.svg';

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
        prop.dialogOpen ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'};
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

const LoginDialogFormContainer = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    align-items: center;
    margin-top: -10px;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-top: -5px;
    }
`;

const LoginDialogLabel = styled.label`
    font-size: 16px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
    }
`;

const LoginDialogInput = styled.input`
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
    background-color: #00c851;
`;

const LoginDialogButtonContainer = styled.div`
    width: 60%;
    margin-top: 10px;
`;

const LoginDialogSubmitButton = styled.button`
    width: 100%;
    height: 40px;
    font-size: 16px;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 34px;
        font-size: 12px;
    }
`;

function LoginDialogComponent({
    username,
    password,
    onClickLoginButton,
    onChangeUsername,
    onChangePassword,
    dialogOpen,
    closeDialog,
    usernameValid,
    passwordValid,
}) {
    return (
        <LoginDialogWrapper
            className="login-dialog-wrapper"
            dialogOpen={dialogOpen}
        >
            <LoginDialogContainer
                className="login-dialog-container"
                dialogOpen={dialogOpen}
            >
                <CloseButtonContainer>
                    <CloseButton className="header-button">
                        <CloseIcon onClick={closeDialog} />
                    </CloseButton>
                </CloseButtonContainer>
                <LoginDialogFormContainer>
                    <LoginDialogLabel
                        htmlFor="username"
                        className="login-dialog-label"
                    >
                        USERNAME
                    </LoginDialogLabel>
                    <LoginDialogInput
                        className="login-dialog-input"
                        name="username"
                        autoComplete="off"
                        value={username}
                        type="text"
                        onChange={onChangeUsername}
                    />
                    <ValidStatus isValid={usernameValid} />
                    <LoginDialogLabel
                        htmlFor="password"
                        className="login-dialog-label"
                    >
                        PASSWORD
                    </LoginDialogLabel>
                    <LoginDialogInput
                        className="login-dialog-input"
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                    />
                    <ValidStatus isValid={passwordValid} />
                    <LoginDialogButtonContainer>
                        <LoginDialogSubmitButton
                            className="dialog-button"
                            onClick={onClickLoginButton}
                            disabled={!usernameValid || !passwordValid}
                        >
                            LOGIN
                        </LoginDialogSubmitButton>
                    </LoginDialogButtonContainer>
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
    dialogOpen: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
    usernameValid: PropTypes.bool.isRequired,
    passwordValid: PropTypes.bool.isRequired,
};

export default LoginDialogComponent;
