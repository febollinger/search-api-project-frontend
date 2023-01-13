import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../Services";


interface iAuthContext {
  children: React.ReactNode;
}

interface iData {
  email: string;
  password: string;
}

interface iUser {
  email: string;
  isAdmin: boolean;
  name: string;
  uuid: string;
  password?: string;
}

interface iAuthProviderProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitLogin: (data: iData) => Promise<void>;
  user: iUser | undefined;
  time: boolean;
}

export const AuthContext = createContext({} as iAuthProviderProps);

export const AuthProvider = ({ children }: iAuthContext) => {

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState<iUser>();
  
  const [time, setTime] = useState(true);


  const navigate = useNavigate();

    const onSubmitLogin = async (data: iData) => {
      try {
        setLoading(true);
          const response = await api.post("login", {...data});

          localStorage.setItem("@TOKEN:", response.data.accessToken);
          localStorage.setItem("@USERID:", response.data.user.uuid);

          setUser(response.data.user);

          api.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken} `
          
          toast.success("Login feito com sucesso");
          
          setTimeout(() => {
            navigate("/home");
          }, 2000);
          
          setTime(false)
      } catch (error) {
        toast.error("Ops! Algo deu errado");

      } finally {
        setLoading(false);
      }
  };
    
  
  const token = localStorage.getItem('@TOKEN:')
  const idUser02 = localStorage.getItem("@USERID:")
  
  useEffect(() => {

    if (!token) {
      setTime(false)
      return
    }

    const getProfile = async () =>{
      try{

        api.defaults.headers.common.Authorization = `Bearer ${token} `
  
          const resposta = await api.get(`/users/${idUser02}`)

          setUser(resposta.data)
  
            navigate('/home')
            setLoading(false)
              
            setTime(false)
     
          }catch{
            setTime(false)
            setLoading(false)
          } finally {
            setTime(false)
            setLoading(false)
          }
      }
      if(token){
        getProfile()
      }
  }, [token])



  return (
    <AuthContext.Provider value={{ onSubmitLogin, loading, setLoading, user, time }}>
      {children}
    </AuthContext.Provider>
  );
};
