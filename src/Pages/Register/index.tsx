import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/image/logomarca.png";
import { Input } from "../../Components/Input";
import { StyledRegister } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaRegister } from "./SchemaRegister";
import { StyledErrorForm } from "../../Styles/StyledErrorForm";
import { api } from "../../Services";
import { toast } from "react-toastify";

interface iRegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface iData {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export const RegisterPage = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterProps>({
    resolver: yupResolver(SchemaRegister),
  });

  const navigate = useNavigate();

  const onSubmitRegister = async (data: iData) => {
    delete data.confirmPassword;
    const objectData = { ...data, isAdmin: false };
    try {
      setLoading(true);
      const response = await api.post("users", objectData);
      if (response.status === 201) {
        toast.success("Conta criada com sucesso!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledRegister>
      <header>
        <img src={logo} alt="Logo Search API" />
      </header>
      <form onSubmit={handleSubmit(onSubmitRegister)}>
        <div>
          <h2>Registrar</h2>
          <Link to={"/"}>Voltar</Link>
        </div>
        <Input
          id={"name"}
          type={"text"}
          placeholder={"Digite seu nome aqui"}
          register={register("name")}
          label={"Nome:"}
        />
        {errors.name && (
          <StyledErrorForm>{errors.name.message}</StyledErrorForm>
        )}
        <Input
          id={"email"}
          type={"email"}
          placeholder={"Digite seu email aqui"}
          register={register("email")}
          label={"Email:"}
        />
        {errors.email && (
          <StyledErrorForm>{errors.email.message}</StyledErrorForm>
        )}
        <Input
          id={"password"}
          type={"password"}
          placeholder={"Digite sua senha aqui"}
          register={register("password")}
          label={"Senha:"}
        />
        {errors.password && (
          <StyledErrorForm>{errors.password.message}</StyledErrorForm>
        )}
        <Input
          id={"confirmPassword"}
          type={"password"}
          placeholder={"Confirme sua senha aqui"}
          register={register("confirmPassword")}
          label={"Confirmar Senha:"}
        />
        {errors.confirmPassword && (
          <StyledErrorForm>{errors.confirmPassword.message}</StyledErrorForm>
        )}
        <button type="submit">
          {loading ? "Carregando..." : "Criar conta"}
        </button>
        <span>Já tem conta ? Faça login!</span>
        <Link to={"/login"}>Fazer Login</Link>
      </form>
    </StyledRegister>
  );
};
