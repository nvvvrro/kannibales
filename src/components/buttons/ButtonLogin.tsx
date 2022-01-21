import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { GoogleIcon } from "images";

interface Props {
  text?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const ButtonLogin = ({ text, className, onClick, disabled }: Props) => {
  const handleSession = () => signIn();
  return (
    <button
      type="button"
      className={`hover:bg-primary-contrast p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-btn-main focus:ring-btn-light`}
      onClick={onClick || handleSession}
      disabled={disabled}
    >
      <GoogleIcon />
    </button>
  );
};
