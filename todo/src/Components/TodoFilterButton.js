import React from "react";
import { connect } from "react-redux";
import actionCreators from "redux/action";
import styled from "styled-components";
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
        margin-left: 10px;

        :hover {
            font-size: 16px;
        }
    }
`;

function TodoFilterButton({ dispatch }) {
    return (
        <FilterButtonContainer>
            <Button
                className="header-button"
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
                className="header-button"
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
                className="header-button"
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

export default connect()(TodoFilterButton);
