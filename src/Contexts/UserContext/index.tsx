import { createContext, useEffect, useState } from "react";
import { api } from "../../Services";
import { ICreateCommentData, ICreateCommentResponse, iItens, IRegisterApiResponse, IUserContext, IUserProviderProps } from "./types";
import logo from "../../Assets/image/logo Search API 1.png";
import { toast } from "react-toastify";
import { IRegisterApiValues } from "../../Components/FormRegisterApi/types";


export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({children}: IUserProviderProps) => {
    const token = localStorage.getItem("@TOKEN:");
    const userID = localStorage.getItem("@USERID:")

       const Relod = async () => {
        try {
            const response = await api.get("apiList");
            setApiList(response.data);
        } catch (error) {
            toast.error("Algo deu errado. Tente novamente");
        }
    };

    const [apilist, setApiList] = useState ([] as iItens[]);
    useEffect (() => {
        const getApiList = async () => {
            try {
                const response = await api.get("apiList");
                setApiList(response.data);
            
            } catch (error) {
                toast.error("Algo deu errado. Tente novamente");
            }
        };
        getApiList();
    }, []);

    const registerApiRequestUser = async (data:IRegisterApiValues) => {
        if (userID) {
            const newData = {
                ...data,
                img: logo,
                userId: userID,
                checked: false,
                onAir: false,
            }
            try {
                await api.post<IRegisterApiResponse>("/apiList", newData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                Relod()
                toast.success("API cadastrada com sucesso!");
            } catch (error) {
                toast.error("Algo deu errado. Tente novamente");
            }
        }
    }

    const createCommentRequestUser = async (data:ICreateCommentData, uuid:string) => {
        try {
            await api.post<ICreateCommentResponse>(`/apiList/${uuid}/comments`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
        } catch (error) {
            toast.error("Algo deu errado. Tente novamente");
        }
    }

    const deleteCommentUser = async (uuid:string) => {
        try {
            await api.delete(`/comments/${uuid}`);
        } catch (error) {
            toast.error("Algo deu errado. Tente novamente");
        }
    }


    return (
        <UserContext.Provider value={{
            apilist,
            registerApiRequestUser,
           
            createCommentRequestUser,
            deleteCommentUser,

        }}>
            {children}
        </UserContext.Provider>
    )
}