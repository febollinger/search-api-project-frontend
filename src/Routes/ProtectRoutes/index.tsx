import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../../Contexts/AuthContext"
import { StyledProtectRout } from "./styled"


export const ProtectRoute = () => {  
     
    const { user, time } = useContext (AuthContext)

    if(time){
        return (
            <StyledProtectRout>
                <h1>Carregando...</h1>
            </StyledProtectRout>
            )
    }

    return(
        user ? <Outlet /> : <Navigate to='/login' />
    )
}