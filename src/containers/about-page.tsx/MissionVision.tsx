import { RichText } from "@/components/RichText";
import { HeroContent } from "@/lib/shared.types";
import { RichContentType } from "sanity.types";
import { Container, styled } from "styled-system/jsx";

export const MissionVision = ({
  mission,
  vision,
}: {
  mission: HeroContent | null;
  vision: HeroContent | null;
}) => {
  const missionContent = mission as RichContentType;
  const visionContent = vision as RichContentType;

  return (
    <styled.section bgColor="white" mt="130px">
      <Container maxW="1239px">
        <styled.div
          display="grid"
          gridTemplateColumns={{ base: 1, md: 2 }}
          rowGap="32px"
          columnGap="42px"
          w="full"
        >
          <styled.div data-aos="fade-right">
            <styled.h2 fontSize="26px" fontWeight="extrabold" mb="35px">
              Our Mission
            </styled.h2>

            <styled.div fontWeight="semibold" color="gray">
              {/* @ts-ignore */}
              <RichText content={missionContent?.content} />
            </styled.div>
          </styled.div>

          <styled.div data-aos="fade-left">
            <styled.h2 fontSize="26px" fontWeight="extrabold" mb="35px">
              Our Vision
            </styled.h2>

            <styled.div fontWeight="semibold">
              {/* @ts-ignore */}
              <RichText content={visionContent?.content} />
            </styled.div>
          </styled.div>
        </styled.div>
      </Container>
    </styled.section>
  );
};
