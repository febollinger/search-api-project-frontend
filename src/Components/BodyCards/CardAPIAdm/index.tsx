import { StyledCardAPIAmd } from "./styled";
import { MdError } from "react-icons/md";
import { useContext } from "react";
import { AdminContext } from "../../../Contexts/AdminContext";

interface iPropsCard {
  setOpenModalComment: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  itens: {
    checked: boolean;
    description: string;
    img: string;
    link: string;
    name: string;
    onAir: boolean;
    userId: string;
    uuid: string;
    favorite?:boolean;
  };
  key: number;
}


export const CardAPIAdm = ({itens, setOpenModalComment, setOpenModalEdit, }: iPropsCard) => {
  
  const { setPegaIDCard, setPegaInfoCard, listCommentsRequestAdmin, getProfileRequest} = useContext(AdminContext);

  const OpenModalIDEdit = () => {
    setOpenModalEdit(true);
    setPegaIDCard(itens.uuid);
    setPegaInfoCard(itens);
  };
  
  const uuidUser = localStorage.getItem("@USERID:");

  const OpenModalIDVer =  async () => {
    setOpenModalComment(true)
    setPegaIDCard(itens.uuid)
    setPegaInfoCard(itens)
    await listCommentsRequestAdmin(itens.uuid)
    await getProfileRequest(uuidUser!)
  }
   
 
  return (
    <StyledCardAPIAmd id={itens.uuid}>
      <div className="divHeaderCard">
        <h2>{itens.name}</h2>
      </div>
      <div className="divImg">
        <img src={itens.img} alt="Imagem da API" />
      </div>
      <div className="divStatus">
        <div className="divText">
          <p className={itens.checked ? "pVerification" : "pWorking"}><MdError /> {itens.checked ? "Verificada" : "Não Verificada"}</p>
          <p className={itens.onAir ? "pVerification" : "pWorking"}><MdError /> {itens.onAir ? "No Ar" : "Fora do ar"}</p>
        </div>
        <div className="divFavorit">
        </div>
      </div>
      <div className="divFooterCard">
        <button className="BTNBlue" onClick={() => OpenModalIDVer()} id={itens.uuid}> Ver API </button>
        <button className="BTNRed" onClick={() => { OpenModalIDEdit() }} id={itens.uuid}> Editar </button>
      </div>
    </StyledCardAPIAmd>
  );
};
