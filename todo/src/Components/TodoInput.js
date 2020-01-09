import React, { useState } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actionCreators from "redux/action";

function TodoInput({ dispatch }) {
    const [text, setText] = useState("");

    function onClickCreateButton() {
        if (text === "") {
            alert("메세지를 입력하세요");
        } else {
            dispatch(
                actionCreators.createTodoItem({
                    id: uuid(),
                    text,
                    isCompleted: false
                })
            );
        }
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <button onClick={() => onClickCreateButton()}>CREATE</button>
        </div>
    );
}

TodoInput.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(TodoInput);
