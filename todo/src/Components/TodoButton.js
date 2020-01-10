import React from "react";
import ProptTypes from "prop-types";

function TodoButton({ onClick, buttonName, flag }) {
    return (
        <button onClick={onClick} disabled={flag}>
            {buttonName}
        </button>
    );
}

TodoButton.propTypes = {
    onClick: ProptTypes.func.isRequired,
    buttonName: ProptTypes.string.isRequired,
    flag: ProptTypes.bool.isRequired
};

export default TodoButton;
