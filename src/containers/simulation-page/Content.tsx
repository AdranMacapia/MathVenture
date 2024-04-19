import { parseColor } from "@/lib/utils";
import { SimulationQueryResult } from "sanity.types";
import { urlForImage } from "./../../../sanity/lib/image";
import { Box, Container, Flex, Grid, styled } from "styled-system/jsx";
import Image from "next/image";
import { RichText } from "@/components/RichText";
import ShowMoreLess from "@/components/TextWithShowMore";

export const Content = ({
  simulation,
}: {
  simulation?: SimulationQueryResult;
}) => {
  const bgColor = parseColor(simulation?.topic?.bgColor?.rgb);
  const textColor = parseColor(simulation?.topic?.textColor?.rgb);

  return (
    <styled.section>
      <Container maxW="1239px" display="flex" w="full">
        <Flex
          w="full"
          justifyContent="space-between"
          gap="80px"
          flexDir={{ base: "column-reverse", md: "row" }}
        >
          <styled.div w="full" maxW="600px">
            <>
              <styled.h1 fontSize="28px" fontWeight="extrabold">
                {simulation?.title}
              </styled.h1>

              <styled.div
                mt="24px"
                rounded="16px"
                py="2px"
                px="8px"
                fontSize="xs"
                style={{
                  backgroundColor: bgColor,
                  color: textColor,
                }}
                fontWeight="black"
                display="inline-block"
                textTransform="uppercase"
              >
                {simulation?.topic?.title}
              </styled.div>

              <styled.p fontWeight="semibold" mt="40px" color="gray">
                <ShowMoreLess
                  text={simulation?.subtitle || ""}
                  maxLength={500}
                />
              </styled.p>
            </>

            <styled.div mt="80px">
              <styled.h2
                fontSize="sm"
                fontWeight="black"
                textTransform="uppercase"
                mb="24px"
              >
                Objectives
              </styled.h2>

              {/* @ts-ignore */}
              <RichText content={simulation?.objectives} />
            </styled.div>

            {simulation?.mechanics && (
              <styled.div mt="80px">
                <styled.h2
                  fontSize="sm"
                  fontWeight="black"
                  textTransform="uppercase"
                  mb="24px"
                >
                  Mechanics
                </styled.h2>

                {/* @ts-ignore */}
                <RichText content={simulation?.mechanics} />
              </styled.div>
            )}
          </styled.div>

          <Box w="full">
            <Grid
              gridTemplateColumns={{ base: 1, md: 2 }}
              rowGap="8px"
              columnGap="10px"
              h="fit-content"
            >
              {simulation?.simulationScreenshots?.map((screenshot) => {
                return (
                  <styled.div
                    key={screenshot._key}
                    pos="relative"
                    height="177px"
                    w="full"
                    rounded="10px"
                    border="1px solid rgba(0, 0, 0, 0.1)"
                  >
                    <Image
                      src={urlForImage(screenshot)}
                      alt={screenshot.alt || ""}
                      fill
                      style={{
                        backgroundColor: bgColor,
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />
                  </styled.div>
                );
              })}
            </Grid>

            <Box
              mt="32px"
              rounded="12px"
              borderWidth="1px"
              bgColor="gray.3"
              pt="20px"
              pb="4px"
              px="24px"
            >
              <styled.p fontWeight="extrabold">Simulation credit</styled.p>
              <styled.div mt="10px">
                {/* @ts-ignore */}
                <RichText content={simulation?.credit} size="sm" />
              </styled.div>
            </Box>
          </Box>
        </Flex>
      </Container>
    </styled.section>
  );
};
