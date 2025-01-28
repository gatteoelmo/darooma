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
    position: relative;
    overflow: visible;

    .xp {
        position: absolute;
        top: 60px;
        left: 60px; 
        font-size: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        scale: 2;

        span {
            font-family: "Lacquer", serif;
            color: rgb(230, 0, 0);
            font-size: 20px;
            font-weight: 600;
        }

        img {
            height: 20px;
        }
    }

    h3 {
        color: white;
        font-family: "Lacquer", serif;
        font-size: 20px;
        font-weight: 600;
    }

    .description {
        color: white;
        font-family: "Montserrat", serif;
        font-weight: 300;
        font-size: 11px;
        text-align: center;
        padding: 10px;
    }

    .daruma {
        position: relative;

        img {
            height: 100px;
        }

        button {            
            height: 7.5px;
            width: 7.5px;
            border-radius: 5px;
            border: none;
            position: absolute;
            top: 27.5px;
            left: 57px;
            cursor: pointer;
        }        
    }

    .arrow {
        position: absolute;
        top: 20px;
        right: -10px;
        scale: 2;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        height: 40px;
        pointer-events: none;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .delete {
        position: absolute;
        top: 30px;
        right: 40px;
        opacity: .9;
    }

    &:hover .arrow {
        opacity: 1;
    }   

    .add-goal {
        background-color: transparent;
        border: none;
        color: rgb(230, 0, 0);
        font-family: "Montserrat", serif;
        font-size: 100px;
        font-weight: 100;
        cursor: pointer;
    }
`;