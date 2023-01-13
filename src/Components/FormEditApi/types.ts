export interface IEditApiValues {
    name: string,
    link: string,
    description: string,
    img?: string,
    checked: boolean,
    onAir: boolean,
}

export interface IFormEditApiProps {
    setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>,
}