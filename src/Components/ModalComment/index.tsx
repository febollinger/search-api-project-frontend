import { StyledModalComment } from "./styled";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState, useContext } from "react";
import { ModalWriteComment } from "../ModalWriteComment";
import { AdminContext } from "../../Contexts/AdminContext";

interface iPropsCard {
  setOpenModalComment: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalComment = ({ setOpenModalComment }: iPropsCard) => {
  const {
    commentFilter,
    deleteCommentAdmin,
    PegaInfoCard,
    PegaIDCard,
    listCommentsRequestAdmin,
    infoUser,
  } = useContext(AdminContext);

  const [OpenModalWrite, setOpenModalWrite] = useState(false);

  const deletCommentRelod = async (uuid: any) => {
    await deleteCommentAdmin(uuid);
    await listCommentsRequestAdmin(PegaIDCard);
  };

  return (
    <StyledModalComment>
      <div className="divModal">
        <div className="divHeaderModal">
          <h1>{PegaInfoCard?.name}</h1>
          <button onClick={() => setOpenModalComment(false)}>X</button>
        </div>
        <div className="divInfoApi">
          <img src={PegaInfoCard?.img} alt="Imagem da API" />
          <div className="divSpan">
            <span>{PegaInfoCard?.description}</span>
          </div>
        </div>

        <div className="divComment">
          {commentFilter.length === 0 ? (
            <p className="loddingComment">
              Deixe seu um comentário sobre esta API
            </p>
          ) : (
            commentFilter.map((itens, index) => {
              return (
                <div className="Comment" key={index}>
                  <div className="infoUser">
                    <p>{itens.userName}</p>

                    {infoUser?.isAdmin ? (
                      <button onClick={() => deletCommentRelod(itens.uuid)}>
                        <RiDeleteBinLine />
                      </button>
                    ) : itens.userId === infoUser?.uuid ? (
                      <button onClick={() => deletCommentRelod(itens.uuid)}>
                        <RiDeleteBinLine />
                      </button>
                    ) : null}
                  </div>
                  <div className="commentUser">
                    <span>{itens.message}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="divBTN">
          <button className="BtnBlue" onClick={() => setOpenModalWrite(true)}>
            Adicionar Comentario
          </button>
          {OpenModalWrite ? (
            <ModalWriteComment setOpenModalWrite={setOpenModalWrite} />
          ) : null}

          <a className="BtnRed" target="blank" href={PegaInfoCard!.link}>
            Documentação
          </a>
        </div>
      </div>
    </StyledModalComment>
  );
};
