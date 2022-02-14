import NextLink from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { motion } from "framer-motion";
import type { LinkProps as NextLinkProps } from "next/link";
import type { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";
import type { MotionProps } from "framer-motion";

export type LinkProps = PropsWithChildren<
  NextLinkProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
    MotionProps
>;

const linkVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { x: "-100vh", transition: { duration: 0.8, ease: "easeInOut" } },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

export const Link: FC<LinkProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  ...props
}) => {
  const router = useRouter();

  const onClick = useCallback(
    (e) => {
      if (router.asPath === href) {
        e.preventDefault();
      }
    },
    [router, href]
  );

  return (
    <NextLink
      {...{ href, as, replace, scroll, shallow, prefetch, locale }}
      scroll={false}
      passHref
    >
      <motion.a
        variants={linkVariants}
        initial="hidden"
        animate="show"
        whileHover="whileHover"
        whileTap="whileTap"
        exit="exit"
        className="btn btn-item"
        role="link"
        tabIndex={0}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.a>
    </NextLink>
  );
};
