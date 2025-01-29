import styled from "styled-components";

export const HomeStyled = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    transition: all 0.5s ease;
    

    .topHome{
        position: fixed;
        width: 100vw;
        z-index: 99;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        padding: 15px 15px;


        img {
            height: 80px;
            z-index: 2;
            animation: scroll 3s ease linear;
            width: 150px;
        }

        button {
            padding: 10px 20px;
            align-items: center;
            display: flex;
            color: red;
            background-color: transparent;
            border: none;
            z-index: 4;
            cursor: pointer;
            font-family: "Lacquer", serif;
            font-size: 50px;
            transition: transform 0.3s ease-in-out;
        }

        button:hover {
            transform: scale(1.1);
        }
    
        @media only screen and (max-width: 800px) {
            img:last-child {
                display: none;
            }
        
        }
    }

    p {
        color: red;
    }

    .container {
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        z-index: 3;
        flex-wrap: wrap;
        padding: 200px 10px;
        margin-top: 0px;
        gap: 320px;

        div {
            flex: 1;
            max-width: 350px;
            min-width: 300px;
            flex-wrap: wrap;
        }

        h2 {
            font-family: "Lacquer", serif;
            font-size: 40px;
            font-weight: 1000;
            font-style: normal;
            color: red;
        }

        p {
            /* font-family: "EB Garamond", serif; */
            font-family: "Montserrat", serif;
            font-size: 16px;
            font-weight: 400;
            font-style: normal;
            color: red;
            margin-top: 10px;
        }

        @media  (max-width: 960px) {
            .description {
                order: 2;
                backdrop-filter: blur(30px);
                background-color: rgb(10, 10,10);
                padding: 20px;
                border-radius: 20px;

                p {
                    color: white;
                    font-weight: 300;
                }
            }

            .logos {
                order: 1;
            }
        } 
    }
    
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        filter: blur(1px);
        /* overflow: hidden; */

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

    @media screen and (max-width: 1100px) {
        .topHome {
            img, button {
                height: 9vw;
                font-size: 6vw;
                width: auto;
                overflow: hidden;
                margin:  0 20px;   
            }
        }


    }
`;