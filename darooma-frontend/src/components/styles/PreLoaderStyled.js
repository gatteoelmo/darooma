import styled from "styled-components";

export const PreLoaderStyled = styled.div`
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
  font-weight: 100;
  font-size: 50px;
  transform: translateY(0); /* Posizione iniziale */
  opacity: 1; /* Inizia visibile */
  transition: transform 2s ease-in-out, opacity 2s ease-in-out; /* Transizione per movimento e opacità */
  padding-right: 250px;

  &.animate {
    transform: translateY(-100%); /* Muovi verso l'alto */
    opacity: 1; /* Nascondi il preloader */
  }

  .loader-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;

    div {
      padding-bottom: 5px;
      width: 300px;
      text-align: end;
    }
  }

  img {
    width: 300px;
  }
`;
