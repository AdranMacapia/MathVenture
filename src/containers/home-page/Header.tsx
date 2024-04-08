import { Button } from "@/components/Button";
import { Box, HStack, styled } from "styled-system/jsx";
import { container } from "styled-system/patterns";
import Hexagon from "@/public/illustrations/hexagon.svg";
import { css } from "styled-system/css";
import Link from "next/link";
import { Hero, RichContentType } from "sanity.types";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { HeroContent } from "@/lib/shared.types";

export const Header = ({ data }: { data: HeroContent | null }) => {
  const actualData = data as Hero;

  return (
    <>
      <Hexagon
        className={css({
          position: "absolute",
          left: 0,
        })}
      />

      <styled.header className={container({ maxW: "1239px" })}>
        <styled.div
          mt={{ base: "50px", md: "100px" }}
          mx="auto"
          maxW="864px"
          textAlign="center"
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <styled.h1 fontSize={{ base: "40px", md: "44px" }} fontWeight="black">
            {actualData?.heading}
          </styled.h1>

          <styled.p mt="24px" color="gray" fontWeight="medium" maxW="530px">
            {actualData?.tagline}
          </styled.p>

          <HStack
            flexDir={{ base: "column", sm: "row" }}
            mt="54px"
            gap={"15px"}
          >
            {actualData?.actionButtons?.map((btn) => {
              return (
                <Link key={btn._key} href={btn.href as string}>
                  <Button w="full" variant={btn.variant}>
                    {btn.label}
                  </Button>
                </Link>
              );
            })}
          </HStack>

          <styled.div
            pos="relative"
            h={{ base: "300px", md: "492px" }}
            mt="80px"
            w="full"
            rounded="8px"
            border="1px dashed rgba(0, 0, 0, 0.1)"
          >
            <Image
              // @ts-ignore
              src={urlForImage(actualData?.image) || ""}
              alt={actualData?.image?.alt || ""}
              fill
              style={{
                backgroundColor: "white",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </styled.div>
        </styled.div>
      </styled.header>
    </>
  );
};
