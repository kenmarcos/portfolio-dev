import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";

interface ActiveLinkProps extends LinkProps {
  activeClassName: string;
  children: ReactNode;
}

export const ActiveLink = ({
  activeClassName,
  children,
  ...rest
}: ActiveLinkProps) => {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClassName : "";

  return (
    <Link {...rest} className={className}>
      {children}
    </Link>
  );
};
