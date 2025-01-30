import styled from "styled-components";

export const ErrorPageStyled = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: rgb(150, 0,0);
  color: rgb(255, 255, 255);
  font-family: "Montserrat", serif;
  font-size: 30px;
  font-weight: 100;
  text-align: center;

  .number {
    font-size: 100px;
  }

  .link {    
    color: rgb(16, 16, 16);
    font-weight: 300;
  }

`;
