import { useEffect, useRef } from "react";
import { FormRegisterApi } from "../FormRegisterApi";
import { StyledModal } from "./style";

interface iPropsCard {
    setOpenModalRegister: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalRegisterApi = ({ setOpenModalRegister }:iPropsCard) => {
    const modalRef = useRef(null);

    useEffect(()=> {
        function modalOutClick(event:any) {
            const target = event.target;
            const element: any | null = modalRef.current;
            if(!element.contains(target)) {
                setOpenModalRegister(false);
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
                    <h4>Registro de API</h4>
                    <button onClick={() => setOpenModalRegister(false)}>X</button>
                </header>
                <FormRegisterApi setOpenModalRegister={setOpenModalRegister} />
            </div>
        </StyledModal>
    )
}