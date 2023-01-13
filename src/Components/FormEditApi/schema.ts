import * as yup from "yup";

export const EditApiSchema = yup.object().shape({
    name: yup.string().required("O nome da API é obrigatório"),
    link: yup.string().required("O link da API é obrigatório"),
    description: yup.string().required("A descrição da API é obrigatória"),
    img: yup.string(), 
})