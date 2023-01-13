import styled from 'styled-components';

export const StyledCardAPI = styled.div`
    width: 250px;
    border-radius: 30px; 
    box-shadow: 4px 5px 9px rgba(0, 0, 0, 0.25);
    margin-top: 20px;

    :hover{
        box-shadow: 4px 5px 25px rgb(0 0 0 / 50%);
    }

    .divHeaderCard > h2 {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        padding: 8px;
        background-color: var(--color-03);
        border-radius: 30px 30px 0 0;
        font-size: 18px;
        line-height: 26px;
        font-weight: 700;
        color: var(--color-grey-3);
    }

    .divImg{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px 0 15px 0;
    }
    .divImg > img {
        width: 80px;
        height: 70px;
    }

    .divStatus{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px 0 15px;
    }
    .divStatus .divText {
    }
    .divStatus .divText .pVerification{
        display: flex;
        align-items: center;

        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: var(--colot-sucess);

    }
    .pVerification > svg{
        margin-right: 10px;
    }

    .divStatus .divText .pWorking{
        display: flex;
        align-items: center;
        
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: var( --color-error);

    }
    .pWorking > svg{
        margin-right: 10px;
    }

    .divFavorit .No{
        width: 30px;
        height: 30px;
        color: var(--color-grey-2);
        background-color: #ffffff;
    }
    
    .divFavorit .Yes{
        width: 30px;
        height: 30px;
        color: var(--colot-warning);
        background-color:  #ffffff;
        cursor: pointer;
    }


    .divFooterCard{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px 0 15px 0;
    }

    .divFooterCard > button {
        background-color: var(--color-05);
        width: 140px;
        height: 35px;
        margin: 15px 0 15px 0;
        border-radius: 0 0 30px 30px;

        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: var(--color-grey-0);
    }
    .divFooterCard > button:hover {
        background-color: var(--color-04);
    }

    .divFooterCard > .BTNBlue {
        background-color: var(--color-05);
        width: 140px;
        height: 35px;
        margin: 15px 0 15px 0;
        border-radius: 0 0 30px 30px;

        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: var(--color-grey-0);
    }
    .divFooterCard > .BTNBlue:hover {
        background-color: var(--color-04);
    }

`