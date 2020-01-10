import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoButton from "Components/TodoButton";
import actionCreators from "redux/action";
import {
    changeCompleteButtonStyle,
    deleteTodoItemButtonStyle,
    updateTodoItemButtonStyle
} from "Constants/ButtonStyles";
import { ReactComponent as Success } from "Icons/success.svg";
import { ReactComponent as Cross } from "Icons/cross.svg";
import { ReactComponent as Trash } from "Icons/trash.svg";
import { ReactComponent as Pencil } from "Icons/pencil.svg";

const TodoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 90%;
    margin: 0px 0px 20px 0px;
    padding: 10px;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 40px;
        width: 90%;
        margin: 0px 0px 15px 0px;
    }
`;

const TodoData = styled.div`
    font-size: 24px;
    font-weight: 400;
    text-decoration: ${props => (props.isCompleted ? "line-through" : "none")};
    margin: 0 10px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 14px;
    }
`;

function Todo({ item, dispatch }) {
    const [text, setText] = useState(item.text);
    const [flag, setFlag] = useState(false);

    function onClickUpdateButton() {
        if (flag) {
            dispatch(
                actionCreators.updateTodoItem({
                    ...item,
                    text
                })
            );
        }
        setFlag(!flag);
    }

    function onClickDeleteButton() {
        dispatch(actionCreators.deleteTodoItem(item));
    }

    function onClickCompletedStatusButton() {
        dispatch(actionCreators.changeTodoItemCompleted(item));
    }

    return (
        <TodoContainer className="todo-item">
            <TodoButton
                onClick={onClickCompletedStatusButton}
                buttonIcon={item.isCompleted ? <Success /> : <Cross />}
                flag={flag}
                styles={changeCompleteButtonStyle}
            />
            <TodoData isCompleted={item.isCompleted}>
                {flag ? (
                    <input
                        onChange={event => setText(event.target.value)}
                        value={text}
                    />
                ) : (
                    item.text
                )}
            </TodoData>
            <TodoButton
                onClick={onClickDeleteButton}
                buttonIcon={<Trash />}
                flag={flag}
                styles={deleteTodoItemButtonStyle}
            />
            <TodoButton
                onClick={onClickUpdateButton}
                buttonIcon={<Pencil />}
                flag={false}
                styles={updateTodoItemButtonStyle}
            />
        </TodoContainer>
    );
}

Todo.propTypes = {
    item: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            isCompleted: PropTypes.bool
        })
    )
};

export default connect()(Todo);
