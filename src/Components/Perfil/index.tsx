import { StyledPerfil } from "./styled"
import AddAPI from "../../Assets/image/btmAddAPI.png"
import { AuthContext } from "../../Contexts/AuthContext"
import { useContext } from "react"

interface iPropsCard {
    setOpenModalRegister: React.Dispatch<React.SetStateAction<boolean>>
} 

export const Perfil = ({ setOpenModalRegister }: iPropsCard) => {

    const { user } = useContext (AuthContext)

    return(
        <StyledPerfil>
            <div className="divInfoPerfil">
                <h2>Seja Bem-vindo</h2>
                <h1>{user && user.name}</h1>
            </div>
            <img src={AddAPI} alt="botão para adicionar uma API" onClick={() => setOpenModalRegister(true)}/>
        </StyledPerfil>
    ) 
}