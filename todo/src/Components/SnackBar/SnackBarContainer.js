import React from 'react';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';
import { initialSnackBarState } from 'redux/reducer';
import SnackbarComponent from './SnackBarComponent';

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
            actionCreators.setSnackBarState({
                ...initialSnackBarState,
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
