import React from "react";
import BaseSnackBar from "@material-ui/core/Snackbar";
import Alert from "./Alert";
import { makeStyles } from "@material-ui/core/styles";
import { initialSnackBarState } from "../redux/reducer";
import { connect } from "react-redux";
import actionCreators from "../redux/action";

const mapStateToProps = (state) => {
    return state.snackBarReducer;
};

const useStyles = makeStyles((theme) => ({
    snackBar: {
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
}));

function Snackbar(props) {
    const {
        snackBarOpen,
        snackBarVariant,
        snackBarContent,
        autoHideDuration = 5000,
        dispatch,
    } = props;
    const classes = useStyles();

    function onCloseSnackBar() {
        dispatch(
            actionCreators.setSnackBarState({
                ...initialSnackBarState,
                snackBarOpen: false,
            })
        );
    }

    return (
        <BaseSnackBar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={snackBarOpen}
            autoHideDuration={autoHideDuration}
            onClose={() => onCloseSnackBar()}
            className={classes.snackBar}
        >
            <Alert onClose={() => onCloseSnackBar()} severity={snackBarVariant}>
                {snackBarContent}
            </Alert>
        </BaseSnackBar>
    );
}

export default connect(mapStateToProps)(Snackbar);
