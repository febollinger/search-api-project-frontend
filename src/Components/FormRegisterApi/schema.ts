import * as yup from "yup";

export const RegisterApiSchema = yup.object().shape({
    name: yup.string().required("O nome da API é obrigatório"),
    link: yup.string().required("O link da API é obrigatório").url('Digite uma Url'),
    description: yup.string().required("A descrição da API é obrigatória"),
})