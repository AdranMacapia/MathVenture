import { currentUser } from "@clerk/nextjs";
import { CompleteSignup } from "./CompleteSignup";
import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import { UserQueryResult } from "sanity.types";
import { Center, HStack, styled } from "styled-system/jsx";
import { Button } from "@/components/Button";
import Link from "next/link";

const fetchSanityUser = (email?: string) => {
  const UserQuery = groq`
    *[_type == "user" && email == $email][0] {
      _id,
    }
  `;

  const result = client.fetch<UserQueryResult>(UserQuery, { email });

  return result;
};

export const CompleteSignupPage = async () => {
  const user = await currentUser();

  const userEmail = user?.emailAddresses[0].emailAddress || "";

  const sanityUser = await fetchSanityUser(userEmail);

  if (user === null || sanityUser?._id) {
    return (
      <Center textAlign="center" flexDir="column">
        <styled.text fontWeight="black" fontSize="20px">
          No dice
        </styled.text>

        <styled.text fontWeight="semibold" color="gray" mt="20px">
          You don&apos;t have access to this place. Maybe explore other places
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
    );
  }

  return (
    <CompleteSignup
      user={{
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: userEmail,
        externalId: user?.externalId,
      }}
    />
  );
};
