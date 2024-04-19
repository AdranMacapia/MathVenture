"use client";

import React, { useState } from "react";
import { Button } from "../Button";
import { css } from "styled-system/css";
import { Center, Container, HStack, Stack, styled } from "styled-system/jsx";
import { center } from "styled-system/patterns";
import * as Popover from "@/components/CPopover";
import { PopoverWrapper } from "./PopoverWrapper";
import { FormLabel } from "../form-label";
import { Textarea } from "../textarea";
import { useFormState, useFormStatus } from "react-dom";
import { feedbackAction } from "./feedbackAction";

type FeedbackType = "issue" | "idea" | "other";

const placeholder: Record<FeedbackType, string> = {
  issue: "I'm having an issue with...",
  idea: "I'd like to see...",
  other: "Anything else you'd like to share?",
};

const initialState = {
  message: "",
  status: "pending",
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button mt={2} type="submit" w="full" disabled={pending}>
      {pending ? "Sending..." : "Send Feedback"}
    </Button>
  );
};

export const Feedback = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType>("issue");

  const [state, formAction] = useFormState(feedbackAction, initialState);

  const hasError = state.status === "error";

  return (
    <>
      <styled.section bgColor="black" className={css({ mt: "140px" })}>
        <Container
          maxW="1239px"
          py={{ base: "100px", md: "100px" }}
          textAlign="center"
          color="white"
          className={center({
            flexDir: "column",
          })}
        >
          <styled.h2 fontWeight="extrabold" fontSize="28px">
            We value your feedback
          </styled.h2>

          <styled.p mt="16px" mb="45px" maxW="616px" fontWeight="medium">
            Help us improve! We&apos;d love to hear about your experience with
            our platform.
          </styled.p>

          <PopoverWrapper>
            <Popover.Title
              textAlign="left"
              color="black"
              fontSize="18px"
              fontWeight="extrabold"
              mb="20px"
            >
              Feedback
            </Popover.Title>

            <styled.form action={formAction}>
              {state.status !== "success" && (
                <>
                  <HStack w="full">
                    <Button
                      type="button"
                      w="full"
                      variant="subtle"
                      borderColor={
                        feedbackType === "issue" ? "primary.default" : ""
                      }
                      borderWidth="2px"
                      onClick={() => {
                        setFeedbackType("issue");
                      }}
                    >
                      Issue
                    </Button>

                    <Button
                      type="button"
                      w="full"
                      variant="subtle"
                      borderColor={
                        feedbackType === "idea" ? "primary.default" : ""
                      }
                      borderWidth="2px"
                      onClick={() => {
                        setFeedbackType("idea");
                      }}
                    >
                      Idea
                    </Button>

                    <Button
                      type="button"
                      w="full"
                      variant="subtle"
                      borderColor={
                        feedbackType === "other" ? "primary.default" : ""
                      }
                      borderWidth="2px"
                      onClick={() => {
                        setFeedbackType("other");
                      }}
                    >
                      Other
                    </Button>
                  </HStack>

                  <Stack gap="1.5" w="full" mt="20px">
                    <FormLabel htmlFor="name" textAlign="left">
                      Message
                    </FormLabel>

                    <input
                      type="hidden"
                      value={feedbackType}
                      name="feedbackType"
                      id="feedbackType"
                      readOnly
                    />

                    <Textarea
                      id="description"
                      rows={4}
                      color="gray"
                      fontWeight="semibold"
                      placeholder={placeholder[feedbackType]}
                      name="message"
                    />
                  </Stack>

                  <SubmitButton />
                </>
              )}

              {state.message && hasError && (
                <Center
                  mt="18px"
                  textAlign="center"
                  rounded="xl"
                  py="40px"
                  px="20px"
                  bgColor="red"
                  flexDir="column"
                >
                  <styled.p fontSize="sm">
                    Something happened, please try again
                  </styled.p>
                </Center>
              )}

              {state.message && !hasError && (
                <Center
                  textAlign="center"
                  rounded="xl"
                  py="40px"
                  px="20px"
                  bgColor="primary.default"
                  flexDir="column"
                >
                  <styled.p fontSize="sm" color="white">
                    {state.message}
                  </styled.p>
                </Center>
              )}
            </styled.form>
          </PopoverWrapper>
        </Container>
      </styled.section>
    </>
  );
};
