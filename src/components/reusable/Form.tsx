import { FC } from "react";

export interface FormProps {
  children: React.ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onReset?: (e: React.FormEvent<HTMLFormElement>) => void;
}
export const Form: FC<FormProps> = ({
  children,
  className = "",
  onSubmit,
  onReset,
  ...props
}) => {
  return (
    <form
      className={`${className} mx-auto rounded-lg shadow-md overflow-hidden p-6 space-y-10`}
      onSubmit={onSubmit}
      onReset={onReset}
      {...props}
    >
      {children}
    </form>
  );
};
