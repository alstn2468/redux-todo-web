import React from "react";
import { connect } from "react-redux";
import { setSnackBarState } from "actions/snackBarAction";
import SnackbarComponent from "Components/SnackBar/SnackBarComponent";

const mapStateToProps = (state) => {
    return state.snackBarReducer;
};

function SnackbarContainer(props) {
    const {
        snackBarOpen,
        snackBarContent,
        snackBarVariant,
        autoHideDuration,
        dispatch,
    } = props;

    function onCloseSnackBar() {
        dispatch(
            setSnackBarState({
                snackBarOpen: false,
            })
        );
    }

    return (
        <SnackbarComponent
            onCloseSnackBar={onCloseSnackBar}
            snackBarOpen={snackBarOpen}
            snackBarVariant={snackBarVariant}
            snackBarContent={snackBarContent}
            autoHideDuration={autoHideDuration}
        />
    );
}

export default connect(mapStateToProps)(SnackbarContainer);
