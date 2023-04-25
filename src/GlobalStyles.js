import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --LightCyan : #CEE3E9;
        --NeonGreen : #53FFAA;
        --GrayishBlue : #4F5D74;
        --DarkGrayishBlue : #313A48;
        --DarkBlue : #202733;
    }

    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body{
        max-width: 100vw;
        height:100vh;
        font-family: 'Manrope', sans-serif;
        font-weight:800;
        color: var(--LightCyan);
        background-color: var(--DarkBlue);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 16px;
        
    }

`;

export default GlobalStyle;
