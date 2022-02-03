import { Fragment, FC } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export type DropdownProps = {
  children: React.ReactNode;
  className?: string;
  icon?: any;
  info?: string;
};
export const Dropdown: FC<DropdownProps> = ({
  children,
  className = "",
  icon,
  info,
}) => {
  return (
    <Menu as="div" className={`${className} relative inline-block text-left`}>
      <Menu.Button className="flex items-center text-sm rounded-full hover:opacity-80">
        <span className="sr-only">{info}</span>
        {icon ? (
          icon
        ) : (
          <ChevronDownIcon
            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 block mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
