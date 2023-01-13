import styled from "styled-components";

export const StyledFormEditApi = styled.form`
    label {
        font-family: "Inter", sans-serif;
        font-weight: 300;
        font-size: 16px;
        display: block;
        margin-top: 15px;
        margin-bottom: 5px; 
    }

    .input-component {
        width: 100%;
        border-radius: 20px;
        height: 30px;
        outline: none;
        padding: 5px 0 5px 15px;
        border: none;
        border: 1px solid rgba(0,0,0,0.5);
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 16px;
    }

    textarea {
        width: 100%;
        border-radius: 20px;
        height: 100px;
        outline: none;
        padding: 5px 0 0 15px;
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 16px;
        resize: none;
    }

    textarea::placeholder, .input-component::placeholder {
        color: #000;
        opacity: 0.5;
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 16px;
    }

    .style-error {
        color: var(--color-01);
        font-family: "Inter", sans-serif;
        font-weight: 300;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .container-checkbox {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .container-checkbox > div > label {
        display: inline;
    }

    .label-checkbox {
        margin-right: 7px;
    }

    .label-checkbox, .input-checkbox {
        cursor: pointer;
    }

    .container-buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
    }

    .btn-update, .btn-delete {
        width: 180px;
        height: 35px;
        margin: 15px 0 15px 0;
        border-radius: 0 0 30px 30px;

        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: var(--color-grey-0);
    }

    .btn-update:hover {
        background-color: var(--color-04);
    }
    .btn-delete:hover{
        background-color: var(--color-01);
    }
    .btn-update {
        background-color: var(--color-05);
    }
    .btn-delete {
        background-color: var(--color-02);
    }
    
`