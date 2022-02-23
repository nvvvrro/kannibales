import { FC, useCallback, useState } from "react";
import {
  Button,
  Form,
  Modal,
  SocialNetworkButtons,
  TextField,
} from "components";
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
      <Form>
        <TextField type="email" name="email" label="Email" className="mt-3" />

        <div className="relative flex items-center justify-center -top-4">
          <TextField
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            label="Password"
            className="w-full"
          />

          <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
            <Button kind="item" onClick={handleToogleVisblePassword}>
              {isPasswordVisible ? (
                <EyeIcon className="h-6 w-6 text-indigo-600 hover:text-primary-contrast" />
              ) : (
                <EyeOffIcon className="h-6 w-6 text-tx-main hover:text-primary-dark" />
              )}
            </Button>
          </div>
        </div>

        <Button
          kind="outline"
          className="px-4 py-2 font-medium"
          aria-label="create my account"
          title="INGRESAR"
        />
      </Form>
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
