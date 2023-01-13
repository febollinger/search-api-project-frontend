import { Link } from "react-router-dom";
import robo from "../../Assets/image/robo.jpg";
import logo from "../../Assets/image/logomarca.png";
import { StyledNotFound } from "./style";

export const NotFoundPage = () => {
    return (
        <StyledNotFound>
            <header>
                <img src={logo} alt="Logo Search API" className="img-logo" />
            </header>
            <div>
                <img src={robo} alt="Página não encontrada" className="img-not-found" />
                <h3>Ops! Não encontramos essa página.</h3>
                <Link to="/" className="button-back-login">Voltar para home</Link>
            </div>
        </StyledNotFound>
    )
}