import styled from "styled-components";

export const StyledModalWrite = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--color-grey-3-op);
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;

    .modal1 {
        margin: 0 auto;
        width: 90%; 
        max-width: 750px;
        background-color: #ffffff;
        border-radius: 30px; 
        padding: 20px;
        margin-top: 150px;
    }

    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        padding: 10px 25px;
    }

    header > h4 {
        color: var(--color-04);
        font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 25px;
    }

    header > button {
        font-size: 25px;
        font-weight: 700;
        color: black;
        background-color: #FFFFFF;
    }
 

    .divComment1{
        width: 100%;
        max-height: 400px;
    }
    .Comment1{
        width: 100%;
        display: flex;
        background-color: var(--color-06);
        margin-bottom: 10px;
        border-radius: 15px;
        padding: 8px;
    }
    .infoUser1{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .infoUser1 > p {
        font-size: 16px;
        line-height: 25px;
        font-weight: 700;
        color: var(--color-grey-3);
    }

    .commentUser1{
        width: 75%;
        background-color: var(--color-06);
    }

    textarea{
        font-family: "Inter", sans-serif; 
        width: 133%;
        height: 150px;
        border-radius: 15px;
        padding: 15px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        resize: none;
    }

    .divBTN1{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .btn1{
        background-color: var(--color-05);
        width: 180px;
        height: 35px;
        margin: 15px 0 15px 0;
        border-radius: 0 0 30px 30px;

        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        color: var(--color-grey-0);
    }
    .btn1:hover {
        background-color: var(--color-04);
    }

      .style-error {
        color: var(--color-01);
        font-family: "Inter", sans-serif;
        font-weight: 300;
        font-size: 16px;
        margin-bottom: 10px;
    }




    @media (max-width: 600px) {
        header > h4 {
            font-size: 20px;
        }

        header > button {
            font-size: 20px;
        }

        .modal1{
            padding: 5px;
        }
        .Comment1{
            flex-direction: column;
            align-items: center;
        }
        textarea{
            width: 100%;
            padding: 8px;
            font-size: 14px;
        }
        .infoUser1{
            width: 100%;
        }
        .commentUser1{
            width: 100%;
            background-color: var(--color-06);
        }

    }
`