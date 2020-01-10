import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
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
      height: 100%;
      margin: 0;
      padding: 0;
      font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      transition: all 0.25s linear;
    }

    input {
      background-color: ${({ theme }) => theme.inputBody};
      color: ${({ theme }) => theme.inputText};
      border: 1px solid ${({ theme }) => theme.inputBorder};
      text-align: center;
    }

    #root {
      display: flex;
      flex:1;
      width: 100%;
    }

    .todo-container {
      border: 1px solid ${({ theme }) => theme.containerBorder};
    }

    .todo-item {
      border: 1px solid ${({ theme }) => theme.containerBorder};
    }

    button {
      padding: 0;
      border: 0;
      background: none;
      color: ${({ theme }) => theme.buttonText};
    }
`;

export default globalStyles;
