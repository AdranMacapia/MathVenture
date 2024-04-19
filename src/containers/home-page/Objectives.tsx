import { HeroWithGrid } from "sanity.types";
import { css } from "styled-system/css";
import { Box, Container, styled } from "styled-system/jsx";
import { center } from "styled-system/patterns";

export const Objectives = ({ data }: { data: HeroWithGrid | null }) => {
  const actualData = data as HeroWithGrid;

  return (
    <styled.section
      bgColor="gray.3"
      className={css({ mt: "140px" })}
      borderWidth="10px"
      borderStyle="dotted"
      borderColor="primary.default"
    >
      <Container
        maxW="1239px"
        py={{ base: "100px", md: "160px" }}
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
                py="20px"
                px="20px"
                rounded="10px"
                transition="all .1s"
                _hover={{
                  bgColor: "white",
                }}
              >
                <styled.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24px"
                  height="24px"
                  color="primary.default"
                  mb="14px"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </styled.svg>

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
