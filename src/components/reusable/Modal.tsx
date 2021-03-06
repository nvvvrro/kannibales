import { FC, Fragment, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "components";
import { XIcon, InformationCircleIcon } from "@heroicons/react/solid";

/**
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {string} props.title
 * @param {boolean} props.show
 * @param {boolean} props.onClose
 * @description A reusable Modal component that can be used in any component.
 * @example <Button onClick={() => setIsOpen(true)}>Show Modal</Button>
 * @example <Modal show={isOpen} onClose={() => setIsOpen(false)}>
 */

export interface ModalProps {
  children?: React.ReactNode;
  className?: string;
  description?: string;
  info?: string;
  title?: string;
  buttonText?: string;
  show?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  children,
  className = "",
  title,
  description,
  info,
  buttonText = "",
  show,
  onClose,
}) => {
  const handleClose = useCallback(() => {
    onClose && onClose();
  }, [onClose]);

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className={`${className} fixed z-10 inset-0 overflow-y-auto`}
          onClose={handleClose}
        >
          <div className="px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-primary-dark bg-opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inset-x-0 top-0 static h-screen align-middle"
              aria-hidden="true"
            />
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl mobile:py-12 mobile:px-16 py-8 px-8 my-20">
                <div className="flex justify-end items-end mobile:-mt-8 mobile:-mr-12 -mr-6 -mt-6">
                  <Button
                    kind="item"
                    className="text-tx-main hover:text-tx-dark active:text-tx-current"
                    onClick={handleClose}
                  >
                    <XIcon className="w-8 h-8 outline-none" />
                  </Button>
                </div>

                <Dialog.Title
                  as="h2"
                  className="text-xl font-medium leading-6 text-gray-900"
                >
                  {title || "Bienvenido"}
                </Dialog.Title>

                <Dialog.Description className="text-sm mobile:text -base">
                  {description}
                </Dialog.Description>

                {children}

                <div className="mt-4 flex justify-end">
                  {buttonText && (
                    <Button
                      kind="outline"
                      className="inline-flex justify-center px-4 py-2  font-medium text-indigo-600"
                      onClick={handleClose}
                    >
                      {buttonText}
                    </Button>
                  )}
                </div>

                <div className="flex justify-start mobile:-ml-12 -mb-6 -ml-5">
                  {info && (
                    <InformationCircleIcon className="w-4 h-4 text-tx-current static cursor-pointer" />
                  )}
                  <p className="inline-block text-xs text-gray-500">{info}</p>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
