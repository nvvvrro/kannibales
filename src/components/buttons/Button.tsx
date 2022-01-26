import type { HTMLProps } from "react";
import classNames from "classnames";

type ButtonType = "item" | "primary" | "secondary" | "outline" | "native";

type ButtonSize = "small" | "large";

interface Props extends Omit<HTMLProps<HTMLButtonElement>, "size"> {
  children?: React.ReactNode;
  className?: string;
  onCLick?: () => void;
  title?: string;
  type?: ButtonType;
  size?: ButtonSize;
  selected?: boolean;
  disabled?: boolean;
  icon?: any;
}
export const Button = ({
  children,
  className,
  onCLick,
  title,
  type = "native",
  size,
  selected,
  disabled,
  icon,
  ...props
}: Props) => {
  const cn = classNames(className, "btn", {
    "btn-primary": type === "primary",
    "btn-secondary": type === "secondary",
    "btn-outline": type === "outline",
    "btn-item": type === "item",
    "btn-small": size === "small",
    "btn-large": size === "large",
    "btn-selected": selected,
  });

  const hasEfect = type === "primary" || type === "secondary";

  return (
    <button
      type="button"
      title={title}
      className={`${
        type === "native" ? classNames("btn-native", className) : cn
      } group`}
      onClick={onCLick}
      disabled={disabled}
      {...props}
    >
      <span className={hasEfect ? "btn-effect-top" : ""} />
      <span className={hasEfect ? "btn-effect-bottom" : ""} />
      <span className={hasEfect ? "relative" : ""}>{title}</span>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};
