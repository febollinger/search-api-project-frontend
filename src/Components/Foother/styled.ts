import styled from "styled-components"

export const StyledFoother = styled.section `
    box-shadow: inset 0px -100px 37px -79px rgba(0,0,0,0.1);
    margin-top: 35px;
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;

    h2 {
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        color: var(--color-05);
    }

    @media (max-width: 600px) {
        padding: 10px;
        
        h2 {
            text-align: center;
            font-size: 12px;
        }
    }

`