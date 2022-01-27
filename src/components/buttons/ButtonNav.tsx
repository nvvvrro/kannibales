import React from "react";

interface Props {
  title: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const ButtonNav = ({ title, className, onClick, disabled }: Props) => {
  return (
    <button
      type="button"
      className={`btn-nav ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
