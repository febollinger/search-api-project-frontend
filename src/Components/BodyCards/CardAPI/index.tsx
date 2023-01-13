import { StyledCardAPI } from "./styled";
import { MdError } from "react-icons/md";
import { useContext } from "react";
import { AdminContext } from "../../../Contexts/AdminContext";

interface iPropsCard {
  setOpenModalComment: React.Dispatch<React.SetStateAction<boolean>>;
  itens: {
    checked: boolean;
    description: string;
    img: string;
    link: string;
    name: string;
    onAir: boolean;
    userId: string;
    uuid: string;
  };
  key: number;
}

export const CardAPI = ({ itens, setOpenModalComment }: iPropsCard) => {
  const { getProfileRequest } = useContext(AdminContext);

  const { setPegaIDCard, setPegaInfoCard, listCommentsRequestAdmin } =
    useContext(AdminContext);

  const uuidUser = localStorage.getItem("@USERID:");

  const OpenModalIDVerUser = async () => {
    setOpenModalComment(true);
    setPegaIDCard(itens.uuid);
    setPegaInfoCard(itens);
    await listCommentsRequestAdmin(itens.uuid);
    await getProfileRequest(uuidUser!);
  };

  return (
    <StyledCardAPI>
      <div className="divHeaderCard">
        <h2>{itens.name}</h2>
      </div>
      <div className="divImg">
        <img src={itens.img} alt="Imagem da API" />
      </div>
      <div className="divStatus">
        <div className="divText">
          <p className={itens.checked ? "pVerification" : "pWorking"}>
            <MdError /> {itens.checked ? "Verificada" : "Não Verificada"}
          </p>
          <p className={itens.onAir ? "pVerification" : "pWorking"}>
            <MdError /> {itens.onAir ? "No Ar" : "Fora do ar"}
          </p>
        </div>
        <div className="divFavorit"></div>
      </div>
      <div className="divFooterCard">
        <button className="BTNBlue" onClick={() => OpenModalIDVerUser()}>
          Ver API
        </button>
      </div>
    </StyledCardAPI>
  );
};
