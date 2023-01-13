import { useContext, useEffect, useRef } from "react"
import { AdminContext } from "../../Contexts/AdminContext"
import { StyledModal } from "./style"

interface iPropsCard {
    setOpenModalDeletApi: React.Dispatch<React.SetStateAction<boolean>>
    setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>,
}

export const ModalConfirmDelete = ({ setOpenModalDeletApi, setOpenModalEdit }:iPropsCard) => {

    const { deleteApiRequest, PegaIDCard } = useContext (AdminContext)
    const modalRef = useRef(null);

    useEffect(()=> {
        function modalOutClick(event:any) {
            const target = event.target;
            const element: any | null = modalRef.current;
            if(!element.contains(target)) {
                setOpenModalDeletApi(false);
            }
        }

        window.addEventListener("mousedown", modalOutClick);
        return ()=> {
            window.removeEventListener("mousedown", modalOutClick);
        }
    }, []);


    const ConfimeDelet = () => {
        deleteApiRequest(PegaIDCard)
        setOpenModalDeletApi(false)
        setOpenModalEdit(false)
    }

    return (
        <StyledModal>
            <div className="modal" ref={modalRef}>
                <header>
                    <button onClick={() => setOpenModalDeletApi(false)}>X</button>
                </header>
                <form>
                    <h2 className="message-confirm">Tem certeza que deseja deletar esta API?</h2>
                    <div className="container-buttons">
                        <button type="button" className="btn-delete" onClick={() => ConfimeDelet()} >Confirmar</button>
                        <button type="button" className="btn-cancel" onClick={() => setOpenModalDeletApi(false)}>Cancelar</button>
                    </div>
                </form>
            </div>
        </StyledModal>
    )
}