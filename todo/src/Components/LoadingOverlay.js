import React from 'react';
import BaseLoadingOverlay from 'react-loading-overlay';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledLoadingOverlay = styled(BaseLoadingOverlay)`
    position: fixed;
    top: 0;
    left: 0;
`;

function mapStateToProps(state) {
    return state.todoReducer;
}

function LoadingOverlay({ isFetching }) {
    return (
        <StyledLoadingOverlay
            active={isFetching}
            spinner
            styles={{
                wrapper: {
                    width: '100%',
                    height: '100%',
                    overflow: 'scroll',
                    display: isFetching ? 'unset' : 'none',
                },
                spinner: (base) => ({
                    ...base,
                    width: 80,
                }),
                content: (base) => ({
                    ...base,
                    fontSize: 33,
                }),
            }}
            text="Loading..."
        />
    );
}

export default connect(mapStateToProps)(LoadingOverlay);
