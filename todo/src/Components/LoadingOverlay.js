import React from 'react';
import BaseLoadingOverlay from 'react-loading-overlay';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return state.todoReducer;
}

function LoadingOverlay({ isFetching }) {
    return (
        <BaseLoadingOverlay
            active={isFetching}
            spinner
            styles={{
                wrapper: (base) => ({
                    ...base,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    overflow: 'scroll',
                    display: isFetching ? 'unset' : 'none',
                    zIndex: 1000,
                }),
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
