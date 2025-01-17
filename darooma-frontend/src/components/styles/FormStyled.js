import styled from "styled-components";

export const FormStyled = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;
    animation: appear 0.5s ease-in-out; 
    backdrop-filter: blur(40px);
    padding-top: 100px;
        
        

    form {
        display: flex;
        justify-content: center;
        /* align-items: center; */
        flex-direction: column;
        padding: 20px;
        width: 400px;
        

        h2 {
            color: white;
            font-family: "Lacquer", serif;
            /* text-align: center; */
            font-size: 30px;
        }

        label {
            color: white;
            font-family: "Montserrat", serif;
            font-weight: 300;
            margin: 30px 0 10px 0;
        }

        input, select {
            /* width: 100%; */
            background-color: rgba(255, 255, 255, 0.05);
            /* backdrop-filter: blur(20px); */
            padding: 10px 20px;
            height: 40px;
            border-radius: 20px;
            border: none;
            color: white;
            font-family: "Montserrat", serif;
            font-weight: 300;
        }

        select>option {
            color: black;
        }

        input:focus {
            outline: none;
            background-color: rgba(255, 255, 255, 0.1);
        }

        button {
            background-color: transparent;
            border: none;
            color: white;
            cursor: pointer;
            font-family: "Montserrat", serif;
        }

        .login, .create {
            align-self: center;
            margin: 20px 0;
            padding: 10px 20px;
            border-radius: 20px;
            height: 40px;
            width:60%;
            color: white;
            background-color: transparent;
            border: none;
            z-index: 4;
            cursor: pointer;
            font-family: "Lacquer", serif;
            font-size: px;
            background-color: rgba(255, 255, 255, 0.05);
            /* backdrop-filter: blur(20px); */            
        }

        .register-button {
            text-decoration: underline;
        }
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }   

    @media (max-width: 800px) {
        form {
            width: auto;
            padding: 30px;
        }
    }
    
`;