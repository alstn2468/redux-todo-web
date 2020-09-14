import React from "react";
import LoadingOverlayComponent from "Components/LoadingOverlay/LoadingOverlayComponent";
import { useSelector } from "react-redux";

function LoadingOverlayContainer() {
    const { isFetching } = useSelector((state) => state.todoReducer);

    return <LoadingOverlayComponent active={isFetching} />;
}

export default LoadingOverlayContainer;
