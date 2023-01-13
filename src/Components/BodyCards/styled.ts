import styled from 'styled-components';

export const StyledBoryCards = styled.ul`
    max-width: 1280px;
    width: 100vw;
    margin: 0 auto;
    padding: 10px;
    
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;

    .emptyList {
        text-align: center;
        font-size: 20px;
        line-height: 26px;
        font-weight: 600;
        margin-top: 35px;
        color: var(--color-05);
    }

    @media (max-width: 600px) {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`