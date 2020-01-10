import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoButton from "Components/TodoButton";
import actionCreators from "redux/action";

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
        <div>
            {item.isCompleted.toString()} / {item.id} /{" "}
            {flag ? (
                <input
                    onChange={event => setText(event.target.value)}
                    value={text}
                />
            ) : (
                item.text
            )}
            {/* <CompleteChangeButton dispatch={dispatch} item={item} flag={flag} /> */}
            {/* <DeleteButton
                onClickDeleteButton={onClickDeleteButton}
                flag={flag}
            /> */}
            <TodoButton
                onClick={onClickCompletedStatusButton}
                buttonName={item.isCompleted ? "COMPLETE" : "UNCOMPLETE"}
                flag={flag}
            />
            <TodoButton
                onClick={onClickDeleteButton}
                buttonName="DELETE"
                flag={flag}
            />
            <TodoButton
                onClick={onClickUpdateButton}
                buttonName="UPDATE"
                flag={false}
            />
        </div>
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
