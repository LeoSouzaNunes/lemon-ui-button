import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body{
        margin:0;
        padding:0; 

        min-height:100vh;
        overflow:auto;
    }

    body {   
        font-family: 'Inter', sans-serif;
        background-color: #ebeadf;
    }

    *{
        box-sizing:border-box;
    }

    #root{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        min-height:100vh;
    }

    button{
        transition: background 0.15s;
    }

    .test{
        display:flex;
        flex-direction:column;
        width:500px;
    }
`;

export default GlobalStyle;
