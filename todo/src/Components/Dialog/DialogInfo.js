import React from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { ReactComponent as BaseInfoIcon } from "assets/Icons/information.svg";

const InfoIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    position: absolute;
    top: 10px;
    left: 15px;
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

function DialogInfo() {
    return (
        <>
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
                    </span>{" "}
                    Less than 4 characters
                </TooltipText>
                <TooltipText>
                    <span role="img" aria-label="warning-icon">
                        ❌
                    </span>{" "}
                    Except alphabets and numbers
                </TooltipText>
                <TooltipText>
                    <span role="img" aria-label="warning-icon">
                        ❌
                    </span>{" "}
                    Special characters except @/./+/-/_
                </TooltipText>
                <LineDivisor />
                <TooltipTitle>Password Condition</TooltipTitle>
                <TooltipText>
                    <span role="img" aria-label="warning-icon">
                        ❌
                    </span>{" "}
                    Common passwords
                </TooltipText>
                <TooltipText>
                    <span role="img" aria-label="warning-icon">
                        ❌
                    </span>{" "}
                    Similar to username
                </TooltipText>
                <TooltipText>
                    <span role="img" aria-label="warning-icon">
                        ❌
                    </span>{" "}
                    Less than 8 characters
                </TooltipText>
                <TooltipText>
                    <span role="img" aria-label="warning-icon">
                        ❌
                    </span>{" "}
                    Consist only of numbers
                </TooltipText>
            </ReactTooltip>
        </>
    );
}

export default DialogInfo;
