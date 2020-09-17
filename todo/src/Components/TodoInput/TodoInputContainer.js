import React, { useState, useRef } from "react";
import TodoInputComponent from "Components/TodoInput/TodoInputComponent";
import { WARNING } from "Constants/SnackBarVariant";
import { useSelector, useDispatch } from "react-redux";
import { setSnackBarState } from "actions/snackBarAction";
import { fetchCreateTodoItem } from "actions/todoAction";

function TodoInputContainer() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.authReducer);
    const [text, setText] = useState("");
    const todoInputRef = useRef(null);

    function onChangeText(event) {
        setText(event.target.value);
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
                    fetchCreateTodoItem({
                        text,
                    })
                );
                setText("");
                todoInputRef.current && todoInputRef.current.blur();
            }
        }
    }

    return (
        <TodoInputComponent
            text={text}
            isLoggedIn={isLoggedIn}
            onPressEnterKey={onPressEnterKey}
            onChangeText={onChangeText}
            todoInputRef={todoInputRef}
        />
    );
}

export default TodoInputContainer;
