import { Box, Flex, HStack, styled } from "styled-system/jsx";
import { container } from "styled-system/patterns";
import { NavLink } from "./NavLink";
import Link from "next/link";
import { MenuButtonWithDrawer } from "./MenuButtonWithDrawer";
import { currentUser } from "@clerk/nextjs";
import { LoginWithAvatar } from "./LoginWithAvatar";
import { Button } from "../Button";
import Image from "next/image";

export const Navbar = async () => {
  const user = await currentUser();

  return (
    <styled.nav
      className={container({ maxW: "1239px" })}
      py="16px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex gap="60px" alignItems="center">
        <Link href="/">
          <Box width="110px" height="80px" pos="relative">
            <Image src="/logo.png" alt="Mathventures" fill />
          </Box>
        </Link>

        <styled.ul display={{ base: "none", md: "flex" }} gap="32px">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/simulations">Explore simulations</NavLink>
          <NavLink href="/#faqs">FAQs</NavLink>
          <NavLink href="/privacy-policy">Privacy policy</NavLink>
        </styled.ul>
      </Flex>

      <HStack>
        <MenuButtonWithDrawer />

        {!user ? (
          <Link href="/login">
            <Button display={{ base: "none", md: "flex" }} size="sm">
              Login
            </Button>
          </Link>
        ) : (
          <LoginWithAvatar />
        )}
      </HStack>
    </styled.nav>
  );
};
