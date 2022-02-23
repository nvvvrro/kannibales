import { FC } from "react";
import {
  Button,
  Form,
  Modal,
  TextField,
  SocialNetworkButtons,
} from "components";
import type { ModalProps } from "components";

export const RegisterModal: FC<ModalProps> = ({ show, onClose }) => {
  return (
    <Modal
      show={show}
      onClose={onClose}
      title="Registro de Usuario"
      description="Ingresa tus datos para registrarte"
      info="Recibirás un correo de confirmación si ingresas tus datos manualmente"
    >
      <Form>
        <TextField type="email" name="email" label="Email" className="mt-3" />

        <TextField type="text" name="name" label="Nombre" />

        <TextField type="password" name="password" label="Password" />

        <TextField
          type="password"
          name="confirmPassword"
          label="Confirmar Password"
        />

        <Button
          kind="outline"
          className="px-4 py-2 font-medium"
          onClick={onClose}
          title="REGISTRARSE"
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
