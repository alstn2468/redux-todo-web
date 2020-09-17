import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FilterButton from "Components/TodoFilterButton/FilterButton";
import { todoDisplayFilter } from "actions/filterAction";

const FilterButtonContainer = styled.div`
    display: flex;
    flex-direction: flex-start;
`;

function TodoFilterButtonComponent({
    filter,
    isLoggedIn,
    onClickDisplayAllButton,
    onClickDisplayCompletedButton,
    onClickDisplayUncompletedButton,
}) {
    return (
        <FilterButtonContainer>
            <FilterButton
                isSelected={filter === todoDisplayFilter.DISPLAY_ALL_TODO}
                isLoggedIn={isLoggedIn}
                onClick={onClickDisplayAllButton}
            >
                ALL
            </FilterButton>
            <FilterButton
                isSelected={filter === todoDisplayFilter.DISPLAY_COMPLETD_TODO}
                isLoggedIn={isLoggedIn}
                onClick={onClickDisplayCompletedButton}
            >
                COMPLETE
            </FilterButton>
            <FilterButton
                isSelected={
                    filter === todoDisplayFilter.DISPLAY_UNCOMPLETD_TODO
                }
                isLoggedIn={isLoggedIn}
                onClick={onClickDisplayUncompletedButton}
            >
                UNCOMPLETE
            </FilterButton>
        </FilterButtonContainer>
    );
}

TodoFilterButtonComponent.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    filter: PropTypes.string.isRequired,
    onClickDisplayAllButton: PropTypes.func.isRequired,
    onClickDisplayCompletedButton: PropTypes.func.isRequired,
    onClickDisplayUncompletedButton: PropTypes.func.isRequired,
};

export default TodoFilterButtonComponent;
