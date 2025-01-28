import styled from "styled-components";

export const DateStyled = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: 4px;
    position: absolute;
    bottom: -15px;
    text-align: center;
    width: 150px;

    img {
        height: 80%
    }

    span {
        flex: 1;
        
    }

    .category {
        color: red;
        font-family: "Montserrat", serif;
        font-size: 12px;
        padding-bottom: 2px;
    }

    .value {
        background: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        color: red;
        font-family: "Montserrat", serif;
        font-size: 20px;
        height: 35px;
        padding-top: 5px;
    }
`;