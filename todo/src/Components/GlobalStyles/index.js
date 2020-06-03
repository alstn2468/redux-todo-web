import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        border-radius: 0;
    }

    html {
        width: 100%;
        height: auto;
        overflow: scroll;
        background: ${({ theme }) => theme.body};
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

    .dialog-container{
        background-color: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 10px;
    }

    .dialog-label {
        user-select: none;
        color: #000000;
    }

    .dialog-input {
        color: #000000;
        background-color: rgba(0, 0, 0, 0);
        border: 1px solid #000000;
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

    .auth-button {
        color: ${({ theme }) => theme.headerButtonColor};
        transition: color 0.5s ease;
        cursor: pointer;
        user-select: none;

        &:hover {
            color: ${({ theme }) => theme.headerButtonHoverColor};
        }

        &:focus {
            outline: none;
        }
    }

    .auth-button.logout {
        border-left: 1px solid ${({ theme }) => theme.containerBorder};
        padding-left: 5px;
        margin-left: 5px;
        user-select: none;

        &:focus {
            outline: none;
        }
    }

    .dialog-button {
        border: 1px solid #000000;
        background-color: #000000;
        color: #ffffff;
        cursor: pointer;
        text-align: center;
        transition: all 0.5s ease;
        user-select: none;

        &:focus {
            outline: none;
        }

        &:hover {
            border: 1px solid ${({ theme }) => theme.headerButtonHoverColor};;
            background-color: ${({ theme }) => theme.headerButtonHoverColor};;
        }
    }

    .dialog-button:disabled {
        border: 1px solid #000000;
        background-color: #000000;
        color: #ffffff;
        cursor: default; 
        text-align: center;
        transition: all 0.5s ease;
        user-select: none;
        opacity: 0.3;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        .MuiAlert-icon {
            padding: 9px 0 !important;
        }

        .MuiSvgIcon-root {
            width: 0.8em !important;
            height: 0.8em !important;
        }

        .MuiAlert-root {
            font-size: 12px !important;
            padding: 1px 9px !important;
            line-height: 1.7 !important;
        }
    }

    .header-button {
        color: ${({ theme }) => theme.headerButtonColor};
        cursor: pointer;
        user-select: none;

        svg {
            transition: fill 0.5s ease;
        }
        
        :after {
            content: '';
            border-right-width: 1px;
            border-right-color: ${({ theme }) => theme.headerAfterBorderColor};
            border-right-style: solid;
            margin: 0 10px;
        }

        @media (hover: none) {
            .header-button:hover { color: inherit; }
        }

        &:focus {
            outline: none;
        }

        &:hover {
            svg {
                fill: ${({ theme }) => theme.headerButtonHoverColor};
            }
        }
    }

    .header-button.able {
        transition: color 0.5s ease;
        cursor: pointer;

        &:focus {
            outline: none;
        }

        &:hover {
            color: ${({ theme }) => theme.headerButtonHoverColor};
        }
    }

    .selected {
      color: ${({ theme }) => theme.headerButtonHoverColor};
    }

    ._loading_overlay_content{
        color: ${({ theme }) => theme.loadingOverlayContentColor};
    }

    ._loading_overlay_overlay {
        position: fixed !important;
        background-color: ${({ theme }) => theme.loadingOverlayBackgroundColor};
        opacity: ${({ theme }) => theme.loadingOverlayOpacity};
    }

    .social-icon {
        width: 30px;
        height: auto;
        fill: ${({ theme }) => theme.socialMediaIconColor};
        margin: 5px;
        transition: fill 0.5s ease;

        :hover {
            fill: ${({ theme }) => theme.socialMediaIconHoverColor};
        }

        &:focus {
            outline: none;
        }

        @media (hover: none) {
            .social-icon:hover { fill: inherit; }
        }

        @media (min-width: 320px) and (max-width: 480px) {
            width: 20px;
            margin: 2px;
        }
    }

    .user-info-icon {
        fill: ${({ theme }) => theme.text};
    }
`;

export default globalStyles;
