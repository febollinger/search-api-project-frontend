import { yupResolver } from "@hookform/resolvers/yup"
import { useContext, useEffect, useRef } from "react"
import { SubmitHandler, useForm} from "react-hook-form"
import { AdminContext } from "../../Contexts/AdminContext"
import { CommentApiSchema } from "./schema"
import { StyledModalWrite } from "./styled"

interface iPropsCard {
  setOpenModalWrite: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iCommentVelue {
    message: string,
    userId: string,
    userName: string,
}

export const ModalWriteComment = ({ setOpenModalWrite }:iPropsCard) => {

    const { createCommentRequestAdmin, PegaIDCard, listCommentsRequestAdmin, infoUserName } = useContext (AdminContext)


    const { register, handleSubmit, formState: {errors} } = useForm <iCommentVelue>({
        resolver: yupResolver (CommentApiSchema),
    });

    const modalRef = useRef(null);

    useEffect(()=> {
        function modalOutClick(event:any) {
            const target = event.target;
            const element: any | null = modalRef.current;
            if(!element.contains(target)) {
                setOpenModalWrite(false);
            }
        }

        window.addEventListener("mousedown", modalOutClick);
        return ()=> {
            window.removeEventListener("mousedown", modalOutClick);
        }
    }, []);
    
    const submit: SubmitHandler<iCommentVelue> = async (data: any) => {
        const newData = {
            ...data,
            userId: localStorage.getItem("@USERID:"),
            userName: infoUserName,
        }

        await createCommentRequestAdmin(newData, PegaIDCard)
        setOpenModalWrite(false)
        await listCommentsRequestAdmin(PegaIDCard) 
    } 

    return (
        <StyledModalWrite>
            <form className="modal1" onSubmit={handleSubmit(submit)}  ref={modalRef}>
                <header>
                    <h4>Comentar</h4>
                    <button onClick={() => setOpenModalWrite(false)}>X</button>
                </header>
                    <div className="divComment1">
                                <div className="Comment1">
                                    <div className="commentUser1">
                                        <textarea id="" {...register("message")} ></textarea>
                                        {errors.message && (<p className="style-error" aria-label="error">{errors.message.message}</p>)}
                                    </div>
                                </div>
                    </div> 
                    <div className="divBTN1">
                        <button className="btn1" onClick={() => createCommentRequestAdmin}>Comentar</button>
                    </div>
            </form>
        </StyledModalWrite>
    )
}
