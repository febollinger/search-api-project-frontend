
import styled from 'styled-components';

export const StyledPerfil = styled.section`
    max-width: 1280px;
    width: 100vw;
    height: 120px;
    padding: 15px 50px; 
    margin: 0 auto;
    border-radius: 8px;
    margin-top: 150px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-top: 1px solid var(--color-04);
    border-bottom: 1px solid var(--color-04);

    .divInfoPerfil{
        width: 100%;
    }
    .divInfoPerfil > h1 {
        font-size: 24px;
        line-height: 30px;
        font-weight: 600;
        color: var(--color-grey-3); 
    }
    .divInfoPerfil > h2 {
        font-size: 16px;
        line-height: 30px;
        font-weight: 400;
        color: var(--color-grey-3);
    }
    img {
        width: 50px;
    }
    img:hover {
        width: 60px;
        cursor: pointer;
    }

    @media (max-width: 500px) {
        padding: 10px;
        .divInfoPerfil > h1 {
            font-size: 18px; 
        }
        .divInfoPerfil > h2 {
            font-size: 14px;
        }
        img {
            width: 30px;
        }
        img:hover {
            width: 35px;
            cursor: pointer;
        }
    }
`;