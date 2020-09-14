import React from "react";
import { useSelector } from "react-redux";
import BaseLoadingOverlay from "react-loading-overlay";

function LoadingOverlay() {
    const { isFetching } = useSelector((state) => state.todoReducer);

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

export default LoadingOverlay;
