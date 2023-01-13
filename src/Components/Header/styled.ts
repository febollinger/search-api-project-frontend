
import styled from 'styled-components';

export const StyledHeader = styled.section`
    width: 100%;
    margin-bottom: 20px;
    border-bottom: 5px solid var(--color-grey-1);
    position: fixed;
    top: 0;
    background-color: #ffffff;

    .container01{ 
        max-width: 1280px;
        margin: 0 auto;
        width: 100%;
        height: 120px;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .divGeral{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
    }

    .container02{
        display: none;
    }

    .divLogo{
        margin: 0;
        padding: 0;
        width: 20%;
    }

    .divLogo img{ 
        margin-top: 10px;
        width: 200px;
    }

    .divNav{
        margin: 0;
    }

    .divNavegate{
        margin: 0;
        padding: 0;
        display: flex;
    }

    .divNavegate > button {
        background-color: #ffffff;
        margin: 10px;
        width: fit-content;
        font-size: 18px;
        line-height: 30px;
        font-weight: 400;
        text-align: center;
        color: #000;
    }

    .divNavegate > button:hover {
        border-bottom: 2px solid var(--color-05);
    }

    .divNavegateMob{
        display: none;
        margin: 0;
        padding: 0;
    }

    .divNavegateMob > a {
        margin: 10px;

        font-size: 18px;
        line-height: 30px;
        font-weight: 400;
        color: var(--color-05);
    }

    .divLogout{
        margin: 0;
        padding: 0;
    }
    .divLogout > img{
        margin: 10px;
        height: 40px;
        cursor: pointer;
    }
    .divLogout > img:hover{
        height: 45px;
        cursor: pointer;
    }

    .divHamburguer{
        display: none;
    }

    .divHamburguer svg{
        display: none;
        cursor: pointer;
        width: 35px;
        height: 35px;
    }

    @media (max-width: 800px) {
        .divGeral{
            width: 100%;
        }
        .divLogo{
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .divLogo img{ 
            margin-top: 10px;
            width: 170px;
        }
        div{
            display: flex;
        }
        .divLogout > img {
            width: 25px;
            height: 25px;
        }

        .divHamburguer{
            display: flex;
        }
        .divHamburguer svg{
            display: block;
            cursor: pointer;
            width: 20px;
            height: 20px;
            z-index: 20;
        }
        
        .divNavegate{
            display: none;
        }

        div{
            height: auto;
            display: flex;
            padding: 0;
        }

        .divNav{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .divNavegateMob{
            position: absolute;
            left: 5px;
            top: 81px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            background-color: #ffffff;
            z-index: 10;
            padding-top: 48px;
            border-radius: 8px;
            border: 1px solid var(--color-grey-1);
        }
        .divNavegateMob > button {
            background-color: #ffffff;
            margin: 10px;
            width: fit-content;
            font-size: 18px;
            line-height: 30px;
            font-weight: 400;
            text-align: center;
            color: #000;
        }

        .divNavegateMob > button:hover {
            border-bottom: 2px solid var(--color-05);
        }

        .container01{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .container02{
            display: flex;
        }

        .divMenuMobile{
            display: flex;
        }
    }
`;