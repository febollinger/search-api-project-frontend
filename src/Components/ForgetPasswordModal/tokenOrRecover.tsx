import { ForgetPasswordModal } from "../ForgetPasswordModal";
import { useState } from "react";
import { ContainerForgetPassword, ContentForgetPassword } from "./style";
import { RecoveryModal } from "./recover";

interface iModalForgetPassword {
  closeModalForgetPassword: () => void;
}

export const TokenOrRecover = ({
  closeModalForgetPassword,
}: iModalForgetPassword) => {
  const [sendTokenModal, setSendTokenModal] = useState<false | true>(false);
  const [recoverModal, setRecoverModal] = useState<false | true>(false);

  const closeModalToken = () => {
    setSendTokenModal(false);
  };
  const closeModalRecover = () => {
    setRecoverModal(false);
  };
  return (
    <ContainerForgetPassword>
      <ContentForgetPassword>
        <div>
          <span>Esqueceu a Senha?</span>
          <p onClick={() => closeModalForgetPassword()}>x</p>
        </div>
        <p onClick={() => setRecoverModal(true)}>Já tem o Token? Clique aqui</p>

        <p onClick={() => setSendTokenModal(true)}>
          Clique aqui para receber o token
        </p>
      </ContentForgetPassword>
      {sendTokenModal && (
        <ForgetPasswordModal closeModalToken={closeModalToken} />
      )}
      {recoverModal && <RecoveryModal closeModalRecover={closeModalRecover} />}
    </ContainerForgetPassword>
  );
};
