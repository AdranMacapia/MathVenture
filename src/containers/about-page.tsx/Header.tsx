import { HeroContent } from "@/lib/shared.types";
import { Hero } from "sanity.types";
import { Center, Container, styled } from "styled-system/jsx";

export const Header = ({ data }: { data: HeroContent | null }) => {
  const actualData = data as Hero;

  return (
    <styled.header bgColor="white" mt="40px">
      <Container textAlign="center" color="white" maxW="1239px">
        <Center
          bgImage="url(/backgrounds/puzzle.png)"
          flexDir="column"
          minH="428px"
          borderRadius="12px"
          px="24px"
          py="52px"
        >
          <styled.h2 fontWeight="black" fontSize="32px">
            {actualData?.heading}
          </styled.h2>

          <styled.p mt="33px" maxW="812px" fontWeight="semibold">
            {actualData?.tagline}
          </styled.p>
        </Center>
      </Container>
    </styled.header>
  );
};
