import styled from "styled-components";

export const StyledFormRegisterApi = styled.form`
    label {
        font-family: "Inter", sans-serif;
        font-weight: 300;
        font-size: 16px;
        display: block;
        margin-top: 15px;
        margin-bottom: 5px;
    }

    input {
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

    textarea::placeholder, input::placeholder {
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

    .container-btn-submit {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .container-btn-submit > button {
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

    .container-btn-submit > button:hover {
        background-color: var(--color-04);
    }
    
    .container-btn-submit > button, .message-api {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 16px;
    }

    .container-message {
        width: 90%;
        margin: 0 auto;
    }
`