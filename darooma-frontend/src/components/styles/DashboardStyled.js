import styled from "styled-components";

export const DashboardStyled = styled.div`
    width: 100vw;
    /* height: 100vh;     */
    z-index: 3;
    /* transition: all 0.5s ease; */
    
    .blur {
        position: fixed;
        backdrop-filter: blur(20px);
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    
    .goals-container {
        margin-top: 20px;
        padding : 20px;
        padding-right: 40px;
        z-index: 3;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-wrap: wrap;
        width: 100vw;
        grid-gap: 40px;
    }
    .hello {
        margin-top: 100px;
        z-index: 2;
        font-size: 30px;
        text-align: center;
        position: relative;
        padding: 20px;
        height: 80px;

        h2 {
            color: red;
            font-family: "Lacquer", serif;
            font-size: 30px;
            text-align: center;
            position: relative;
            

            @media only screen and (max-width: 800px) {
                font-size: 20px;
            }
        }
    }
    `;