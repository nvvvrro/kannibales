import { useState } from "react";
import { Button, SignInModal } from "components";
import { useSession, signOut } from "next-auth/react";

export const MenuProfile = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const { status } = useSession();

  return (
    <div className="ml-3 relative">
      <div>
        {status === "unauthenticated" ? (
          <>
            <Button
              title="Iniciar sesión"
              kind="item"
              onClick={() => setShowSignIn(true)}
            />
            <SignInModal
              onClose={() => setShowSignIn(false)}
              show={showSignIn}
            />
          </>
        ) : (
          <>
            <button
              type="button"
              className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only">Open user menu</span>

              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
            <div
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-0"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-1"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-2"
                onClick={() => signOut()}
              >
                Sign out
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
