import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "@heroicons/react/outline";
import { Button } from "components";

export interface ModalProps {
  children?: React.ReactNode;
  className?: string;
  show?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  show,
  onClose,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e: any) => {
    e.preventDefault();
    onClose && onClose();
  };

  const Modal = show && (
    <div
      id="modal-bg"
      className={`${
        className || ""
      } h-full w-full py-16 px-4 ease-in-out absolute inset-0 bg-primary-dark bg-opacity-60 top-0 min-w-0 z-10`}
    >
      <div className="flex flex-col items-center justify-center">
        <div
          id="modal-box"
          className="bg-white shadow rounded desktop:w-1/2 2xs:w-full p-10 pt-4 mt-6"
        >
          <div className="flex justify-end items-end -mx-6">
            <Button
              kind="item"
              className="text-tx-main hover:text-tx-dark active:text-tx-current"
              onClick={handleClose}
            >
              <XIcon className="w-8 h-8" />
            </Button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );

  return isBrowser
    ? createPortal(Modal, document.getElementById("modal-root")!)
    : null;
};
