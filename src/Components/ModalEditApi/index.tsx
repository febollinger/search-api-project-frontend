import { StyledModal } from "./style"
import { FormEditApi } from "../FormEditApi"
import { useEffect, useRef } from "react";


interface iPropsCard {
    setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>,
} 


export const ModalEditApi = ({ setOpenModalEdit }: iPropsCard) => {
    const modalRef = useRef(null);

    useEffect(()=> {
        function modalOutClick(event:any) {
            const target = event.target;
            const element: any | null = modalRef.current;
            if(!element.contains(target)) {
                setOpenModalEdit(false);
            }
        }

        window.addEventListener("mousedown", modalOutClick);
        return ()=> {
            window.removeEventListener("mousedown", modalOutClick);
        }
    }, []);

    return (
        <StyledModal>
            <div className="modal" ref={modalRef}>
                <header>
                    <h4>Editar API</h4>
                    <button onClick={() => setOpenModalEdit(false)}>X</button>
                </header>
                <FormEditApi setOpenModalEdit={setOpenModalEdit} />
            </div>
        </StyledModal>
    )
}