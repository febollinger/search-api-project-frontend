import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  header {
    width: 100%;
    border-bottom: 6px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    margin-top: 10px;

    img {
      width: 200px;
    }
  }

  .infoAPI {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 615px;
    box-shadow: 4px 7px 12px rgba(0, 0, 0, 0.25);
    border-radius: 34px;
    padding: 35px;
    gap: 10px;
  }

  .infoAPI > div > p {
    font-size: 14px;
    font-weight: 700;
    text-align: center;

    strong {
      color: var(--color-05);
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .list > ul {
    display: flex;
    flex-direction: column;
    max-height: 220px;
    border-radius: 2px;
    padding: 10px 10px;
    gap: 10px;
    overflow-y: auto;

    ::-webkit-scrollbar {
      background-color: var(--color-grey-1);
      width: 5px;
      height: 5px;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--color-05);
      width: 5px;
      border-radius: 8px;
    }
  }

  .loading {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: var(--color-05);
  }

  .list li {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
  }

  li > img {
    width: 45px;
  }

  li > h4 {
    width: 80px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  li .pVerification {
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: var(--colot-sucess);
  }

  .list > div {
    display: flex;
    justify-content: space-around;
  }

  .btnLogin {
    width: 90px;
    background-color: var(--color-05);
    color: var(--color-grey-0);
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
    border-radius: 0px 0px 0px 30px;

    :hover {
      background-color: var(--color-04);
    }
  }

  .btnRegister {
    width: 90px;
    background-color: var(--color-02);
    color: var(--color-grey-0);
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
    border-radius: 0px 0px 30px 0px;

    :hover {
      background-color: var(--color-01);
    }
  }

  .PCarregando{
        text-align: center;
        font-size: 16px;
        line-height: 26px;
        font-weight: 600;
        margin-bottom: 25px;
        color: var(--color-05);
  }

  @media (min-width: 450px) {
    .list li {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
  }
`;
