import styled from "styled-components"; 

export const CreateGoalStyled = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;    
    animation: appear 0.5s ease-in-out; 
    backdrop-filter: blur(30px);
    padding-top: 100px;
`