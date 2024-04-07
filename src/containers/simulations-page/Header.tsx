import { Container, styled } from "styled-system/jsx";

export const Header = () => {
  return (
    <styled.header mt="100px">
      <Container maxW="1239px" textAlign="center">
        <styled.h2 mb="16px" fontWeight="black" fontSize="32px">
          Explore all our simulations
        </styled.h2>

        <styled.p color="gray" fontWeight="medium" mt="28px">
          Explore the thrilling world of math through interactive simulation
          games
        </styled.p>
      </Container>
    </styled.header>
  );
};
