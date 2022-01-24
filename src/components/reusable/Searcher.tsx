import React, { FC } from "react";
import { TagIcon, LupaIcon } from "images";
import Image from "next/image";

interface Props {
  className?: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  message?: string;
  errorMessage?: string;
  placeholder?: string;
  max?: number;
  searchButtonText?: string | React.ReactNode;
  type?: string;
  previousValue?: string;
  disabled?: boolean;
  buttonText?: string;
}

export const Searcher: FC<Props> = ({
  className,
  id,
  name,
  onChange,
  label,
  errorMessage,
  placeholder,
  max,
  type,
  previousValue,
  disabled,
  buttonText,
}) => {
  return (
    <div id={id} className={`w-full max-w-7xl ${className || ""}`}>
      {label && (
        <label
          className="block text-tx-current text-sm font-bold mb-2"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div
        className={`w-full max-w-lg mx-auto flex gap-0 rounded-md overflow-hidden ${
          disabled ? "ring-primary-dark ring-2" : "ring-primary-contrast ring-1"
        } mb-2`}
      >
        <input
          className="w-full appearance-none relative block px-4 py-2 border border-tx-main placeholder-tx-ph text-sm leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 mobile:text-base mobile:leading-4"
          name={name}
          type={"text" || type}
          onChange={onChange}
          defaultValue={previousValue}
          maxLength={max}
          placeholder={"Buscar... ;)" || placeholder}
        />
        <button
          disabled={disabled}
          className={`appearance-none text-tx-light ${
            disabled
              ? "bg-primary-dark hover:bg-btn-dark cursor-not-allowed"
              : "bg-primary-main hover:bg-btn-main"
          }`}
        >
          {buttonText || (
            <div className="hidden appearance-none mobile:block mobile:ml-1 mr-1">
              <LupaIcon width={30} height={30} />
            </div>
          )}
        </button>
      </div>
      <p className="text-tx-error text-xs italic">{errorMessage ?? ""}</p>
    </div>
  );
};
