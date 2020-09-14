import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WARNING } from "Constants/SnackBarVariant";
import { fetchUpdateTodoItem, fetchDeleteTodoItem } from "actions/todoAction";
import { setSnackBarState } from "actions/snackBarAction";
import TodoComponent from "Components/Todo/TodoComponent";

function TodoContainer({ item }) {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.authReducer);
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

    function onClcikStatusChangeButton() {
        dispatch(
            fetchUpdateTodoItem({
                ...item,
                isCompleted: !item.isCompleted,
            })
        );
    }

    function onChangeInput(event) {
        setText(event.target.value);
    }

    return (
        <TodoComponent
            text={text}
            flag={flag}
            item={item}
            isLoggedIn={isLoggedIn}
            todoInputRef={todoInputRef}
            onChangeInput={onChangeInput}
            onPressEnterKey={onPressEnterKey}
            onClickUpdateButton={onClickUpdateButton}
            onClickDeleteButton={onClickDeleteButton}
            onClcikStatusChangeButton={onClcikStatusChangeButton}
        />
    );
}

export default TodoContainer;
