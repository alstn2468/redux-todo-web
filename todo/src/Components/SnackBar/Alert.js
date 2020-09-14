import React from "react";
import PropTypes from "prop-types";
import MuiAlert from "@material-ui/lab/Alert";

function Alert({ onClose, severity, children }) {
    return (
        <MuiAlert
            elevation={6}
            variant="filled"
            onClose={onClose}
            severity={severity}
        >
            {children}
        </MuiAlert>
    );
}

Alert.propTypes = {
    severity: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
        .isRequired,
};

export default Alert;
