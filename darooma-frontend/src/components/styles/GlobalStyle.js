import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        user-select: none;
        color: black;
    }
    
    body {
        width: 100vw;
        /* background-color:red; */
    }
`   