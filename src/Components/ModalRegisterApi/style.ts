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
    padding: 20px;
    overflow: auto;

    .modal {
        background-color: #FFFFFF;
        min-width: 270px;
        width: 500px;
        height: fit-content;
        border-radius: 35px;
        padding: 16px 20px;
    }

    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    header > h4 {
        color: var(--color-04);
        font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 18px;
    }

    header > button {
        font-size: 20px;
        font-weight: 700;
        color: black;
        background-color: #ffffff;
    }
`