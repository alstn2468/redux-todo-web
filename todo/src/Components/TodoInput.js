import React, { useState } from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import actionCreators from "redux/action";

function TodoInput({ dispatch }) {
    const [text, setText] = useState("");

    function handleOnClick(event) {
        dispatch(
            actionCreators.createTodoItem({
                item: { id: uuid(), text, isCompleted: false }
            })
        );
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <button onClick={event => handleOnClick(event)}>CREATE</button>
        </div>
    );
}

export default connect()(TodoInput);
