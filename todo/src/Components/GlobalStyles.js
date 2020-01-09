import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: ${props =>
            props.theme ? "rgba(20, 20, 20, 1)" : "rgb(255, 255, 255, 1)"};
        background-color: ${props =>
            props.theme ? "rgb(255, 255, 255, 1)" : "rgba(20, 20, 20, 1)"};
    }
`;

export default globalStyles;
