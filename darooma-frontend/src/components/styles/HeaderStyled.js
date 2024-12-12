import styled from "styled-components";

export const HeaderStyled = styled.header`
    position: fixed;
    width: 100vw;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    /* align-items: center; */
    flex-direction: row;
    /* padding: 15px 15px; */
    backdrop-filter: blur(10px);
    animation: appear 2s ease-in-out;

    img {
        height: 40px;
        /* z-index: 2; */
        /* animation: scroll 3s ease linear; */
        /* width: 150px; */
    }

    button {
        padding: 10px 20px;
        color: red;
        background-color: transparent;
        border: none;
        z-index: 4;
        cursor: pointer;
        font-family: "Lacquer", serif;
        font-size: 20px;
        transition: transform 0.3s ease-in-out;
    }

    button:hover {
        transform: scale(1.1);
    }
    
    /* @media only screen and (max-width: 800px) {
        img:last-child {
            display: none;
        }
        
    } */

        @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }  


`

