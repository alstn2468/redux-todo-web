import React from 'react';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';
import ClearCompletedButtonComponent from './ClearCompletedButtonComponent';

function ClearCompletedButtonContainer({ dispatch }) {
    function onClickClearCompletedButton() {
        dispatch(actionCreators.fetchClearCompletedTodoItem());
    }

    return (
        <ClearCompletedButtonComponent
            onClickClearCompletedButton={onClickClearCompletedButton}
        />
    );
}

export default connect()(ClearCompletedButtonContainer);
