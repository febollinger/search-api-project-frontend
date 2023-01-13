import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface IInputProps {
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  label: string;
  error?: FieldError;
}

export const Input = ({
  id,
  type,
  placeholder, 
  register,
  label,
  error,
}: IInputProps) => {
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} className="input-component" />
      {error && <p className="style-error">{error.message}</p>}
    </fieldset>
  );
};
