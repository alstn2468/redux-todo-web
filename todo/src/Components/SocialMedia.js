import React from "react";
import styled from "styled-components";
import { ReactComponent as FacebookIcon } from "assets/Icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/Icons/instagram.svg";
import { ReactComponent as GithubIcon } from "assets/Icons/github.svg";
import { ReactComponent as LinkedInIcon } from "assets/Icons/linkedin.svg";
import { FACEBOOK, INSTAGRAM, GITHUB, LINKEDIN } from "Constants/SocialLink";

const SocialMediaContainer = styled.div`
    margin-bottom: -20px;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-bottom: -15px;
    }
`;

function SocialMedia() {
    return (
        <SocialMediaContainer>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="social-icon" />
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="social-icon" />
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="social-icon" />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="social-icon" />
            </a>
        </SocialMediaContainer>
    );
}

export default SocialMedia;
