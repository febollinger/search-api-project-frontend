import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/image/logomarca.png";
import { ForgetPasswordModal } from "../../Components/ForgetPasswordModal";
import { TokenOrRecover } from "../../Components/ForgetPasswordModal/tokenOrRecover";
import { Input } from "../../Components/Input";
import { AuthContext } from "../../Contexts/AuthContext";
import { StyledErrorForm } from "../../Styles/StyledErrorForm";
import { SchemaLogin } from "./SchemaLogin";
import { StyledLogin } from "./styled";

interface iLoginProps {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { onSubmitLogin, loading } = useContext(AuthContext);
  const [forgetPasswordOpen, setForgetPasswordOpen] = useState<false | true>(
    false
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginProps>({
    resolver: yupResolver(SchemaLogin),
  });

  const closeModalForgetPassword = () => {
    setForgetPasswordOpen(false);
  };

  return (
    <StyledLogin>
      <header>
        <img src={logo} alt="Logo Search API" />
      </header>
      {forgetPasswordOpen && (
        <TokenOrRecover closeModalForgetPassword={closeModalForgetPassword} />
      )}
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <div>
          <h2>Login</h2>
          <Link to={"/"}>Voltar</Link>
        </div>
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
        <h6 onClick={() => setForgetPasswordOpen(true)}>Esqueceu a senha?</h6>

        <button type="submit">{loading ? "Carregando..." : "Login"}</button>
        <span>Não tem conta ? Registre-se!</span>
        <Link to={"/register"}>Registrar</Link>
      </form>
    </StyledLogin>
  );
};
