import React from 'react';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';
import { initialSnackBarState } from 'redux/reducer';
import SnackbarComponent from './SnackBarComponent';

const mapStateToProps = (state) => {
    return state.snackBarReducer;
};

function SnackbarContainer(props) {
    const { snackBarOpen, snackBarVariant, autoHideDuration, dispatch } = props;
    let { snackBarContent } = props;

    function onCloseSnackBar() {
        dispatch(
            actionCreators.setSnackBarState({
                ...initialSnackBarState,
                snackBarOpen: false,
            })
        );
    }

    if (Array.isArray(snackBarContent)) {
        snackBarContent = snackBarContent.join('\n');
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
