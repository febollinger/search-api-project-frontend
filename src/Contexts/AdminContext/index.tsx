import { createContext, useEffect, useState } from "react";
import { api } from "../../Services";
import { iItens, IAdminContext, IAdminProviderProps, ICreateCommentData, ICreateCommentResponse, IEditApiResponse, IListCommentsResponse, IRegisterApiResponse, IEditApiValues, iCommentFilter, IGetProfileResponse, iInfoUser } from "./types";
import logo from "../../Assets/image/logo Search API 1.png";
import { IRegisterApiValues } from "../../Components/FormRegisterApi/types";
import { toast } from "react-toastify";


export const AdminContext = createContext({} as IAdminContext);

export const AdminProvider = ({children}: IAdminProviderProps) => {
    const token = localStorage.getItem("@TOKEN:");
    const userID = localStorage.getItem("@USERID:");

    const [ apiFavorites, setApiFavorites ] = useState([] as iItens[]);

    const [ filterApi, setfilterApi] = useState(null);
    const FilterApiRender = (name: any) => {
        setfilterApi(name)
    }
    

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

    const registerApiRequestAdmin = async (data:IRegisterApiValues) => {
        if (userID) {
            const newData = {
                ...data,
                img: logo,
                userId: userID,
                checked: false,
                onAir: false, 
                favorite: false,
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

    const [PegaIDCard, setPegaIDCard] = useState ("" as string)
    const [PegaInfoCard, setPegaInfoCard] = useState <iItens>()
    const editApiRequest = async (data:IEditApiValues, uuid:string) => {
        try {
            await api.patch<IEditApiResponse>(`/apiList/${uuid}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            Relod()
            toast.success("API atualizada com sucesso!");
        } catch (error) {
            toast.error("Algo deu errado. Tente novamente");
        }
    }

    const deleteApiRequest = async (uuid:string) => {
        try {
            await api.delete(`/apiList/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            Relod()
            toast.success("API deletada com sucesso!")
        } catch (error) {
            toast.error("Algo deu errado. Tente novamente");
        }
    }

    const [commentFilter, setCommentFilter] = useState ([] as iCommentFilter[])
    const listCommentsRequestAdmin = async (uuid: string) => {
        try {
            const response = await api.get<IListCommentsResponse[]>("/comments", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            const filtraComment = response.data.filter((elen: IListCommentsResponse) => {
                return elen.apiListId === uuid
            })
            setCommentFilter(filtraComment);
           
        } catch (error) {
            toast.error("Algo deu errado. Tente novamente");
        }
    }
    
    const createCommentRequestAdmin = async (data:ICreateCommentData, uuid:string) => {
        try {
            await api.post<ICreateCommentResponse>(`/apiList/${uuid}/comments`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            toast.error("Algo deu errado. Tente novamente");
        }
    }

    const [infoUserName, setInfoUserName] = useState ("")
    const [infoUser, setInfoUser] = useState <iInfoUser | undefined>()
    const getProfileRequest = async (uuidUser: string) => {
        const token = localStorage.getItem('@TOKEN:')
        try {
            const response = await api.get<IGetProfileResponse>(`/users/${uuidUser}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setInfoUserName(response.data.name);
            setInfoUser(response.data);
        } catch (error) {
            toast.error("Algo deu errado. Tente novamente");
        }
    }
    
    const deleteCommentAdmin = async (uuid:number) => {
        try {
            await api.delete(`/comments/${uuid}`);
        } catch (error) {
            toast.error("Algo deu errado. Tente novamente");
        }
    }

 
    return (
        <AdminContext.Provider value={{
            registerApiRequestAdmin,
            editApiRequest,
            deleteApiRequest,
            listCommentsRequestAdmin,
            createCommentRequestAdmin,
            getProfileRequest,
            deleteCommentAdmin,

            apilist,

            setPegaIDCard,
            PegaIDCard,

            commentFilter,

            setPegaInfoCard,
            PegaInfoCard,

            filterApi,
            FilterApiRender,

            apiFavorites,
            setApiFavorites,

            infoUserName,

            infoUser,

            }}>
            {children}
        </AdminContext.Provider>
    );
};