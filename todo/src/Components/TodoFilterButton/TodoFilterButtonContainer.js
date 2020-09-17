import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayFilter, todoDisplayFilter } from "actions/filterAction";
import TodoFilterButtonComponent from "Components/TodoFilterButton/TodoFilterButtonComponent";

function TodoFilterButtonContainer() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.authReducer);
    const filter = useSelector((state) => state.todoDisplayFilterReducer);

    function onClickDisplayAllButton() {
        dispatch(setDisplayFilter(todoDisplayFilter.DISPLAY_ALL_TODO));
    }

    function onClickDisplayCompletedButton() {
        dispatch(setDisplayFilter(todoDisplayFilter.DISPLAY_COMPLETD_TODO));
    }

    function onClickDisplayUncompletedButton() {
        dispatch(setDisplayFilter(todoDisplayFilter.DISPLAY_UNCOMPLETD_TODO));
    }
    return (
        <TodoFilterButtonComponent
            filter={filter}
            isLoggedIn={isLoggedIn}
            onClickDisplayAllButton={onClickDisplayAllButton}
            onClickDisplayCompletedButton={onClickDisplayCompletedButton}
            onClickDisplayUncompletedButton={onClickDisplayUncompletedButton}
        />
    );
}

export default TodoFilterButtonContainer;
