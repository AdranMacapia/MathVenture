import { Flex, HStack, styled } from "styled-system/jsx";
import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import { AllTopicsForFilterQueryResult } from "sanity.types";
import { Menus } from "./Menus";

const fetchTopicsForFilter = () => {
  const AllTopicsForFilterQuery = groq`
    *[_type == "topic"] {
      _id,
      'slug': slug.current,
      title,
    }
  `;

  const result = client.fetch<AllTopicsForFilterQueryResult>(
    AllTopicsForFilterQuery
  );

  return result;
};

export const Filters = async () => {
  const topics = await fetchTopicsForFilter();

  return (
    <Flex
      justifyContent="end"
      alignItems={{ md: "center" }}
      px="16px"
      py="12px"
      bgColor="rgba(0, 0, 0, .02)"
      borderRadius="12px"
      direction={{ base: "column", md: "row" }}
      gap="10px"
    >
      <Menus topics={topics} />
    </Flex>
  );
};
