import { Box, Container } from "styled-system/jsx";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container maxW="1239px" px={0}>
      <Box maxW="360px" w="full" mt={{ md: "60px" }} mx="auto" pb="300px">
        {children}
      </Box>
    </Container>
  );
}
