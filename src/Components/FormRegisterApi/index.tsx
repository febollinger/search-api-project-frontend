import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup"
import { IFormRegisterApiProps, IRegisterApiValues } from "./types";
import { RegisterApiSchema } from "./schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledFormRegisterApi } from "./style";
import { useContext } from "react";
import { AdminContext } from "../../Contexts/AdminContext";

export const FormRegisterApi = ({setOpenModalRegister}:IFormRegisterApiProps) => {
    const { registerApiRequestAdmin } = useContext(AdminContext);

    const { register, handleSubmit, formState: {errors}, reset } = useForm<IRegisterApiValues>({
        mode: "onBlur",
        resolver: yupResolver(RegisterApiSchema)
    });

    const submit: SubmitHandler<IRegisterApiValues> = async (data) => {
        await registerApiRequestAdmin(data);
        reset();
        setOpenModalRegister(false);
    }

    return (
        <StyledFormRegisterApi noValidate onSubmit={handleSubmit(submit)}>
            <Input id="name" type="text" placeholder="Digite o nome da API aqui..." register={register("name")} label="Nome da API:" error={errors.name} />

            <Input id="link" type="text" placeholder="Digite o link da API aqui..." register={register("link")} label="Link da API:" error={errors.link} />

            <label htmlFor="description">Descrição da API:</label>
            <textarea id="description" placeholder="Digite a descrição da API aqui..." {...register("description")}></textarea>
            {errors.description && (<p className="style-error" aria-label="error">{errors.description.message}</p>)}

            <div className="container-btn-submit">
                <button type="submit">Enviar</button>
            </div>

            <div className="container-message">
                <p className="message-api">Sua API será avaliada por um de nossos profissionais, e caso legítima, será adicionada a lista de verificados.</p>
            </div>

        </StyledFormRegisterApi>
    )
}