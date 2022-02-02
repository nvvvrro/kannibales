import Image from "next/image";
import { ShoppingBagIcon } from "images";
import Kannibales from "images/misc/kannibales.svg";
import { Searcher } from "../reusable";
import { UserNav } from "components/auths/UserNav";
import { MenuProfile, SideBar } from ".";
import { Button } from "components";
export const Header = () => {
  return (
    <nav className="bg-primary-main">
      <div className="flex flex-col max-w-7xl mx-auto px-2 pt-2 mobile:px-4 desktop:px-8">
        <div className="relative flex items-center justify-between w-full h-16 ">
          <div className="absolute inset-y-0 left-0 flex items-center mobile:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center mobile:items-stretch mobile:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Image
                className="desktop:block h-8 w-auto cursor-pointer hover:opacity-75"
                src={Kannibales}
                width={43}
                height={43}
                alt="Kannibales"
              />
            </div>
            <div className="hidden mobile:block mobile:ml-6 gap-4">
              <div className="flex space-x-4">
                <Button title="Tienda" kind="outline" />
                <Button title="Blogs" kind="secondary" />
                <Button title="Contacto" kind="primary" />
                <Button title="Nosotros" kind="item" />
              </div>
            </div>
            <div className="hidden mobile:block mobile:ml-6">
              <Searcher
                id="searcher-header"
                name="searcher-header"
                onChange={() => {}}
              />
            </div>
            <UserNav />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 mobile:static mobile:inset-auto mobile:ml-6 mobile:pr-0">
            <button
              type="button"
              className="hover:bg-primary-contrast p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-btn-main focus:ring-btn-light"
            >
              <span className="sr-only">View notifications</span>

              <ShoppingBagIcon
                className="h-8 w-8"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth={2}
                fill="hover:text-white"
              />
            </button>

            <MenuProfile />
          </div>
        </div>
      </div>

      <SideBar />
    </nav>
  );
};
