import { HeroContent } from "@/lib/shared.types";
import { Hero } from "sanity.types";
import { Box, Center, Container, styled } from "styled-system/jsx";

export const Header = ({ data }: { data: HeroContent | null }) => {
  const actualData = data as Hero;

  return (
    <styled.header bgColor="white" bgImage="url(/backgrounds/puzzle.png)">
      <Container
        color="white"
        maxW="1239px"
        py={{ base: "60px", md: "100px" }}
        px="24px"
      >
        <Box flexDir="column">
          <styled.h2 fontWeight="black" fontSize="32px">
            {actualData?.heading}
          </styled.h2>

          <styled.p mt="33px" maxW="812px" fontWeight="semibold">
            {actualData?.tagline}
          </styled.p>
        </Box>
      </Container>
    </styled.header>
  );
};
