import styled from "styled-components";

export const BackgroundStyled = styled.div`
       
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        /* filter: blur(1px); */
        transition: transform 1s ease-in-out;


        .image-container {
            display: flex;
            justify-content: center;
            
            .image {
            /* scale: 1.5; */
            object-fit: cover;
            margin: 0 auto;
            height: 100vh;
            z-index: 2;
            /* opacity: 0.5; */
          }

        }

        .gif-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        
            .gif {
                height: 31vh;
                object-fit: cover;
                z-index: 1;
            }
        }
    }

    .background.scaled {
        transform: scale(4);
    }
`;