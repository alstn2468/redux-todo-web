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
        font-size: 14px;
    }
    body {
        color: ${props =>
            props.theme ? "#121212" : "rgba(255, 255, 255,0.87)"};
        background-color: ${props =>
            props.theme ? "rgba(255, 255, 255,0.87)" : "#121212"};

        transition-property: background-color color;
        transition-duration: 400ms;
        transition-timing-function: ease;
    }
    input {
        color: ${props =>
            props.theme ? "#121212" : "rgba(255, 255, 255,0.87)"};
        background-color: ${props =>
            props.theme ? "rgba(255, 255, 255,0.87)" : "#121212"};
        border: border: 1px solid ${props =>
            props.theme ? "#121212" : "rgba(255, 255, 255,0.87)"};
        border-radius: 10px;
        padding: 10px 20px;
        margin: 5px;
    }
    button {
        color: ${props =>
            props.theme ? "#FF0266" : "rgba(255, 255, 255,0.87)"};
        background-color: ${props =>
            props.theme ? "rgba(255, 255, 255,0.87)" : "#FF0266"};
        border: 1px solid ${props => (props.theme ? "#FF0266" : "#121212")};;
        border-radius: 10px;
        padding: 10px 25px;
        margin: 5px;
    }
`;

export default globalStyles;
