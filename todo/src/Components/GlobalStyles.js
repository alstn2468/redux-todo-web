import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
      align-items: center;
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      display: flex;
      flex:1;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      height: 100vh;
      margin: 0;
      padding: 0;
      font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      transition: all 0.25s linear;
    }

    button {
      background-color: ${({ theme }) => theme.buttonBody};
      color: ${({ theme }) => theme.buttonText};
      border: 1px solid ${({ theme }) => theme.buttonBorder};
    }

    input {
      background-color: ${({ theme }) => theme.inputBody};
      color: ${({ theme }) => theme.inputText};
      border: 2px solid ${({ theme }) => theme.inputBorder};
      text-align: center;
    }

    #root {
      display: flex;
      flex:1;
      width: 100%;
    }
`;

export default globalStyles;
