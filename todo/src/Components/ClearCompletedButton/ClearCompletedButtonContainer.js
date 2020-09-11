import React from "react";
import { connect } from "react-redux";
import { fetchClearCompletedTodoItem } from "actions/todoAction";
import ClearCompletedButtonComponent from "Components/ClearCompletedButton/ClearCompletedButtonComponent";

function mapStateToProps(state) {
    return {
        isLoggedIn: state.authReducer.isLoggedIn,
    };
}

function ClearCompletedButtonContainer({ isLoggedIn, dispatch }) {
    function onClickClearCompletedButton() {
        dispatch(fetchClearCompletedTodoItem());
    }

    return (
        <ClearCompletedButtonComponent
            isLoggedIn={isLoggedIn}
            onClickClearCompletedButton={onClickClearCompletedButton}
        />
    );
}

export default connect(mapStateToProps)(ClearCompletedButtonContainer);
