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

export const Filters = async ({
  noOfSimulations,
  values,
}: {
  noOfSimulations: number;
  values?: string[];
}) => {
  const topics = await fetchTopicsForFilter();

  return (
    <Flex
      justifyContent="space-between"
      alignItems={{ md: "center" }}
      px="16px"
      py="12px"
      bgColor="rgba(0, 0, 0, .02)"
      borderRadius="12px"
      direction={{ base: "column", md: "row" }}
      gap="10px"
    >
      <styled.h3 fontWeight="extrabold" data-aos="flip-left">
        Showing {noOfSimulations} simulations
      </styled.h3>

      <Menus topics={topics} />
    </Flex>
  );
};
