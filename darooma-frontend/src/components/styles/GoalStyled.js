import styled from "styled-components";

export const GoalStyled = styled.div`
    height: 330px;
    width: 330px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    flex-direction: column;
    border-radius: 90px;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: inset  0 0 20px 0 rgba(0, 0, 0, 0.2);
    z-index: 2;
    /* animation: appear 1s ease-in-out, scale .5s cubic-bezier(0.68, -0.55, 0.27, 1.55); */

    h3 {
        color: white;
        font-family: "Lacquer", serif;
        font-size: 20px;
        font-weight: 600;
    }

    p {
        color: white;
        font-family: "Montserrat", serif;
        font-weight: 300;
        font-size: 11px;
        text-align: center;
        padding: 10px;
    }
    
    /* box-shadow:  0 0 10px 0 rgba(0, 0, 0, 0.2); */
    

    img {
        height: 100px;
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }  

    @keyframes scale {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

`;