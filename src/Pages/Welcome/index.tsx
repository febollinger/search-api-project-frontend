import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/image/logomarca.png";
import { ListApi } from "../../Components/WelcomeList";
import { api } from "../../Services";
import { StyledContainer } from "./styled";

export interface iItens {
    checked: boolean;
    description: string;
    favorite: boolean,
    img: string;
    link: string;
    name: string;
    onAir: boolean;
    userId: string;
    uuid: string;
};

export const WelcomePage = () => {
  const [apilist, setApiList] = useState([] as iItens[]);

  const navigate = useNavigate();

  useEffect(() => {
    const getApiList = async () => {
      try {
        const response = await api.get("apiList");
        setApiList(response.data);
      } catch (error) {
        navigate("*");
      }
    };

    getApiList();
  }, [navigate]);

  return (
    <StyledContainer>
      <header>
        <img src={logo} alt="Logo Search API" />
      </header>
      <div className="infoAPI">
        <div>
          <p>Já Pensou que estaria perdendo tempo ao olhar diversas API que nem estão funcionando?? Aqui na <strong>Search API</strong>, você Cai de Cabeça nos códigos!!! Faça já seu login ou Crie Sua Conta!!!</p>
        </div>
        <div className="list">
          <ul>

          { apilist.length ?
                apilist.map((itens, index) => {
                  if(itens.checked === true){
                    return(
                      <ListApi itens={itens} key={index} />
                    ) 
                  }else{
                    return null
                  }
                    
                })
            :
                <p className="PCarregando">Carregando...</p>
            }           
          </ul>
          <div>
            <Link className="btnLogin" to={"/login"}> Login </Link>
            <Link className="btnRegister" to={"/register"}> Register </Link>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};
