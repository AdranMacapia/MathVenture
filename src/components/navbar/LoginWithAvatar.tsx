"use client";

import { UserButton } from "@clerk/nextjs";

export const LoginWithAvatar = () => {
  return (
    <>
      <UserButton showName />
    </>
  );
};
