import { HeroWithGrid } from "sanity.types";
import { css } from "styled-system/css";
import { Box, Container, styled } from "styled-system/jsx";
import { center } from "styled-system/patterns";

export const WhatWeOffer = ({ data }: { data: HeroWithGrid | null }) => {
  const actualData = data as HeroWithGrid;

  return (
    <styled.section bgColor="black" className={css({ mt: "140px" })}>
      <Container
        maxW="1239px"
        py={{ base: "100px", md: "160px" }}
        color="white"
        className={center({
          flexDir: "column",
        })}
      >
        <styled.h2 fontWeight="extrabold" fontSize="28px" textAlign="center">
          {actualData?.heading}
        </styled.h2>

        <styled.p
          mt="25px"
          mb="45px"
          maxW="616px"
          fontWeight="medium"
          textAlign="center"
        >
          {actualData?.tagline}
        </styled.p>

        <styled.div
          mt="64px"
          display="grid"
          gridTemplateColumns={{ base: 1, md: 2 }}
          rowGap="32px"
          columnGap="42px"
          w="full"
        >
          {actualData?.grid?.map((info) => {
            return (
              <Box
                key={info._key}
                _hover={{
                  bgColor: "gray.dark.3",
                }}
                py="20px"
                px="20px"
                rounded="10px"
                transition="all .1s"
              >
                <styled.h3 fontSize="18px" fontWeight="extrabold">
                  {info.title}
                </styled.h3>

                <styled.p mt="16px" fontSize="sm" fontWeight="medium">
                  {info.description}
                </styled.p>
              </Box>
            );
          })}
        </styled.div>
      </Container>
    </styled.section>
  );
};
