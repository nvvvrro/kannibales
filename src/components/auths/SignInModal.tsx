import { FC, useCallback, useEffect, useState } from "react";
import { Button } from "components";
import Image from "next/image";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { FacebookIcon, GoogleIcon, TwitterIcon } from "images";
import { motion } from "framer-motion";
import { Modal } from "components/reusable";

interface Props {
  title?: string;
  onClick: () => void;
  isOpen: boolean;
  children?: React.ReactNode;
}

export const SignInModal: FC<Props> = ({ title, isOpen = false, onClick }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToogleVisblePassword = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  return (
    { isOpen } && (
      <Modal>
        <p
          tabIndex={0}
          role="heading"
          aria-label="Login to your account"
          className="text-2xl font-extrabold leading-6 text-gray-800"
        >
          Hola!, inicia sesión para continuar
        </p>
        <p className="text-sm mt-4 font-medium leading-none text-gray-500">
          Aun no tienes una cuenta? →
          <span
            tabIndex={0}
            role="link"
            aria-label="Sign up here"
            className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
          >
            {" "}
            Regístrate aquí
          </span>
        </p>
        <div>
          <label className="text-sm font-medium leading-none text-gray-800">
            Email
          </label>
          <input
            aria-label="enter email adress"
            role="input"
            type="email"
            className="bg-primary-light border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
          />
        </div>
        <div className="mt-6  w-full">
          <label className="text-sm font-medium leading-none text-gray-800">
            Password
          </label>
          <div className="relative flex items-center justify-center">
            <input
              aria-label="enter Password"
              role="input"
              type={isPasswordVisible ? "text" : "password"}
              className="bg-primary-light border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
            <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
              <Button type="item" onClick={handleToogleVisblePassword}>
                {isPasswordVisible ? (
                  <EyeIcon className="h-6 w-6 text-indigo-700 hover:text-primary-contrast" />
                ) : (
                  <EyeOffIcon className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between py-5">
          <hr className="w-full bg-gray-400" />
          <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
            OR
          </p>
          <hr className="w-full bg-gray-400" />
        </div>
        <p className="text-base font-medium text-tx-current text-center">
          Inciar sesión con
        </p>

        <div className="flex items-center justify-between mt-2 desktop:mx-24 gap-3">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 0, 360],
            }}
          >
            <Button
              aria-label="Continue with Facebook"
              type="item"
              className="flex-shrink mt-6 hover:opacity-90 "
            >
              <FacebookIcon width={42} height={42} />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 0, 360],
            }}
          >
            <Button
              aria-label="Continue with google"
              type="item"
              className="flex-shrink mt-6 hover:opacity-90"
            >
              <GoogleIcon width={50} height={50} />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 0, 360],
            }}
          >
            <Button
              aria-label="Continue with twitter"
              type="item"
              className="flex-shrink mt-6 hover:opacity-90 "
            >
              <TwitterIcon width={42} height={42} className="" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-8"
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.8 }}
        >
          <Button
            type="outline"
            role="button"
            aria-label="create my account"
            title="Iniciar sesión"
          ></Button>
        </motion.div>
      </Modal>
    )
  );
};