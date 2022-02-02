import { FC } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import type { MouseEventHandler } from "react";
import type { HTMLMotionProps } from "framer-motion";

type ButtonType = "item" | "primary" | "secondary" | "outline" | "native";

type ButtonSize = "small" | "large";

export interface Props extends HTMLMotionProps<"button"> {
  children?: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
  title?: string;
  kind?: ButtonType;
  size?: ButtonSize;
  selected?: boolean;
  disabled?: boolean;
  icon?: any;
}
export const Button: FC<Props> = ({
  children,
  className = "",
  onClick,
  title,
  kind = "native",
  size,
  selected,
  disabled,
  icon,
  whileHover,
  whileTap,
  ...props
}) => {
  const cn = classNames(className, "btn", {
    "btn-primary": kind === "primary",
    "btn-secondary": kind === "secondary",
    "btn-outline": kind === "outline",
    "btn-item": kind === "item",
    "btn-small": size === "small",
    "btn-large": size === "large",
    "btn-selected": selected,
  });

  const hasEfect = kind === "primary" || kind === "secondary";

  return (
    <motion.button
      type="button"
      title={title}
      className={`${
        kind === "native" ? classNames("btn-native", className) : cn
      } group`}
      onClick={onClick}
      disabled={disabled}
      {...props}
      whileHover={whileHover || { scale: 1.02 }}
      whileTap={whileTap || { scale: 0.8 }}
    >
      <span className={hasEfect ? "btn-effect-top" : ""} />
      <span className={hasEfect ? "btn-effect-bottom" : ""} />
      <span className={hasEfect ? "relative" : ""}>{title}</span>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </motion.button>
  );
};
