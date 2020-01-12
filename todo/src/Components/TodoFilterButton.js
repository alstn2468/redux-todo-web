import React from 'react';
import styled from 'styled-components';

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

function TodoFilterButton() {
    return (
        <FilterButtonContainer>
            <Button className="header-button" now={true}>
                ALL
            </Button>
            <Button className="header-button" now={false}>
                COMPLETE
            </Button>
            <Button className="header-button" now={false}>
                UNCOMPLETE
            </Button>
        </FilterButtonContainer>
    );
}

export default TodoFilterButton;
