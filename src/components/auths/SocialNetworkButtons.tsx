import { Button } from "components";
import { Loader } from "components/reusable/Loader";
import { FacebookIcon, GoogleIcon, TwitterIcon } from "images";
import { signIn, useSession } from "next-auth/react";

export const SocialNetworkButtons = () => {
  const { data: session, status } = useSession();
  const handleSessionGoogle = () => signIn("google");
  const handleSessionTwitter = () => signIn("twitter");
  const handleSessionFacebook = () => signIn("facebook");

  const loading = status === "loading";

  return (
    <>
      {!session?.user && loading ? (
        <div className="flex items-center justify-between mt-2 desktop:mx-24 gap-1">
          <Loader />
        </div>
      ) : (
        <div className="flex items-center justify-between mt-2 desktop:mx-24 gap-3">
          <Button
            aria-label="Continue with Facebook"
            kind="item"
            className="flex-shrink mt-6 hover:opacity-90"
            onClick={handleSessionFacebook}
            whileHover={{ scale: 1.2 }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 0, 360],
            }}
          >
            <FacebookIcon width={42} height={42} />
          </Button>

          <Button
            aria-label="Continue with google"
            kind="item"
            className="flex-shrink mt-6 hover:opacity-90"
            onClick={handleSessionGoogle}
            whileHover={{ scale: 1.2 }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 0, 360],
            }}
          >
            <GoogleIcon width={50} height={50} />
          </Button>

          <Button
            aria-label="Continue with twitter"
            kind="item"
            className="flex-shrink mt-6 hover:opacity-90"
            onClick={handleSessionTwitter}
            whileHover={{ scale: 1.2 }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 0, 360],
            }}
          >
            <TwitterIcon width={42} height={42} />
          </Button>
        </div>
      )}
    </>
  );
};
