import { StyledHeader } from "./styled"
import { useState, useContext } from "react"
import logo from "../../Assets/image/logomarca.png";
import  Logout  from "../../Assets/image/logout btn.png"
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../Contexts/AdminContext";


export const Header = () => {

    const {  FilterApiRender } = useContext (AdminContext)

    const [active, setActive] = useState(false)

    const ToggleMenu = () => { 
        setActive (!active)
    }

    const navigate = useNavigate()
    const LimpaLS = () => {
        window.localStorage.clear()
        navigate('/login')
    }


    return(
        <StyledHeader>
            <div className="container01">

                <div className="divGeral"> 

                    <div className="divLogo">
                        <img src={logo} alt="Logo Search API" />
                    </div>

                    <div className="divNavegate">

                        <button onClick={() => {FilterApiRender(null)}}>Todos</button>
                        <button onClick={() => {FilterApiRender(false)}}>Não Verificados</button>
                        <button onClick={() => {FilterApiRender(true)}}>Verificados</button>

                    </div> 

                 </div>


                <div className="divNav">
                    <div className="divHamburguer" >
                        {active ? <AiOutlineClose onClick={ToggleMenu}/> : <GiHamburgerMenu onClick={ToggleMenu}/> }
                </div>

                <div className="divLogout">
                    <img src={Logout} alt="Logo Search API" onClick={() => LimpaLS()}/>
                </div>

                </div>


                <div className="container02">
                    {active ?
                        <div className="divNavegateMob">
                            <button onClick={() => {FilterApiRender(null)}}>Todos</button>
                            <button onClick={() => {FilterApiRender(false)}}>Não Verificados</button>
                            <button onClick={() => {FilterApiRender(true)}}>Verificados</button>
                        </div>
                    :
                     null}

            </div>


            </div>
        </StyledHeader>
    )
}