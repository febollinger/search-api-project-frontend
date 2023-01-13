import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { api } from "../../Services";
import { ContainerForgetPassword, ContentForgetPassword } from "./style";

interface iModalRecover {
  closeModalRecover: () => void;
}
interface iRecoveryPassword {
  token: string;
  email: string;
  newPassword: string;
}
export const RecoveryModal = ({ closeModalRecover }: iModalRecover) => {
  const { register, handleSubmit } = useForm<iRecoveryPassword>();

  const recoveryPassword = async (data: iRecoveryPassword) => {
    try {
      const response = await api.patch("/updatepassword", data);
      if (response.status === 200) {
        toast.success("Senha Alterada com sucesso!");
      }
    } catch (error) {
      toast.error("Algo deu errado e senha não pode ser atualizada!");
    }
  };

  const onSubmitRecovery: SubmitHandler<iRecoveryPassword> = (data) => {
    console.log(data);
    recoveryPassword(data);
  };
  return (
    <ContainerForgetPassword>
      <ContentForgetPassword>
        <div>
          <span>Esqueceu a Senha?</span>
          <p onClick={() => closeModalRecover()}>x</p>
        </div>
        <fieldset>
          <label>Digite o Token que foi enviado pelo email!</label>
          <input type="text" placeholder="Token..." {...register("token")} />
        </fieldset>
        <fieldset>
          <label>Digite a nova senha!</label>
          <input
            type="password"
            placeholder="Nova senha..."
            {...register("newPassword")}
          />
        </fieldset>
        <button onClick={handleSubmit(onSubmitRecovery)}>Enviar</button>
      </ContentForgetPassword>
    </ContainerForgetPassword>
  );
};
