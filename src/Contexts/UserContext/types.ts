import React from "react";
import { IRegisterApiValues } from "../../Components/FormRegisterApi/types";

export interface IUserProviderProps {
    children: React.ReactNode,
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
  }

  export interface iCommentFilter {
    message: string;
    userId: string;
    userName: string;
    apiListId: string;
    uuid: number;
  }

  export interface ICreateCommentData {
      message: string,
      userId: string,
  }


export interface IRegisterApiResponse {
    userId: string,
    name: string,
    description: string,
    link: string,
    uuid: string,
}

export interface IListCommentsResponse {
    message: string,
    userId: string,
    apiListId: string,
    uuid: number,
}


export interface ICreateCommentResponse {
    message: string,
    userId: string, 
    apiListId: string,
    uuid: number,
}

export interface IUserContext {
    apilist: iItens[],

    registerApiRequestUser: (data: IRegisterApiValues) => Promise<void>,
    createCommentRequestUser: (data: ICreateCommentData, uuid: string) => Promise<void>,
    deleteCommentUser: (uuid:string) => Promise<void>,

}