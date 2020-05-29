import React from 'react';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';
import ClearCompletedButtonComponent from './ClearCompletedButtonComponent';

function mapStateToProps(state) {
    return {
        isLoggedIn: state.authReducer.isLoggedIn,
    };
}

function ClearCompletedButtonContainer({ isLoggedIn, dispatch }) {
    function onClickClearCompletedButton() {
        dispatch(actionCreators.fetchClearCompletedTodoItem());
    }

    return (
        <ClearCompletedButtonComponent
            isLoggedIn={isLoggedIn}
            onClickClearCompletedButton={onClickClearCompletedButton}
        />
    );
}

export default connect(mapStateToProps)(ClearCompletedButtonContainer);
