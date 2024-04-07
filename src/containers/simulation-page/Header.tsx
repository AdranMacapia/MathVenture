import { Button } from "@/components/Button";
import { Center, Container, styled } from "styled-system/jsx";
import ArrowLeftIcon from "@/public/icons/ArrowLeftIcon.svg";
import PlayIcon from "@/public/icons/PlayIcon.svg";
import Link from "next/link";
import { SimulationQueryResult } from "sanity.types";
import { parseColor } from "@/lib/utils";

export const Header = ({
  simulation,
}: {
  simulation?: SimulationQueryResult;
}) => {
  const bgColor = parseColor(simulation?.topic?.bgColor?.rgb);
  const textColor = parseColor(simulation?.topic?.textColor?.rgb);

  return (
    <styled.header mt="60px">
      <Container maxW="1239px">
        <Link href="/simulations">
          <Button variant="outline">
            <ArrowLeftIcon />
            Go Back
          </Button>
        </Link>

        <Center
          mt="40px"
          rounded="12px"
          borderWidth="4px"
          style={{
            backgroundColor: bgColor,
            borderColor: textColor,
          }}
          h="478px"
          flexDir="column"
          textAlign="center"
        >
          <styled.button cursor="pointer">
            <PlayIcon />
          </styled.button>

          <styled.p mt="20px" fontWeight="extrabold" fontSize="lg">
            Start learning
          </styled.p>
        </Center>
      </Container>
    </styled.header>
  );
};
