import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 20px 60px;                /* 20 on top and bottom, 60 on sides */

        @media screen and (max-width: 800px) {
            padding: 5px;                               // for mobile responsiveness
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`