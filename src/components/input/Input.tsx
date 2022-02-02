import { FC } from "react";
import classNames from "classnames";
import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return <input className={classNames("input", className)} {...props} />;
};
