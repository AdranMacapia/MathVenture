import React from "react";
import { Button } from "./Button";
import Script from "next/script";
import { css } from "styled-system/css";
import { Container, styled } from "styled-system/jsx";
import { center } from "styled-system/patterns";
import { baseUrl } from "@/lib/utils";

export const Feedback = () => {
  return (
    <>
      <Script src="https://unpkg.com/feedbackfin@^1" id="setup-fin" defer />

      <Script id="setup-webhook">
        {`window.feedbackfin = { config: {}, ...window.feedbackfin };
  window.feedbackfin.config.url = "${baseUrl}/api/receive-feedback";`}
      </Script>

      <styled.section bgColor="black" className={css({ mt: "140px" })}>
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
            We Value Your Feedback
          </styled.h2>

          <styled.p mt="16px" mb="45px" maxW="616px" fontWeight="medium">
            Help us improve! We&apos;d love to hear about your experience with
            our platform.
          </styled.p>

          <Button bgColor="white" color="black" data-feedbackfin-button>
            Give feedback
          </Button>
        </Container>
      </styled.section>
    </>
  );
};
