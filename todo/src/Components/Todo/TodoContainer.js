import React, { useState } from 'react';
import { connect } from 'react-redux';
import { WARNING } from 'Constants/SnackBarVariant';
import actionCreators from 'redux/action';
import TodoComponent from './TodoComponent';

function mapStateToProps(state) {
    return {
        isLoggedIn: state.authReducer.isLoggedIn,
    };
}

function TodoContainer({ isLoggedIn, item, dispatch }) {
    const [text, setText] = useState(item.text);
    const [flag, setFlag] = useState(false);

    function onClickUpdateButton() {
        if (flag) {
            if (text !== '') {
                dispatch(
                    actionCreators.fetchUpdateTodoItem({
                        ...item,
                        text,
                    })
                );
            } else {
                return dispatch(
                    actionCreators.setSnackBarState({
                        snackBarOpen: true,
                        snackBarVariant: WARNING,
                        snackBarContent: 'Please write any text.',
                    })
                );
            }
        }
        setFlag(!flag);
    }

    function onClickDeleteButton() {
        dispatch(actionCreators.fetchDeleteTodoItem(item));
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
                    actionCreators.fetchUpdateTodoItem({
                        ...item,
                        text,
                    })
                );
                setFlag(!flag);
            }
        }
    }

    function onClickCompletedStatusButton() {
        dispatch(
            actionCreators.fetchUpdateTodoItem({
                ...item,
                isCompleted: !item.isCompleted,
            })
        );
    }

    return (
        <TodoComponent
            text={text}
            flag={flag}
            item={item}
            isLoggedIn={isLoggedIn}
            setText={setText}
            onClickUpdateButton={onClickUpdateButton}
            onClickDeleteButton={onClickDeleteButton}
            onPressEnterKey={onPressEnterKey}
            onClickCompletedStatusButton={onClickCompletedStatusButton}
        />
    );
}

export default connect(mapStateToProps)(TodoContainer);
