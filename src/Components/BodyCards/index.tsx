import { AuthContext } from "../../Contexts/AuthContext"
import { CardAPI } from "./CardAPI"
import { CardAPIAdm } from "./CardAPIAdm"
import { StyledBoryCards } from "./styled"
import { useContext } from "react"
import { AdminContext } from "../../Contexts/AdminContext"

interface iPropsCard {
    setOpenModalComment: React.Dispatch<React.SetStateAction<boolean>>
    setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>
}

export const BoryCards = ({ setOpenModalComment, setOpenModalEdit }:iPropsCard) => {
    
    const {  user } = useContext (AuthContext)
    const {  apilist, filterApi } = useContext (AdminContext)

    const apiListRender = apilist.filter((itens) => 
       filterApi == null ? true : itens.checked === filterApi
    )

    return(
        <StyledBoryCards>

             {apiListRender.length  ? 
                    user && user.isAdmin ?
                
                        apiListRender.map((itens, index) => {
                            return <CardAPIAdm key={index} itens={itens} setOpenModalComment={setOpenModalComment} setOpenModalEdit={setOpenModalEdit}/>
                        })
                    :
                        apiListRender.map((itens, index) => {
                            return <CardAPI key={index} itens={itens} setOpenModalComment={setOpenModalComment}/>          
                        })
                :
                        <p className="emptyList">Nenhuma API encontrada!</p>
            } 
           
        </StyledBoryCards>
    )
}