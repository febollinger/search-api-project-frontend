import styled from "styled-components";

export const ContainerForgetPassword = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentForgetPassword = styled.div`
  width: 100%;
  max-width: 450px;
  height: auto;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  animation: animation 1s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0s 1 normal
    forwards;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: var(--color-grey-2);

    p {
      cursor: pointer;
      &:hover {
        font-weight: 600;
      }
    }
  }
  p {
    color: var(--color-grey-2);
    font-size: 16px;
    cursor: pointer;
    &:hover {
      color: var(--color-02);
    }
  }
  fieldset {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  label {
    color: var(--color-grey-2);
    font-size: 14px;
  }
  input {
    width: 100%;
    height: 35px;
    border-radius: 8px;
    padding: 10px;
    border: 1px solid #000000;
    outline: none;
  }
  button {
    width: 108px;
    height: 28px;
    background: var(--color-05);
    border-radius: 0px 0px 30px 30px;
    color: var(--color-grey-0);

    &:hover {
      opacity: 0.8;
    }
  }
`;
