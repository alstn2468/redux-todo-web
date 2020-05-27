import React from 'react';
import PropTypes from 'prop-types';
import BaseLoadingOverlay from 'react-loading-overlay';

function LoadingOverlayComponent({ isFetching }) {
    return (
        <BaseLoadingOverlay
            active={isFetching}
            spinner
            fadeSpeed={500}
            styles={{
                spinner: (base) => ({
                    ...base,
                    width: 80,
                }),
                content: (base) => ({
                    ...base,
                    fontSize: 33,
                }),
            }}
            text="Loading..."
        />
    );
}

LoadingOverlayComponent.propTypes = {
    isFetching: PropTypes.bool.isRequired,
};

export default LoadingOverlayComponent;
