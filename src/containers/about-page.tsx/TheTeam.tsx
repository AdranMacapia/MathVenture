import Image from "next/image";
import { HeroWithGrid } from "sanity.types";
import { urlForImage } from "./../../../sanity/lib/image";
import { Container, VStack, styled } from "styled-system/jsx";
import ShowMoreLess from "@/components/TextWithShowMore";

export const TheTeam = ({ data }: { data: HeroWithGrid | null }) => {
  const actualData = data as HeroWithGrid;

  return (
    <styled.section bgColor="white" mt="130px">
      <Container maxW="1239px">
        <styled.h2 fontWeight="extrabold" fontSize="28px">
          {actualData.heading}
        </styled.h2>

        <styled.p mt="8px" mb="45px" maxW="616px" fontWeight="medium">
          {actualData.tagline}
        </styled.p>

        <styled.div
          display="grid"
          gridTemplateColumns={{ base: 1, md: 2, lg: 3 }}
          rowGap="32px"
          columnGap="42px"
          w="full"
        >
          {actualData?.grid?.map((gridItem) => {
            return (
              <styled.div key={gridItem._key}>
                <styled.div
                  pos="relative"
                  h="300px"
                  w="full"
                  borderWidth="1px"
                  rounded="10px"
                  borderColor="primary.default"
                >
                  <Image
                    // @ts-ignore
                    src={urlForImage(gridItem?.image || "")}
                    alt={gridItem.title || ""}
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </styled.div>

                <VStack alignItems="start" gap="4px" mt="20px">
                  <styled.h3 fontWeight="bold" fontSize="18px">
                    {gridItem.title}
                  </styled.h3>
                  <styled.p
                    fontWeight="bold"
                    color="primary.default"
                    fontSize="15px"
                  >
                    {/* @ts-ignore */}
                    {gridItem?.position}
                  </styled.p>

                  <styled.p fontWeight="medium" color="gray" mt="10px">
                    <ShowMoreLess
                      text={gridItem.description || ""}
                      maxLength={100}
                    />
                  </styled.p>
                </VStack>
              </styled.div>
            );
          })}
        </styled.div>
      </Container>
    </styled.section>
  );
};
