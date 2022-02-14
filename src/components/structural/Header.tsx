import Image from "next/image";
import { MenuProfile, Button, Searcher, Link } from "components";
import { ShoppingBagIcon } from "images";
import { navRoutes } from "config";
import Kannibales from "images/misc/kannibales.svg";

export const Header = ({ children }: any) => {
  return (
    <nav className="bg-primary-main flex">
      {children}
      <div className="flex flex-col max-w-7xl mx-auto px-2 pt-2 mobile:px-4 desktop:px-8">
        <div className="relative flex items-center justify-between w-full h-16 ">
          <div className="absolute inset-y-0 left-0 flex items-center mobile:hidden"></div>

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
            <div className="hidden mobile:block mobile:ml-6 gap-4 self-center">
              <div className="flex space-x-8">
                {navRoutes.map((route, index) => (
                  <Link href={route.path} key={index}>
                    <Button
                      key={route.path}
                      title={route.title}
                      kind="item"
                      className="text-primary-dark hover:text-primary-light focus:outline-none"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden mobile:block mobile:ml-6">
              <Searcher
                id="searcher-header"
                name="searcher-header"
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 mobile:static mobile:inset-auto mobile:ml-6 mobile:pr-0">
            <Button
              kind="item"
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
            </Button>
            <MenuProfile />
          </div>
        </div>
      </div>
    </nav>
  );
};
