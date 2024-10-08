import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;       
    }
    
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        -webkit-tap-highlight-color: transparent;
    }

    body {
        color: #3e3e3e;
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
    }

    img {
        vertical-align: middle;
    }

    a, button, select {
        font-family: inherit;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    input {
        font-family: inherit;
    }

    button {
        color: inherit;
    }

    table {
        border-spacing: 0;
        border-collapse: collapse;
    }
`;
