import React, { useEffect } from "react";
import PropTypes from "prop-types";
import actionCreators from "redux/action";
import { connect } from "react-redux";

function Todo({ item, dispatch }) {
    function onClickCompletedStatusButton() {
        dispatch(actionCreators.changeTodoItemCompleted(item));
    }

    useEffect(() => {
        console.log(`${item.id} 화면에 출력`);

        return () => {
            console.log(`${item.id} 화면에서 삭제`);
        };
    }, [item]);

    console.log(item);
    console.log(typeof item);

    return (
        <div>
            {item.isCompleted.toString()} / {item.id} / {item.text}
            <button onClick={() => onClickCompletedStatusButton()}>
                {item.isCompleted ? "COMPLETED" : "UNCOMPLETED"}
            </button>
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
