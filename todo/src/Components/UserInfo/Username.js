import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as BaseUserIcon } from "assets/Icons/user.svg";

const Name = styled.div`
    display: flex;
    justify-content: flex-start;
    flex: 1;
    font-size: 20px;
    padding-left: 5px;
    align-items: baseline;
    user-select: none;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 10px;
    }
`;

const UserIcon = styled(BaseUserIcon)`
    width: 15px;
    height: 15px;
    margin-right: 3px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 10px;
        height: 10px;
    }
`;

function Username({ isLoggedIn, user }) {
    return (
        <Name>
            {isLoggedIn && <UserIcon className="user-info-icon" />}
            {user}
        </Name>
    );
}

Username.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.string.isRequired,
};

export default Username;
