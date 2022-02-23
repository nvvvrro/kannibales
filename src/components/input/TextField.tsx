import { FC } from "react";
import { Input } from "components";
import type { InputProps } from "components";

export interface TextFieldProps extends InputProps {
  label: string;
}

export const TextField: FC<TextFieldProps> = ({
  className = "",
  label = "Username",
  name,
  ...props
}) => {
  return (
    <div className={`${className} text-field`}>
      <Input
        name={name}
        placeholder=" "
        className="input-field"
        {...props}
      />
      <label className="label">{label}</label>
    </div>
  );
};
