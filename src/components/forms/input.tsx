import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  type,
  placeholder,
  register,
  error,
  className,
  onChange,
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
        className={className}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
