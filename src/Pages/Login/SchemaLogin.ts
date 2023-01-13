import * as yup from "yup";

export const SchemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email valido!")
    .required("Email obrigatório!"),
  password: yup.string().required("Digite uma senha valida!"),
});
