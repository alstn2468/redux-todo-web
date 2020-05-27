import React, { useState } from 'react';
import TodoInputComponent from './TodoInputComponent';
import { WARNING } from 'Constants/SnackBarVariant';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';

function TodoInputContainer({ dispatch }) {
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
            onPressEnterKey={onPressEnterKey}
            onChangeText={onChangeText}
        />
    );
}

export default connect()(TodoInputContainer);
