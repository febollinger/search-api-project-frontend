import styled from "styled-components";

export const StyledNotFound = styled.div`
    height: 100vh;
    width: 100vw;    

    header {
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 4px solid #e5e5e5;
    }

    .img-logo {
        min-width: 280px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }

    h3 {
        font-size: 18px;
    }

    .button-back-login {
        background-color: var(--color-01);
        padding: 5px 15px;
        color: #fff;
        font-size: 15px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        cursor: pointer;
    }
    
    .img-not-found {
        height: 250px;
    }

    @media(min-width: 700px) {
        .img-not-found {
            height: 350px;
        }
    }

    @media(min-width: 1440px) {
        .img-not-found {
            height: 550px;
        }
    }
`