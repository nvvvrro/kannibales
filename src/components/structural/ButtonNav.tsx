import React from "react";

interface Props {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const ButtonNav = ({ text, className, onClick, disabled }: Props) => {
  return (
    <button
      type="button"
      className={`btn-nav ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
