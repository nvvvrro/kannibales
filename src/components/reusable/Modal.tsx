import { FC } from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const Modal: FC<Props> = ({ children, className }) => {
  return (
    <div
      id="modal-bg"
      className={`${
        className || ""
      }  h-full w-full py-16 px-4 absolute inset-0 bg-gradient-to-tl from-primary-light to-primary-dark opacity-75 top-0`}
    >
      <div className="flex flex-col items-center justify-center">
        <div
          id="modal-box"
          className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-6"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
