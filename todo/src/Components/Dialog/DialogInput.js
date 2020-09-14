import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled.label`
    font-size: 16px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
    }
`;

const Input = styled.input`
    width: 60%;
    margin-top: 5px;
    margin-bottom: 8px;
    height: 30px;
    font-size: 14px;
    padding-left: 5px;

    &:focus {
        outline: none;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        height: 20px;
        font-size: 10px;
    }
`;

const ValidStatus = styled.span`
    transition: all 0.5s ease;
    margin-top: -10px;
    margin-bottom: 10px;
    height: 2px;
    width: ${(props) => (props.isEmpty ? "0%" : "60%")};
    background-color: ${(props) => (props.isValid ? "#00c851" : "#ff4444")};
`;

function DialogInput({ label, value, onChange, name, isValid, ...rest }) {
    return (
        <React.Fragment>
            <Label htmlFor={name} className="dialog-label">
                {label}
            </Label>
            <Input
                className="dialog-input"
                name={name}
                autoComplete="off"
                value={value}
                type="text"
                onChange={onChange}
                {...rest}
            />
            <ValidStatus isValid={isValid} isEmpty={value === 0} />
        </React.Fragment>
    );
}

DialogInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default DialogInput;
