import { BoryCards } from "../../Components/BodyCards"
import { Foother } from "../../Components/Foother"
import { Header } from "../../Components/Header"
import { ModalComment } from "../../Components/ModalComment"
import { Perfil } from "../../Components/Perfil"
import { StyledHome } from "./styled"
import { useState } from "react"
import { ModalEditApi } from "../../Components/ModalEditApi"
import { ModalRegisterApi } from "../../Components/ModalRegisterApi"


export const Home = () => {

    const [OpenModalComment, setOpenModalComment] = useState (false)
    const [OpenModalEdit, setOpenModalEdit] = useState (false)
    const [OpenModalRegister, setOpenModalRegister] = useState (false)

    return(
        <StyledHome>
            <Header />

            <div className="container-scroll">
                <Perfil setOpenModalRegister={setOpenModalRegister}/>
                {OpenModalRegister ? <ModalRegisterApi setOpenModalRegister={setOpenModalRegister}/> : null}

                <BoryCards setOpenModalComment={setOpenModalComment} setOpenModalEdit={setOpenModalEdit}/>
                {OpenModalComment ? <ModalComment setOpenModalComment={setOpenModalComment}/> : null}
                {OpenModalEdit ? <ModalEditApi setOpenModalEdit={setOpenModalEdit}/> : null}
            </div>
            
            <Foother />

        </StyledHome>
    )
}