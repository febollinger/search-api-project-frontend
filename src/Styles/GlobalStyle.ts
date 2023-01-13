import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
    
    button{ 
        cursor: pointer;
        border: none;
    }


    fieldset {

        border: none;
    }

    #root{
        width: 100%;
        margin: 0 auto;
        padding: 0;

        display: flex;
        justify-content: center;
    }

    #root>div{
        width: 100%;
        height: 100vh;
    }

    :root {
        --color-01: #780000;
        --color-02: #C1121F;
        --color-03: #FDF0D5;
        --color-04: #003049;
        --color-05: #669BBC;
        --color-06: #A9C2D1;
     
        --color-grey-0: #F5F5F5;
        --color-grey-1: #E0E0E0;
        --color-grey-2: #828282;
        --color-grey-3: #333333;

        --color-grey-3-op: rgb(51,51,51,0.7);
        
        --color-error: #E60000;
        --colot-warning: #FFCD07;
        --colot-sucess: #168821;
        --colot-information: #155BCB;

        font-family: "Inter", sans-serif;
        font-family: "Poppins", sans-serif;
    }
    
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


    @media (max-width: 700px) {
        
    }

    @keyframes animation {
	0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
`;
