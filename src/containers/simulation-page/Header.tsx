"use client";

import { Button } from "@/components/Button";
import { Box, Center, Container, styled } from "styled-system/jsx";
import ArrowLeftIcon from "@/public/icons/ArrowLeftIcon.svg";
import PlayIcon from "@/public/icons/PlayIcon.svg";
import Link from "next/link";
import { SimulationQueryResult } from "sanity.types";
import { parseColor } from "@/lib/utils";
import { useRef, useState } from "react";
import { useFullscreen, useToggle } from "react-use";
import { urlForImage } from "../../../sanity/lib/image";

export const Header = ({
  simulation,
}: {
  simulation?: SimulationQueryResult;
}) => {
  const bgColor = parseColor(simulation?.topic?.bgColor?.rgb);
  const textColor = parseColor(simulation?.topic?.textColor?.rgb);

  const [showFrame, setShowFrame] = useState(false);

  // @ts-ignore
  const ref = useRef(null);
  const [show, toggle] = useToggle(false);

  const isFullscreen = useFullscreen(ref, show, {
    onClose: () => toggle(false),
  });

  // @ts-ignore
  const bgImage = urlForImage(simulation?.coverImage || "");

  return (
    <styled.header mt="60px">
      <Container maxW="1239px">
        <Link href="/simulations">
          <Button variant="outline">
            <ArrowLeftIcon />
            Go Back
          </Button>
        </Link>

        {!showFrame ? (
          <Center
            backgroundSize="cover"
            onClick={() => {
              setShowFrame(true);
              toggle();
            }}
            mt="40px"
            rounded="12px"
            borderWidth="4px"
            h="478px"
            flexDir="column"
            textAlign="center"
            style={{
              backgroundColor: textColor,
              // @ts-ignore
              backgroundImage: `url("${bgImage}")`,
              borderColor: textColor,
              backgroundBlendMode: "overlay",
            }}
            data-aos="flip-up"
          >
            <styled.button cursor="pointer">
              <PlayIcon />
            </styled.button>

            <styled.p
              mt="20px"
              fontWeight="extrabold"
              fontSize="lg"
              color="white"
            >
              Start learning
            </styled.p>
          </Center>
        ) : (
          <Box
            ref={ref}
            mt="40px"
            h="478px"
            w="full"
            rounded="12px"
            borderWidth="4px"
            style={{
              backgroundColor: bgColor,
              borderColor: textColor,
            }}
          >
            <iframe
              src={simulation?.simulationUrl || ""}
              id="dashboard-frame"
              width="100%"
              height="100%"
              allowFullScreen
              style={{
                borderRadius: "8px",
              }}
            ></iframe>
          </Box>
        )}
      </Container>
    </styled.header>
  );
};
