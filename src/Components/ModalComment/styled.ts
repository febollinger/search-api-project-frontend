import styled from "styled-components"

export const StyledModalComment = styled.section `
    width: 100vw;
    height: 100vh;
    background-color: var(--color-grey-3-op);
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;

    .divModal{
        margin: 0 auto;
        width: 90%; 
        max-width: 800px;
        background-color: #ffffff;
        border-radius: 30px; 
        padding: 20px;
        margin-top: 50px;
    }
    .divHeaderModal{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
    }
    .divHeaderModal > h1 {
        font-size: 40px;
        line-height: 55px;
        font-weight: 700;
        color: var(--color-05);
    }
    .divHeaderModal > button {
        font-size: 30px;
        line-height: 50px;
        font-weight: 700;
        color: var(--color-grey-3);
        background-color: #ffffff;
    }
    .divHeaderModal > button:hover{
        font-size: 35px;
    }

    .divInfoApi{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
    }
    .divInfoApi > img {
        width: 100px;
        height: 100px;
    }
    .divSpan{
        width: 80%;
    }
    .divInfoApi > .divSpan > span {
        font-size: 16px;
        line-height: 25px;
        font-weight: 500;
        color: var(--color-grey-3);
    }

    .divComment{
        width: 100%;
        max-height: 400px;
        overflow-y: scroll;
    }
    .Comment{
        width: 100%;
        display: flex;
        background-color: var(--color-06);
        margin-bottom: 10px;
        border-radius: 15px;
        padding: 8px;
    }
    .infoUser{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .infoUser > p {
        font-size: 16px;
        line-height: 25px;
        font-weight: 700;
        color: var(--color-grey-3);
    }
    .infoUser > button {
        background:transparent;
    }
    .infoUser > button > svg {
        cursor: pointer;
        width: 20px;
        height: 20px;
    }
    .infoUser > button > svg:hover {
        color: var(--color-error);

    }

    .commentUser{
        width: 75%;
        background-color: var(--color-grey-0);
        border-radius: 15px;
        padding: 5px;
    }
    .commentUser > span {
        font-size: 13px;
        line-height: 15px;
        font-weight: 400;
        color: black;
    }

    .divBTN{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .BtnBlue{
        background-color: var(--color-05);
        width: 180px;
        height: 35px;
        margin: 15px 0 15px 0;
        border-radius: 0 0 30px 30px;

        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: var(--color-grey-0);
    }
    .BtnBlue:hover {
        background-color: var(--color-04);
    }

    .BtnRed{
        background-color: var(--color-02);
        width: 180px;
        height: 35px;
        margin: 15px 0 15px 0;
        border-radius: 0 0 30px 30px;
        padding-top: 7px;
        
        text-align: center;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: var(--color-grey-0);
    }
    .BtnRed:hover {
        background-color: var(--color-01);
    }

    .loddingComment {
        text-align: center;
        font-size: 20px;
        line-height: 26px;
        font-weight: 600;
        margin-bottom: 25px;
        color: var(--color-05);
    }

    @media (max-width: 600px) {
        .divModal{
            padding: 10px 5px 5px 5px;
        }
        .divHeaderModal{
            margin-bottom: 10px;
        }
        .divHeaderModal > h1 {
            font-size: 25px;
            line-height: 35px;
        }
        .divHeaderModal > button {
            font-size: 20px;
            margin-right: 15px;
        }
        .divHeaderModal > button:hover {
            font-size: 22px;
        }

        .divInfoApi{
            flex-direction: column;
            margin-bottom: 10px;
        }
        .divSpan{
            width: 100%;
        }
        .divInfoApi > img {
            width: 70px;
            height: 70px;
        }
        .divInfoApi > .divSpan > span {
            font-size: 14px;
            line-height: 20px;
            font-weight: 400;
            color: var(--color-grey-3);
        }

        .Comment{
            padding: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 10px;
        }
        .infoUser{
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .commentUser{
            width: 100%;
            background-color: var(--color-05);
            border-radius: 15px;
            padding: 5px;
        }

        .divBTN{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

    }
`