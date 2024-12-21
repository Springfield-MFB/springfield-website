import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface FormInputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
        error={error}
      />
    </div>
  );
};

export default FormInput;
