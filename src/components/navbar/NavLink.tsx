"use client";

import Link from "next/link";
import { styled } from "../../../styled-system/jsx";
import { ReactNode } from "react";
import type { Route } from "next";
import { usePathname } from "next/navigation";

type NavLinkProps<T extends string> = {
  href: Route<T> | URL;
  children: ReactNode;
  orientation?: "side" | "nav";
};

export const NavLink = <T extends string>({
  href,
  children,
  orientation = "nav",
}: NavLinkProps<T>) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href as string);

  const isNav = orientation == "nav";

  return (
    <styled.li
      fontSize={isNav ? "sm" : "md"}
      color={isActive || !isNav ? "black" : "gray"}
      fontWeight={isActive ? "extrabold" : "bold"}
      borderBottom="2px dashed"
      borderColor={isActive ? "primary.default" : "transparent"}
      transition="all .2s"
      _hover={{
        color: "gray.dark",
        fontWeight: "extrabold",
        borderBottomColor: "primary.default",
      }}
      w="fit-content"
    >
      {/* @ts-ignore */}
      <Link href={href}>{children}</Link>
    </styled.li>
  );
};
