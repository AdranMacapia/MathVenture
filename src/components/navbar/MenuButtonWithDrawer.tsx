"use client";

import { Box, styled } from "styled-system/jsx";
import MenuIcon from "@/public/icons/MenuIcon.svg";
import XCloseIcon from "@/public/icons/XCloseIcon.svg";

import * as Drawer from "@/components/Drawer";
import { Button } from "../Button";
import { NavLink } from "./NavLink";
import Link from "next/link";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export const MenuButtonWithDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const { user } = useUser();

  return (
    <>
      <styled.button display={{ md: "none" }} onClick={open}>
        <MenuIcon />
      </styled.button>
      <Drawer.Root open={isOpen}>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Link href="/">
                <Box width="110px" height="80px" pos="relative">
                  <Image src="/logo.png" alt="Mathventures" fill />
                </Box>
              </Link>

              <Button
                variant="ghost"
                position="absolute"
                top="1"
                right="1"
                onClick={close}
              >
                <XCloseIcon />
              </Button>
            </Drawer.Header>

            <Drawer.Body border={0} display="flex" direction="column">
              <styled.ul
                gap="28px"
                display="inline-flex"
                flexDir="column"
                onClick={close}
              >
                <NavLink orientation="side" href="/about">
                  About
                </NavLink>
                <NavLink orientation="side" href="/simulations">
                  Explore simulations
                </NavLink>
                <NavLink orientation="side" href="/#faqs">
                  FAQs
                </NavLink>
                <NavLink orientation="side" href="/privacy-policy">
                  Privacy policy
                </NavLink>
              </styled.ul>

              {!user && (
                <styled.div mt="auto" w="full">
                  <Link href="/login" onClick={close}>
                    <Button w="full">Login</Button>
                  </Link>
                </styled.div>
              )}
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
};
