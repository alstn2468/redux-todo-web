import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { ReactComponent as CloseIcon } from 'assets/Icons/close.svg';
import { ReactComponent as BaseInfoIcon } from 'assets/Icons/information.svg';

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

const TopHeaderContainer = styled.div`
    display: flex;
    flex: 1;
`;

const InfoIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    margin-left: 15px;
    margin-top: 15px;
    width: auto;
    height: 20px;
    color: #000000;
    cursor: pointer;

    &:hover {
        color: #ff8800;

        svg {
            fill: #ff8800;
        }
    }

    @media (min-width: 320px) and (max-width: 480px) {
        margin-left: 10px;
        margin-top: 10px;
        height: 16px;
    }
`;

const InfoIcon = styled(BaseInfoIcon)`
    display: flex;
    transition: fill 0.5s ease;
    width: 20px;
    height: 20px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 16px;
        height: 16px;
    }
`;

const InfoText = styled.div`
    font-size: 16px;
    transition: all 0.5s ease;
    margin-left: -4px;
    margin-bottom: -2px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
        margin-left: -2px;
        margin-bottom: 0;
    }
`;

const TooltipTitle = styled.div`
    font-size: 18px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 14px;
    }
`;

const TooltipText = styled.div`
    font-size: 14px;
    margin: 3px 0;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
    }
`;

const LineDivisor = styled.div`
    width: 100%;
    height: 1px;
    background: #ffffff;
    margin: 8px 0;

    @media (min-width: 320px) and (max-width: 480px) {
        margin: 6px 0;
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
    margin-right: 15px;
    margin-bottom: 15px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 11px;
        margin-right: 10px;
        margin-bottom: 20px;
        height: 11px;
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
    font-size: 14px;

    &:focus {
        outline: none;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 10px;
        height: 20px;
    }
`;

const ValidStatus = styled.span`
    transition: all 0.5s ease;
    margin-top: -10px;
    margin-bottom: 10px;
    width: ${(props) => (props.isEmpty ? '0%' : '60%')};
    height: 2px;
    background-color: ${(props) => (props.isValid ? '#00c851' : '#ff4444')};
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
                <TopHeaderContainer>
                    <InfoIconContainer data-tip data-for="signUpToolTip">
                        <InfoIcon />
                        <InfoText>HELP</InfoText>
                    </InfoIconContainer>
                    <ReactTooltip
                        id="signUpToolTip"
                        className="signup-tooltip"
                        backgroundColor="#ff8800"
                        place="right"
                        effect="solid"
                    >
                        <TooltipTitle>Username Condition</TooltipTitle>
                        <TooltipText>
                            <span role="img" aria-label="warning-icon">
                                ❌
                            </span>{' '}
                            Less than 4 characters
                        </TooltipText>
                        <TooltipText>
                            <span role="img" aria-label="warning-icon">
                                ❌
                            </span>{' '}
                            Except alphabets and numbers
                        </TooltipText>
                        <TooltipText>
                            <span role="img" aria-label="warning-icon">
                                ❌
                            </span>{' '}
                            Special characters except @/./+/-/_
                        </TooltipText>
                        <LineDivisor />
                        <TooltipTitle>Password Condition</TooltipTitle>
                        <TooltipText>
                            <span role="img" aria-label="warning-icon">
                                ❌
                            </span>{' '}
                            Common passwords
                        </TooltipText>
                        <TooltipText>
                            <span role="img" aria-label="warning-icon">
                                ❌
                            </span>{' '}
                            Similar to username
                        </TooltipText>
                        <TooltipText>
                            <span role="img" aria-label="warning-icon">
                                ❌
                            </span>{' '}
                            Less than 8 characters
                        </TooltipText>
                        <TooltipText>
                            <span role="img" aria-label="warning-icon">
                                ❌
                            </span>{' '}
                            Consist only of numbers
                        </TooltipText>
                    </ReactTooltip>
                    <CloseButtonContainer>
                        <CloseButton className="header-button">
                            <CloseIcon onClick={closeDialog} />
                        </CloseButton>
                    </CloseButtonContainer>
                </TopHeaderContainer>
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
                        maxLength={25}
                    />
                    <ValidStatus
                        isValid={usernameValid}
                        isEmpty={username.length === 0}
                    />
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
                        maxLength={30}
                    />
                    <ValidStatus
                        isValid={passwordValid}
                        isEmpty={password.length === 0}
                    />
                    <SignUpDialogLabel
                        htmlFor="passwordConfirm"
                        className="dialog-label"
                    >
                        PASSWORD CONFIRM
                    </SignUpDialogLabel>
                    <SignUpDialogInput
                        ref={passwordConfirmInputRef}
                        className="dialog-input"
                        name="passwordConfirm"
                        type="password"
                        value={passwordConfirm}
                        onChange={onChangePasswordConfirm}
                        onKeyPress={onKeyPressEnter}
                        maxLength={30}
                    />
                    <ValidStatus
                        isValid={passwordConfirmValid}
                        isEmpty={passwordConfirm.length === 0}
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
