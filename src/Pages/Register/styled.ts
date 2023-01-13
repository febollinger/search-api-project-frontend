import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  header {
    width: 100%;
    border-bottom: 5px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    margin-top: 10px;

    img {
      width: 200px;
    }
  }

  form {
    width: 90%;
    max-width: 491px;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 7px 12px rgba(0, 0, 0, 0.25);
    border-radius: 34px;
    padding: 35px;
    gap: 24px;
  }

  fieldset {
    display: flex;
    flex-direction: column;
  }

  form > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  form > div > h2 {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    color: var(--color-04);
  }

  form > div > a {
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    font-weight: 300;

    :hover {
      font-weight: 600;
    }
  }

  form > fieldset > label {
    font-size: 12px;
  }

  form > fieldset > input {
    border-radius: 27px;
    border: 1px solid rgba(0, 0, 0, 1);
    padding: 8px 19px;
  }

  form > button {

    font-size: 14px;
    padding: 9px;
    border-radius: 30px;
    background-color: var(--color-04);
    color: var(--color-grey-0);

    :hover {
      filter: brightness(150%);
    }
  }

  form > span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 18px;
  }

  form > a {
    background-color: var(--color-05);
    color: var(--color-grey-0);
    border-radius: 30px;
    padding: 6.5px;
    display: flex;
    justify-content: center;
    font-size: 14px;

    :hover {
      filter: brightness(80%);
    }
  }
`;
