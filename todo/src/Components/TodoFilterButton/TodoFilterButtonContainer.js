import React from 'react';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';
import { todoDisplayFilter } from 'redux/action';
import TodoFilterButtonComponent from './TodoFilterButtonComponent';

function mapStateToProps(state) {
    return { filter: state.todoDisplayFilterReducer };
}

function TodoFilterButtonContainer({ filter, dispatch }) {
    function onClickDisplayAllButton() {
        dispatch(
            actionCreators.setDisplayFilter(todoDisplayFilter.DISPLAY_ALL_TODO)
        );
    }

    function onClickDisplayCompletedButton() {
        dispatch(
            actionCreators.setDisplayFilter(
                todoDisplayFilter.DISPLAY_COMPLETD_TODO
            )
        );
    }

    function onClickDisplayUncompletedButton() {
        dispatch(
            actionCreators.setDisplayFilter(
                todoDisplayFilter.DISPLAY_UNCOMPLETD_TODO
            )
        );
    }
    return (
        <TodoFilterButtonComponent
            filter={filter}
            onClickDisplayAllButton={onClickDisplayAllButton}
            onClickDisplayCompletedButton={onClickDisplayCompletedButton}
            onClickDisplayUncompletedButton={onClickDisplayUncompletedButton}
        />
    );
}

export default connect(mapStateToProps)(TodoFilterButtonContainer);
