import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--color-grey-3-op);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    .modal {
        background-color: #FFFFFF;
        min-width: 270px;
        width: 400px;
        border-radius: 35px;
        padding: 16px 16px;
    }

    header {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 15px;
    }

    header > button {
        font-size: 18px;
        font-weight: 700;
        color: black;
        background-color: #ffffff;
    }
 

    .message-confirm {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        margin-bottom: 15px;
    }


    .container-buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
    }

    .btn-delete, .btn-cancel {
        width: 150px;
        height: 35px;
        margin: 15px 0 15px 0;
        border-radius: 0 0 30px 30px;

        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: var(--color-grey-0);
    }

    .btn-delete:hover {
        background-color: var(--color-04);
    }
    .btn-cancel:hover{
        background-color: var(--color-01);
    }
    .btn-delete {
        background-color: var(--color-05);
    }
    .btn-cancel {
        background-color: var(--color-02);
    }
`