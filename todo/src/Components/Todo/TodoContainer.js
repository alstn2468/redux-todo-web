import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { WARNING } from "Constants/SnackBarVariant";
import { fetchUpdateTodoItem, fetchDeleteTodoItem } from "actions/todoAction";
import { setSnackBarState } from "actions/snackBarAction";
import TodoComponent from "Components/Todo/TodoComponent";

function mapStateToProps(state) {
    return {
        isLoggedIn: state.authReducer.isLoggedIn,
    };
}

function TodoContainer({ isLoggedIn, item, dispatch }) {
    const [text, setText] = useState(item.text);
    const [flag, setFlag] = useState(false);
    const todoInputRef = useRef(null);

    function onClickUpdateButton() {
        if (flag) {
            if (text !== "") {
                dispatch(
                    fetchUpdateTodoItem({
                        ...item,
                        text,
                    })
                );
                todoInputRef.current && todoInputRef.current.blur();
            } else {
                return dispatch(
                    setSnackBarState({
                        snackBarOpen: true,
                        snackBarVariant: WARNING,
                        snackBarContent: "Please write any text.",
                    })
                );
            }
        }
        setFlag(!flag);
    }

    function onClickDeleteButton() {
        dispatch(fetchDeleteTodoItem(item));
    }

    function onPressEnterKey(event) {
        if (event.key === "Enter") {
            if (text === "") {
                dispatch(
                    setSnackBarState({
                        snackBarOpen: true,
                        snackBarVariant: WARNING,
                        snackBarContent: "Please write any text.",
                    })
                );
            } else {
                dispatch(
                    fetchUpdateTodoItem({
                        ...item,
                        text,
                    })
                );
                todoInputRef.current && todoInputRef.current.blur();
                setFlag(!flag);
            }
        }
    }

    function onClickCompletedStatusButton() {
        dispatch(
            fetchUpdateTodoItem({
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
            todoInputRef={todoInputRef}
            setText={setText}
            onClickUpdateButton={onClickUpdateButton}
            onClickDeleteButton={onClickDeleteButton}
            onPressEnterKey={onPressEnterKey}
            onClickCompletedStatusButton={onClickCompletedStatusButton}
        />
    );
}

export default connect(mapStateToProps)(TodoContainer);
