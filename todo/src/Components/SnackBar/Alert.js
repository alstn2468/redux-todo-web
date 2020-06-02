import React from 'react';
import PropTypes from 'prop-types';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    const { onClose, severity, children } = props;

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
    children: PropTypes.object.isRequired,
};

export default Alert;
