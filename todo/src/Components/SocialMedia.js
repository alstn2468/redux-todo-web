import React from "react";
import styled from "styled-components";
import { ReactComponent as Facebook } from "assets/Icons/facebook.svg";
import { ReactComponent as Instagram } from "assets/Icons/instagram.svg";
import { ReactComponent as Github } from "assets/Icons/github.svg";
import { ReactComponent as LinkedIn } from "assets/Icons/linkedin.svg";

const SocialMediaContainer = styled.div`
    margin-bottom: -20px;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-bottom: -15px;
    }
`;

function SocialMedia() {
    return (
        <SocialMediaContainer>
            <a href="https://www.facebook.com/alstn2468">
                <Facebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com/minsu._.0102">
                <Instagram className="social-icon" />
            </a>
            <a href="https://github.com/alstn2468">
                <Github className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/minsu-kim-336289160">
                <LinkedIn className="social-icon" />
            </a>
        </SocialMediaContainer>
    );
}

export default SocialMedia;
