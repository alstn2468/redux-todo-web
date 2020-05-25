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
            fadeSpeed={500}
            styles={{
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
