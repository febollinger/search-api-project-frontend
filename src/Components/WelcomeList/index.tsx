import DefaultLogo from "../../Assets/image/logo Search API 1.png";
import { AiFillCheckCircle } from "react-icons/ai";

export interface iItens02 {
  itens: {
    checked: boolean;
    description: string;
    favorite: boolean,
    img: string;
    link: string;
    name: string;
    onAir: boolean;
    userId: string;
    uuid: string;
  }
};

export const ListApi = ({ itens }: iItens02) => {
  return (
    <li>
      <img src={DefaultLogo} alt={itens.name} />
      <h4>{itens.name}</h4>
      <p className="pVerification"><AiFillCheckCircle /> Verificado</p>
    </li>
  );
};
