import { FC } from "react";
import { Button } from "components";
import { Menu } from "@headlessui/react";
import type { MouseEventHandler } from "react";

export type ItemProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
  icon?: any;
  disabled?: boolean;
};
export const Item: FC<ItemProps> = ({
  children,
  className = "",
  onClick,
  icon,
  disabled = false,
}) => {
  return (
    <Menu.Item disabled={disabled}>
      {({ active }) => (
        <Button
          kind="item"
          onClick={onClick}
          className={`${className} ${
            active ? "bg-primary-contrast text-white" : "text-gray-900"
          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
        >
          {icon}
          {children}
        </Button>
      )}
    </Menu.Item>
  );
};
