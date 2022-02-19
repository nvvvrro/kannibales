import { FC, useCallback, useState } from "react";
import { Button, Input, Modal, SocialNetworkButtons } from "components";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import type { ModalProps } from "components";

export const SignInModal: FC<ModalProps> = ({ show, onClose }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToogleVisblePassword = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  return (
    <Modal
      show={show}
      onClose={onClose}
      title="Iniciar Sesión"
      description="Ingresa tus datos para iniciar sesión o ingresa con una de las redes sociales"
      info="Si no tienes una cuenta, puedes registrarte"
    >
      <p className="text-sm mt-4 font-medium leading-none text-gray-500">
        Aun no tienes una cuenta?{" "}
        <span
          tabIndex={0}
          role="link"
          aria-label="Sign up here"
          className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
        >
          Regístrate aquí
        </span>
      </p>
      <div>
        <label className="text-sm font-medium leading-none text-gray-800">
          Email
        </label>
        <Input
          aria-label="enter email adress"
          type="email"
          className="bg-primary-light border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
        />
      </div>
      <div className="mt-6  w-full">
        <label className="text-sm font-medium leading-none text-gray-800">
          Password
        </label>
        <div className="relative flex items-center justify-center">
          <Input
            aria-label="enter Password"
            type={isPasswordVisible ? "text" : "password"}
            className="bg-primary-light border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
          />
          <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
            <Button kind="item" onClick={handleToogleVisblePassword}>
              {isPasswordVisible ? (
                <EyeIcon className="h-6 w-6 text-indigo-700 hover:text-primary-contrast" />
              ) : (
                <EyeOffIcon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm text-gray-900">Remember me</label>
      </div>

      <div className="flex justify-center">
        <Button
          className="mt-10 max-w-sm"
          kind="outline"
          aria-label="create my account"
          title="INGRESAR"
        />
      </div>

      <div className="w-full flex items-center justify-between py-5">
        <hr className="w-full bg-gray-400" />
        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
          Ó
        </p>
        <hr className="w-full bg-gray-400" />
      </div>
      <p className="text-base font-medium text-tx-current text-center">
        Inciar sesión con
      </p>

      <SocialNetworkButtons />
    </Modal>
  );
};
