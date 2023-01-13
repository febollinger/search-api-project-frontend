import * as yup from "yup";

export const SchemaRegister = yup.object().shape({
  name: yup
    .string()
    .min(3, "Seu nome deve ter no minimo 3 caracteres")
    .required("Nome obrigatório!"),
  email: yup
    .string()
    .email("Digite um email valido!")
    .required("Email obrigatório!"),
  password: yup
    .string()
    .min(8, "Sua senha deve ter no minimo 8 digitos")
    .matches(
      /(?=.*[A-Za-z])/,
      "Sua senha deve conter no minimo uma letra maiuscula"
    )

    .matches(/(?=.*[0-9])/, "Sua senha deve conter ao menos um numero!")
    .matches(
      /(?=.*[$*&@#])/,
      "Sua senha deve conter ao menos um caractere especial ( $ * & @ # )"

    )
    .required("Senha é obrigatória!"),
  confirmPassword: yup
    .string()
    .required("Confirmar senha é obrigatório!")
    .oneOf([yup.ref("password")], "Senhas não conferem!"),
});
