import { Container, styled } from "styled-system/jsx";
import { center } from "styled-system/patterns";
import Logo from "@/public/logo.svg";
import Link from "next/link";

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
        <Logo />

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
