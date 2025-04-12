import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
    line-height: 130%;
  }

  body{
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme["base-text"]};
  }

  p, span, input, textarea, h1, h2, h3, h4, h5, label{
    font-family: "Nunito", sans-serif;
    line-height: 160%;
    font-weight: 400;
    font-size: 1rem;

    p, textarea {
      color: ${(props) => props.theme["base-text"]};
    }
    
    span {
      color: ${(props) => props.theme["base-span"]};
    }

    input {
      color: ${(props) => props.theme["base-input"]};
    }

    label {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
