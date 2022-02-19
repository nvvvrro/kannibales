import { Button, Input, Poppup, PoppupProps } from "components";
import { FC } from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { SocialNetworkButtons } from ".";

export const RegisterModal: FC<PoppupProps> = ({ show, onClose }) => {
  return (
    <Poppup
      show={show}
      onClose={onClose}
      title="Registro de Usuario"
      description="Ingresa tus datos para registrarte"
      info="Recibirás un correo de confirmación si ingresas tus datos manualmente"
    >
      <form method="post">
        <div className="mt-6 w-full">
          <label className="text-sm font-medium leading-none text-gray-800">
            Email
          </label>
          <div className="relative flex items-center justify-center">
            <Input
              aria-label="enter email adress"
              type="email"
              className="bg-primary-light border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
        </div>

        <div className="mt-6 w-full">
          <label className="text-sm font-medium leading-none text-gray-800">
            Nombre
          </label>
          <div className="relative flex items-center justify-center">
            <Input
              aria-label="enter Password"
              type="text"
              className="bg-primary-light border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
        </div>

        <div className="mt-6 w-full">
          <label className="text-sm font-medium leading-none text-gray-800">
            Password
          </label>
          <div className="relative flex items-center justify-center">
            <Input
              aria-label="enter Password"
              type="text"
              className="bg-primary-light border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
        </div>

        <div className="mt-6 w-full">
          <label className="text-sm font-medium leading-none text-gray-800">
            Confirmar Password
          </label>
          <div className="relative flex items-center justify-center">
            <Input
              aria-label="enter Password"
              type="text"
              className="bg-primary-light border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <Button
            kind="outline"
            className="justify-center px-4 py-2 font-medium max-w-sm"
            onClick={onClose}
          >
            Continuar
          </Button>
        </div>
      </form>

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
    </Poppup>
  );
};
