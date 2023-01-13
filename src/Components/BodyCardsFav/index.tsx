import { AuthContext } from "../../Contexts/AuthContext"
import { useContext } from "react"
import { AdminContext } from "../../Contexts/AdminContext"
import { StyledBoryCards } from "../BodyCards/styled"
import { CardAPIAdm } from "../BodyCards/CardAPIAdm"
import { CardAPI } from "../BodyCards/CardAPI"

interface iPropsCard {
    setOpenModalComment: React.Dispatch<React.SetStateAction<boolean>>
    setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>
}




export const BoryCardsFav = ({ setOpenModalComment, setOpenModalEdit }:iPropsCard) => {
    
    const {  user } = useContext (AuthContext)
    const { apiFavorites } = useContext (AdminContext)

    return(
        <StyledBoryCards>

             {
                user && user.isAdmin ?
                apiFavorites.map((itens, index) => {
                    return <CardAPIAdm key={index} itens={itens} setOpenModalComment={setOpenModalComment} setOpenModalEdit={setOpenModalEdit}/>
                })
            :
                apiFavorites.map((itens, index) => {
                    return <CardAPI key={index} itens={itens} setOpenModalComment={setOpenModalComment}/>          
                })
            } 
           
        </StyledBoryCards>
    )
}