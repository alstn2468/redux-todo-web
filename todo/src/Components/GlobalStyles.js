import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        border-radius: 0;
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

    button {
      background-color: ${({ theme }) => theme.inputBody};
      color: ${({ theme }) => theme.inputText};
    }

    #root {
      display: flex;
      flex:1;
      width: 100%;
    }

    .todo-container {
      border: 1px solid ${({ theme }) => theme.containerBorder};
    }

    .todo-counter-container {
      border: 1px solid ${({ theme }) => theme.containerBorder};
      border-bottom: none;
    }

    .todo-item {
      border: 1px solid ${({ theme }) => theme.containerBorder};
    }

    button {
      padding: 0;
      border: 0;
      background: none;
    }

    .todo-input {
      border-bottom: 1px solid ${({ theme }) =>
          theme.containerBorder} !important;
    }

    .counter-icon {
      width: 20px;
      height: auto;
      
      @media (min-width: 320px) and (max-width: 480px) {
        width: 14px;
      }
    }

    .header-button {
        color: ${({ theme }) => theme.headerButtonColor};

        :after {
            content: '';
            border-right-width: 1px;
            border-right-color: ${({ theme }) => theme.headerAfterBorderColor};
            border-right-style: solid;
            margin: 0 10px;
        }

        :hover {
            color: ${({ theme }) => theme.headerButtonHoverColor};
        }

        @media (hover: none) {
            .header-button:hover { color: inherit; }
        }
    }

    .selected {
      color: ${({ theme }) => theme.headerButtonHoverColor};
    }

    .social-icon {
      width: 30px;
      height: auto;
      fill: ${({ theme }) => theme.socialMediaIconColor};
      margin: 5px;

      :hover {
        fill: ${({ theme }) => theme.socialMediaIconHoverColor};
      }

      @media (hover: none) {
        .social-icon:hover { fill: inherit; }
      }

      @media (min-width: 320px) and (max-width: 480px) {
        width: 20px;
        margin: 2px;
      }
    }
`;

export default globalStyles;
