import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --white: #FFFFFF;
        --grey: #f1f5f8;
        --grey-200: #c6c7c7;
        --black: #4E5555;
        --purple: #30107D;
        --purpleLight: #401A9B;
        --green: #06D6A2;
        --red:#e0537b;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

    body{
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        background: var(--grey);
        color: var(--black);
    }

    button{
        cursor: pointer;
        font-weight: 700;
        transition: 0.2s;
        border-radius: 8px;
        padding: 0.9rem 3rem;
        border: none;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

        &:hover{
            filter: brightness(0.8);
        }
    }

    .container{
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    #error-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`;
