import React from 'react';
import styled from 'styled-components';

const FilterButtonContainer = styled.div`
    display: flex;
    flex-direction: flex-start;
`;

const Button = styled.button`
    font-size: 18px;
    color: ${props =>
        props.now ? 'rgba(250, 250, 250, 1)' : 'rgba(250, 250, 250, 0.6)'};

    :after {
        content: '';
        border-right-width: 1px;
        border-right-color: #fafafa;
        border-right-style: solid;
        margin: 0 10px;
    }

    :last-child {
        :after {
            border: none;
        }
    }

    :hover {
        color: ${props =>
            props.now ? 'rgba(250, 250, 250, 0.6)' : 'rgba(250, 250, 250, 1)'};
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
            <Button now={true}>ALL</Button>
            <Button now={false}>COMPLETE</Button>
            <Button now={false}>UNCOMPLETE</Button>
        </FilterButtonContainer>
    );
}

export default TodoFilterButton;
