import React from "react";
import PropTypes from "prop-types";
import BaseLoadingOverlay from "react-loading-overlay";

function LoadingOverlayComponent({ active }) {
    return (
        <BaseLoadingOverlay
            active={active}
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
    active: PropTypes.bool.isRequired,
};

export default LoadingOverlayComponent;
