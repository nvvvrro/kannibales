import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import type { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";

export type LinkProps = PropsWithChildren<
  NextLinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">
>;

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
      <a
        className="btn btn-item"
        role="link"
        tabIndex={0}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
};
