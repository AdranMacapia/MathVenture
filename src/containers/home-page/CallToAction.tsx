import { Button } from "@/components/Button";
import { HeroContent } from "@/lib/shared.types";
import Link from "next/link";
import { Hero } from "sanity.types";
import { css } from "styled-system/css";
import { Container, styled } from "styled-system/jsx";
import { center } from "styled-system/patterns";

export const CallToAction = ({ data }: { data: HeroContent | null }) => {
  const actualData = data as Hero;

  return (
    <styled.section
      bgImage={"url(/backgrounds/puzzle.png)"}
      // className={css({ mt: "140px" })}
    >
      <Container
        maxW="1239px"
        py={{ base: "100px", md: "140px" }}
        textAlign="center"
        color="white"
        className={center({
          flexDir: "column",
        })}
      >
        <styled.h2 fontWeight="extrabold" fontSize="28px">
          {actualData?.heading}
        </styled.h2>

        <styled.p mt="25px" mb="45px" maxW="616px" fontWeight="medium">
          {actualData?.tagline}
        </styled.p>

        {actualData?.actionButtons?.map((btn) => {
          return (
            <Link key={btn._key} href={btn.href as string}>
              <Button bgColor="white" color="black">
                {btn.label}
              </Button>
            </Link>
          );
        })}
      </Container>
    </styled.section>
  );
};
