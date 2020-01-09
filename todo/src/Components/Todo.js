import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DeleteButton from "./DeleteButton";
import CompleteChangeButton from "./CompleteChangeButton";
import actionCreators from "../redux/action";

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
            <CompleteChangeButton dispatch={dispatch} item={item} flag={flag} />
            <DeleteButton dispatch={dispatch} item={item} flag={flag} />
            <button onClick={() => onClickUpdateButton()}>UPDATE</button>
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
