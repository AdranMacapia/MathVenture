import { Box, Container, styled } from "styled-system/jsx";
import { center } from "styled-system/patterns";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <styled.section>
      <Container
        maxW="1239px"
        mt="198px"
        mb="48px"
        textAlign="center"
        className={center({
          flexDir: "column",
          fontSize: "12px",
          color: "gray",
        })}
      >
        <Link href="/">
          <Box width="110px" height="80px" pos="relative">
            <Image src="/logo.png" alt="Mathventures" fill />
          </Box>
        </Link>

        <styled.p mt="14px">
          Copyright 2024 MathVenture. All rights reserved
        </styled.p>

        <styled.p fontWeight="extrabold" mt="25px">
          <Link href="/privacy-policy">Privacy policy</Link>
        </styled.p>
      </Container>
    </styled.section>
  );
};
