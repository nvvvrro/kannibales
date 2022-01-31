import { Button } from "components";
import { FacebookIcon, GoogleIcon, TwitterIcon } from "images";

export const SocialNetworkButtons = () => {
  return (
    <div className="flex items-center justify-between mt-2 desktop:mx-24 gap-3">
      <Button
        aria-label="Continue with Facebook"
        kind="item"
        className="flex-shrink mt-6 hover:opacity-90"
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
        whileHover={{ scale: 1.2 }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 0, 360],
        }}
      >
        <TwitterIcon width={42} height={42} />
      </Button>
    </div>
  );
};
