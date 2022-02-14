import { FC, useState } from "react";
import { SignInModal, Dropdown, Item } from "components";
import { useSession, signOut } from "next-auth/react";
import { LogoutIcon, UserIcon, CogIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/outline";

export const MenuProfile: FC = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const { data: session, status } = useSession();

  return (
    <>
      <div className="relative gap-2 grid place-items-center">
        <Dropdown
          icon={
            status === "unauthenticated" ? (
              <UserCircleIcon
                className="w-7 h-7 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            ) : (
              <UserIcon
                className="w-7 h-7 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            )
          }
        >
          {status === "unauthenticated" && (
            <>
              <Item onClick={() => setShowSignIn(true)}>
                <LogoutIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                Iniciar Sesión
              </Item>
              <div className="px-1 py-1">
                <Item>
                  <UserIcon className="w-4 h-4 mr-1.5" aria-hidden="true" />
                  Registrase
                </Item>
                <Item>
                  <CogIcon className="w-5 h-5 mr-1.5" aria-hidden="true" />
                  Configuración
                </Item>
              </div>
            </>
          )}
          {status === "authenticated" && (
            <>
              <div className="px-1 py-1">
                <Item>
                  <UserIcon className="w-4 h-4 mr-1.5" aria-hidden="true" />
                  Mi perfil
                </Item>
                <Item>
                  <CogIcon className="w-5 h-5 mr-1.5" aria-hidden="true" />
                  Configuración
                </Item>
              </div>
              <Item onClick={() => signOut()}>
                <LogoutIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                Cerra sesión
              </Item>
            </>
          )}
        </Dropdown>
        {status === "authenticated" && (
          <span className="flex flex-col items-center text-xs rounded-full hover:opacity-80 font-light -my-4">
            {session?.user?.name}
          </span>
        )}
      </div>
      <SignInModal onClose={() => setShowSignIn(false)} show={showSignIn} />
    </>
  );
};
