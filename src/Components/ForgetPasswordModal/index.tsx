import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../Services";
import { ContainerForgetPassword, ContentForgetPassword } from "./style";

interface iModalForgetPassword {
  closeModalToken: () => void;
}

interface iRecoveryPassword {
  email: string;
}
export const ForgetPasswordModal = ({
  closeModalToken,
}: iModalForgetPassword) => {
  const { register, handleSubmit } = useForm<iRecoveryPassword>();

  const sendEmailRecoveryPassword = async (data: iRecoveryPassword) => {
    try {
      const response = await api.post("/sendemail", data);
      if (response.status === 200) {
        toast.success(
          "Email com um link para a recuperação de email foi enviado"
        );
      }
    } catch (error) {
      toast.error("Email invalido!");
    }
  };
  const onSubmitRecovery: SubmitHandler<iRecoveryPassword> = (data) => {
    sendEmailRecoveryPassword(data);
  };

  return (
    <ContainerForgetPassword>
      <ContentForgetPassword>
        <div>
          <span>Esqueceu a Senha?</span>
          <p onClick={() => closeModalToken()}>x</p>
        </div>
        <fieldset>
          <label>Coloque seu email abaixo para redefinir a senha!</label>
          <input
            type="email"
            placeholder="Coloque seu Email aqui..."
            {...register("email")}
          />
        </fieldset>
        <button type="submit" onClick={handleSubmit(onSubmitRecovery)}>
          Enviar
        </button>
      </ContentForgetPassword>
    </ContainerForgetPassword>
  );
};
