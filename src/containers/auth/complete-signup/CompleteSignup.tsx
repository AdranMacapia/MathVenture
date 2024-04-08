"use client";

import { User as ClerkUser } from "@clerk/nextjs/server";
import { useEffect, useState } from "react";
import { baseUrl } from "@/lib/utils";
import { Center, HStack, styled } from "styled-system/jsx";
import Link from "next/link";
import { Button } from "@/components/Button";

type PickedUser = Pick<ClerkUser, "firstName" | "lastName"> & {
  email?: string;
};

const addUserToSanity = async (user: PickedUser) => {
  await fetch(`${baseUrl}/api/create-sanity-user`, {
    method: "POST",
    body: JSON.stringify({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
    }),
  });
};

export const CompleteSignup = ({ user }: { user: PickedUser }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    addUserToSanity(user);
    setIsLoading(false);
  }, [user]);

  return (
    <>
      {isLoading ? (
        <Center textAlign="center" fontWeight="bold">
          Finishing up...
        </Center>
      ) : (
        <Center textAlign="center" flexDir="column">
          <styled.text fontWeight="black" fontSize="20px">
            ✅ Success
          </styled.text>

          <styled.text fontWeight="semibold" color="gray" mt="20px">
            You have successfully signed up and are ready to begin your
            MathVenture.
          </styled.text>

          <HStack flexDir={{ base: "column", md: "row" }} mt="52px" gap="32px">
            <Link href="/simulations">
              <Button variant="link" borderBottom="1px solid" rounded="0px">
                Explore simulations
                <styled.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  w="16px"
                  h="16px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </styled.svg>
              </Button>
            </Link>

            <Link href="/about">
              {" "}
              <Button variant="link" borderBottom="1px solid" rounded="0px">
                About us
                <styled.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  w="16px"
                  h="16px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </styled.svg>
              </Button>
            </Link>
          </HStack>
        </Center>
      )}
    </>
  );
};
