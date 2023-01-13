export interface IFormRegisterApiProps {
    setOpenModalRegister: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface IRegisterApiValues {
    name: string,
    link: string,
    description: string,
}