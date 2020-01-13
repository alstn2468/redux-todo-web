import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import actionCreators from "redux/action";
import { todoDisplayFilter } from "redux/action";

const FilterButtonContainer = styled.div`
    display: flex;
    flex-direction: flex-start;
`;

const Button = styled.button`
    font-size: 18px;

    :last-child {
        :after {
            border: none;
        }
    }

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
        font-weight: 500;

        :hover {
            font-size: 12px;
        }
    }
`;

function mapStateToProps(state) {
    return { filter: state.todoDisplayFilterReducer };
}

function TodoFilterButton({ filter, dispatch }) {
    return (
        <FilterButtonContainer>
            <Button
                className={`header-button ${
                    filter === todoDisplayFilter.DISPLAY_ALL_TODO
                        ? "selected"
                        : "unselected"
                }`}
                disabled={filter === todoDisplayFilter.DISPLAY_ALL_TODO}
                filter={filter === todoDisplayFilter.DISPLAY_ALL_TODO}
                onClick={() =>
                    dispatch(
                        actionCreators.setDisplayFilter(
                            todoDisplayFilter.DISPLAY_ALL_TODO
                        )
                    )
                }
            >
                ALL
            </Button>
            <Button
                className={`header-button ${
                    filter === todoDisplayFilter.DISPLAY_COMPLETD_TODO
                        ? "selected"
                        : "unselected"
                }`}
                disabled={filter === todoDisplayFilter.DISPLAY_COMPLETD_TODO}
                onClick={() =>
                    dispatch(
                        actionCreators.setDisplayFilter(
                            todoDisplayFilter.DISPLAY_COMPLETD_TODO
                        )
                    )
                }
            >
                COMPLETE
            </Button>
            <Button
                className={`header-button ${
                    filter === todoDisplayFilter.DISPLAY_UNCOMPLETD_TODO
                        ? "selected"
                        : "unselected"
                }`}
                disabled={filter === todoDisplayFilter.DISPLAY_UNCOMPLETD_TODO}
                onClick={() =>
                    dispatch(
                        actionCreators.setDisplayFilter(
                            todoDisplayFilter.DISPLAY_UNCOMPLETD_TODO
                        )
                    )
                }
            >
                UNCOMPLETE
            </Button>
        </FilterButtonContainer>
    );
}

TodoFilterButton.propTypes = {
    filter: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(TodoFilterButton);
