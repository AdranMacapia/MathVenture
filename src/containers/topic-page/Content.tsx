import { RichText } from "@/components/RichText";
import { parseColor } from "@/lib/utils";
import Image from "next/image";
import { TopicQueryResult } from "sanity.types";
import { urlForImage } from "../../../sanity/lib/image";
import { Box, Container, Grid, styled } from "styled-system/jsx";

export const Content = ({ topic }: { topic: TopicQueryResult }) => {
  const bgColor = parseColor(topic?.bgColor?.rgb);

  return (
    <styled.section>
      <Container
        w="full"
        maxW="1239px"
        display="flex"
        justifyContent="space-between"
        gap="40px"
        flexDir={{ base: "column", md: "row" }}
      >
        <styled.div w="full" maxW="600px">
          <>
            <styled.h1 fontSize="28px" fontWeight="extrabold">
              {topic?.title}
            </styled.h1>

            <styled.p fontWeight="semibold" mt="40px" color="gray">
              {topic?.subtitle}
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
            <RichText content={topic?.objectives} />
          </styled.div>
        </styled.div>

        <Grid
          gridTemplateColumns={{ base: 1, md: 2 }}
          rowGap="8px"
          columnGap="10px"
          w="full"
        >
          {topic?.simulationScreenshots?.map((screenshot) => {
            return (
              <styled.div
                key={screenshot._key}
                pos="relative"
                height="177px"
                w="full"
                rounded="10px"
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
      </Container>
    </styled.section>
  );
};
