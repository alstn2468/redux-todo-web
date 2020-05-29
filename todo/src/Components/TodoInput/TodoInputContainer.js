import React, { useState } from 'react';
import TodoInputComponent from './TodoInputComponent';
import { WARNING } from 'Constants/SnackBarVariant';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';

function mapStateToProps(state) {
    return {
        isLoggedIn: state.authReducer.isLoggedIn,
    };
}

function TodoInputContainer({ isLoggedIn, dispatch }) {
    const [text, setText] = useState('');

    function onChangeText(event) {
        setText(event.target.value);
    }

    function onPressEnterKey(event) {
        if (event.key === 'Enter') {
            if (text === '') {
                dispatch(
                    actionCreators.setSnackBarState({
                        snackBarOpen: true,
                        snackBarVariant: WARNING,
                        snackBarContent: 'Please write any text.',
                    })
                );
            } else {
                dispatch(
                    actionCreators.fetchCreateTodoItem({
                        text,
                    })
                );
                setText('');
            }
        }
    }

    return (
        <TodoInputComponent
            text={text}
            isLoggedIn={isLoggedIn}
            onPressEnterKey={onPressEnterKey}
            onChangeText={onChangeText}
        />
    );
}

export default connect(mapStateToProps)(TodoInputContainer);
