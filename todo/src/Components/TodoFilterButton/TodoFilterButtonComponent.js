import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { todoDisplayFilter } from 'redux/action';

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

function TodoFilterButtonComponent({
    filter,
    isLoggedIn,
    onClickDisplayAllButton,
    onClickDisplayCompletedButton,
    onClickDisplayUncompletedButton,
}) {
    return (
        <FilterButtonContainer>
            <Button
                className={`header-button ${
                    filter === todoDisplayFilter.DISPLAY_ALL_TODO && isLoggedIn
                        ? 'selected'
                        : 'unselected'
                } ${isLoggedIn ? ' able' : ''}`}
                disabled={
                    filter === todoDisplayFilter.DISPLAY_ALL_TODO || !isLoggedIn
                }
                onClick={onClickDisplayAllButton}
            >
                ALL
            </Button>
            <Button
                className={`header-button ${
                    filter === todoDisplayFilter.DISPLAY_COMPLETD_TODO &&
                    isLoggedIn
                        ? 'selected'
                        : 'unselected'
                } ${isLoggedIn ? ' able' : ''}`}
                disabled={
                    filter === todoDisplayFilter.DISPLAY_COMPLETD_TODO ||
                    !isLoggedIn
                }
                onClick={onClickDisplayCompletedButton}
            >
                COMPLETE
            </Button>
            <Button
                className={`header-button ${
                    filter === todoDisplayFilter.DISPLAY_UNCOMPLETD_TODO &&
                    isLoggedIn
                        ? 'selected'
                        : 'unselected'
                } ${isLoggedIn ? 'able' : ''}`}
                disabled={
                    filter === todoDisplayFilter.DISPLAY_UNCOMPLETD_TODO ||
                    !isLoggedIn
                }
                onClick={onClickDisplayUncompletedButton}
            >
                UNCOMPLETE
            </Button>
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
