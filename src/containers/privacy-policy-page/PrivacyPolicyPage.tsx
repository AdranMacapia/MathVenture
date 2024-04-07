import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { Container, styled } from "styled-system/jsx";
import { PrivacyPolicyQueryResult, RichContentType } from "sanity.types";
import { RichText } from "@/components/RichText";

const fetchPrivacyPolicyInfo = () => {
  const PrivacyPolicyQuery = groq`
    *[_type == "page" && slug.current == 'privacy-policy'][0] {
      _id,
      pageBuilder
    }
  `;

  const result = client.fetch<PrivacyPolicyQueryResult>(PrivacyPolicyQuery);

  return result;
};

export const PrivacyPolicyPage = async () => {
  const response = await fetchPrivacyPolicyInfo();

  const data = response?.pageBuilder
    ? (response?.pageBuilder[0] as RichContentType)
    : null;

  return (
    <>
      <styled.header mt="100px">
        <Container maxW="1239px">
          <styled.h2
            mb="16px"
            fontWeight="black"
            fontSize="32px"
            textAlign="center"
          >
            Privacy policy
          </styled.h2>
        </Container>
      </styled.header>

      <styled.main mt="135px">
        <Container w="full" maxW="1239px">
          <styled.section w="full" maxW="900px" mx="auto">
            {/* @ts-ignore */}
            <RichText content={data?.content} />
          </styled.section>
        </Container>
      </styled.main>
    </>
  );
};
