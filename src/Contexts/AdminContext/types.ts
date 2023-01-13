import React from "react";
import { IRegisterApiValues } from "../../Components/FormRegisterApi/types";

export interface IAdminProviderProps {
  children: React.ReactNode;
}

export interface IRegisterApiResponse {
  userId: string;
  name: string;
  description: string;
  link: string;
  uuid: string;
}

export interface IEditApiResponse extends IRegisterApiResponse {
  img: string;
}

export interface IListCommentsResponse {
  message: string;
  userId: string;
  apiListId: string;
  uuid: number;
  userName: string;
}

export interface ICreateCommentData {
    message: string,
    userId: string,
    userName: string,
}

export interface ICreateCommentResponse {
  message: string;
  userId: string;
  apiListId: string;
  uuid: number;
}

export interface IListFavoritesResponse {
  name: string;
  description: string;
  link: string;
  img: string;
  uuid: number;
}

export interface ISetFavoriteApiData {
  name: string;
  description: string;
  link: string;
  img: string;
}

export interface ISetFavoriteApiResponse {
  name: string;
  description: string;
  link: string;
  img: string;
  apiListId: string;
  uuid: number;
  checked: boolean;
  onAir: boolean;

}

export interface iItens {
  checked: boolean;
  description: string;
  img: string;
  link: string;
  name: string;
  onAir: boolean;
  userId: string;
  uuid: string;
  favorite?: boolean;
}

export interface IEditApiValues {
  name: string;
  link: string;
  description: string;
  img?: string;
  checked: boolean;
  onAir: boolean;
}

export interface iCommentFilter {
  message: string;
  userId: string;
  userName: string;
  apiListId: string;
  uuid: number;
}

export interface IGetProfileResponse {
    email: string,
    name: string,
    isAdmin: boolean,
    uuid: string,
    apiList: any[]
}
export interface iInfoUser{
  email: string,
  isAdmin: boolean,
  name: string,
  password?: string,
  uuid: string,
}

export interface IAdminContext {
    registerApiRequestAdmin: (data: IRegisterApiValues) => Promise<void>,
    editApiRequest: (data: IEditApiValues, uuid: string) => Promise<void>
    deleteApiRequest: (uuid: string) => Promise<void>,
    listCommentsRequestAdmin: (uuid: string) => Promise<void>,
    createCommentRequestAdmin: (data: ICreateCommentData, uuid: string) => Promise<void>,
    getProfileRequest: (uuid: string) => Promise<void>,
    deleteCommentAdmin: (uuid: number) => Promise<void>, 
    
    apilist: iItens[],

    setPegaIDCard: React.Dispatch<React.SetStateAction<string>>,
    PegaIDCard: string,

    commentFilter: iCommentFilter[],

    setPegaInfoCard: React.Dispatch<React.SetStateAction<iItens | undefined>>,
    PegaInfoCard: iItens | undefined,
    
    filterApi: boolean | null,
    FilterApiRender: (value: boolean | null) => void

    apiFavorites: iItens[];
    setApiFavorites: React.Dispatch<React.SetStateAction<iItens[]>>;

    infoUserName: string,
  
     infoUser: iInfoUser | undefined

}

