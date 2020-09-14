import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import TodoButton from "Components/TodoButton";
import {
    changeCompleteButtonStyle,
    deleteTodoItemButtonStyle,
    updateTodoItemButtonStyle,
} from "Constants/ButtonStyles";
import { ReactComponent as Success } from "assets/Icons/success.svg";
import { ReactComponent as Cross } from "assets/Icons/cross.svg";
import { ReactComponent as Trash } from "assets/Icons/trash.svg";
import { ReactComponent as Pencil } from "assets/Icons/pencil.svg";
import { ReactComponent as Save } from "assets/Icons/save.svg";

const TodoContainer = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    width: 90%;
    margin: 0px 0px 20px 0px;
    padding: 10px;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 40px;
        width: 90%;
        margin: 0px 0px 10px 0px;
    }
`;

const TodoData = styled.div`
    width: 80%;
    font-size: 22px;
    font-weight: 400;
    text-decoration: ${(props) =>
        props.isCompleted ? "line-through" : "none"};
    margin: 0 10px;
    user-select: none;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 15px;
    }
`;

const TodoInput = styled.input`
    width: 80%;
    border: none;
    font-size: 22px;
    font-weight: 400;
    text-align: left;
    margin: 0 10px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 15px;
    }
`;

function TodoComponent({
    isLoggedIn,
    text,
    flag,
    item,
    onChangeInput,
    todoInputRef,
    onClickUpdateButton,
    onClickDeleteButton,
    onPressEnterKey,
    onClcikStatusChangeButton,
}) {
    return (
        <TodoContainer className="todo-item">
            <TodoButton
                onClick={onClcikStatusChangeButton}
                buttonIcon={item.isCompleted ? <Success /> : <Cross />}
                flag={flag}
                styles={changeCompleteButtonStyle}
            />
            {flag ? (
                <TodoInput
                    ref={todoInputRef}
                    className="todo-input"
                    disabled={!isLoggedIn}
                    onChange={(event) => onChangeInput(event.target.value)}
                    onKeyPress={(event) => onPressEnterKey(event)}
                    value={text}
                />
            ) : (
                <TodoData isCompleted={item.isCompleted}>{item.text}</TodoData>
            )}
            <TodoButton
                disabled={!isLoggedIn}
                onClick={onClickDeleteButton}
                buttonIcon={<Trash />}
                flag={flag}
                styles={deleteTodoItemButtonStyle}
            />
            <TodoButton
                disabled={!isLoggedIn}
                onClick={onClickUpdateButton}
                buttonIcon={flag ? <Save /> : <Pencil />}
                flag={false}
                styles={updateTodoItemButtonStyle}
            />
        </TodoContainer>
    );
}

TodoComponent.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    flag: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
    }),
    onChangeInput: PropTypes.func.isRequired,
    todoInputRef: PropTypes.object.isRequired,
    onClickUpdateButton: PropTypes.func.isRequired,
    onClickDeleteButton: PropTypes.func.isRequired,
    onPressEnterKey: PropTypes.func.isRequired,
    onClcikStatusChangeButton: PropTypes.func.isRequired,
};

export default TodoComponent;
