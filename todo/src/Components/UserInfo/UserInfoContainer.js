import React from 'react';
import UserInfoComponent from './UserInfoComponent';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        ...state.authReducer,
    };
}

function UserInfoContainer({ isLoggedIn, user }) {
    return <UserInfoComponent isLoggedIn={isLoggedIn} user={user} />;
}

export default connect(mapStateToProps)(UserInfoContainer);
