import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../Input";
import { EditApiSchema } from "./schema";
import { StyledFormEditApi } from "./style";
import { IEditApiValues } from "./types";
import { useState, useContext } from "react"
import { ModalConfirmDelete } from "../ModalConfirmDelete";
import { AdminContext } from "../../Contexts/AdminContext";

interface iPropsCard {
    setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>,
} 

export const FormEditApi = ({ setOpenModalEdit }: iPropsCard) => {

    const {  editApiRequest, PegaIDCard, PegaInfoCard } = useContext (AdminContext)

    const [openModalDeletApi, setOpenModalDeletApi] = useState (false)

    const { register, handleSubmit, formState: {errors} } = useForm<IEditApiValues>({
        mode: "onBlur",
        resolver: yupResolver(EditApiSchema),
        defaultValues: {
            name: PegaInfoCard?.name,
            link: PegaInfoCard?.link,
            description: PegaInfoCard?.description,
            img: PegaInfoCard?.img,
            checked: PegaInfoCard?.checked,
            onAir: PegaInfoCard?.onAir,
        }
    });

    const submit: SubmitHandler<IEditApiValues> = async (data: any) => {
        await editApiRequest (data, PegaIDCard)

        setOpenModalEdit(false);
    } 

    return (
        <StyledFormEditApi noValidate onSubmit={handleSubmit(submit)}>
            <Input id="name" type="text" placeholder="Nome da API aqui..." register={register("name")} label="Nome da API:" error={errors.name} />

            <Input id="link" type="text" placeholder="Link da API aqui..." register={register("link")} label="Link da API:" error={errors.link} />

            <Input id="img" type="text" placeholder="Link da imagem aqui..." register={register("img")} label="Imagem referência da API:" error={errors.img} />

            <label htmlFor="description">Descrição da API:</label>
            <textarea id="description" placeholder="Descrição da API aqui..." {...register("description")}></textarea>
            {errors.description && (<p className="style-error" aria-label="error">{errors.description.message}</p>)}

            <div className="container-checkbox">
                <div>
                    <label className="label-checkbox" htmlFor="validada">Validada</label>

                    <input type="checkbox" id="validada" className="input-checkbox" {...register ("checked")}/>

                </div>

                <div>
                    <label className="label-checkbox" htmlFor="ar">No ar</label>

                    <input type="checkbox" id="ar" className="input-checkbox" {...register ("onAir")}/>

                </div>
            </div>

            <div className="container-buttons">
                <button type="submit" className="btn-update">Atualizar</button>

                <button type="button" className="btn-delete" onClick={() => setOpenModalDeletApi(true)}>Deletar</button>
                {openModalDeletApi ? <ModalConfirmDelete setOpenModalDeletApi={setOpenModalDeletApi} setOpenModalEdit={setOpenModalEdit}/> : null}

            </div>
        </StyledFormEditApi>
    )
}