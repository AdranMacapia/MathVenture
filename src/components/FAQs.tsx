import { Container, styled } from "styled-system/jsx";
import { center } from "styled-system/patterns";
import * as Accordion from "@/components/Accordion";
import PlusIcon from "@/public/icons/PlusIcon.svg";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { FaqQueryResult } from "sanity.types";
import { RichText } from "./RichText";

const fetchFaqInfo = () => {
  const FaqQuery = groq`
    *[_type == "faq"] {
      _id,
      question,
      answer
    }
  `;

  const result = client.fetch<FaqQueryResult>(FaqQuery);

  return result;
};

export const FAQs = async () => {
  const faqs = await fetchFaqInfo();

  return (
    <styled.section id="faqs">
      <Container
        maxW="1239px"
        textAlign="center"
        className={center({
          flexDir: "column",
        })}
      >
        <styled.h2 fontWeight="extrabold" fontSize="28px">
          Frequently asked questions
        </styled.h2>

        <styled.p
          mt="25px"
          mb="45px"
          maxW="616px"
          fontWeight="medium"
          color="gray"
        >
          Everything you need to know about Mathventures
        </styled.p>

        <Accordion.Root
          mt={{ base: "40px", md: "107px" }}
          maxW="811px"
          defaultValue={["React"]}
          multiple
        >
          {faqs?.map((item) => (
            <Accordion.Item key={item._id} value={item?.question || ""}>
              <Accordion.ItemTrigger
                fontSize="16px"
                fontWeight="bold"
                color="gray"
                px="10px"
                py="22px"
              >
                {item.question}
                <Accordion.ItemIndicator>
                  <PlusIcon />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent
                textAlign="left"
                px="10px"
                fontWeight="medium"
                color="gray"
              >
                {/* @ts-ignore */}
                <RichText content={item?.answer} size="sm" />
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>
    </styled.section>
  );
};
