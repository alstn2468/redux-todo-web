import React from "react";
import { connect } from "react-redux";
import { setDisplayFilter, todoDisplayFilter } from "actions/filterAction";
import TodoFilterButtonComponent from "Components/TodoFilterButton/TodoFilterButtonComponent";

function mapStateToProps(state) {
    return {
        filter: state.todoDisplayFilterReducer,
        isLoggedIn: state.authReducer.isLoggedIn,
    };
}

function TodoFilterButtonContainer({ isLoggedIn, filter, dispatch }) {
    function onClickDisplayAllButton() {
        dispatch(setDisplayFilter(todoDisplayFilter.DISPLAY_ALL_TODO));
    }

    function onClickDisplayCompletedButton() {
        dispatch(setDisplayFilter(todoDisplayFilter.DISPLAY_COMPLETD_TODO));
    }

    function onClickDisplayUncompletedButton() {
        dispatch(setDisplayFilter(todoDisplayFilter.DISPLAY_UNCOMPLETD_TODO));
    }
    return (
        <TodoFilterButtonComponent
            filter={filter}
            isLoggedIn={isLoggedIn}
            onClickDisplayAllButton={onClickDisplayAllButton}
            onClickDisplayCompletedButton={onClickDisplayCompletedButton}
            onClickDisplayUncompletedButton={onClickDisplayUncompletedButton}
        />
    );
}

export default connect(mapStateToProps)(TodoFilterButtonContainer);
