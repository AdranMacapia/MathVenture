import { FAQs } from "@/components/FAQs";
import { styled } from "styled-system/jsx";
import { CallToAction } from "./CallToAction";
import { Header } from "./Header";
import { Topics } from "./Topics/Topics";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { HeroWithGrid, HomePageQueryResult } from "sanity.types";
import { WhatWeOffer } from "./WhatWeOffer";
import { HeroContent } from "@/lib/shared.types";

const fetchHomePageInfo = () => {
  const HomePageQuery = groq`
    *[_type == "page" && slug.current == 'home'][0] {
      _id,
      pageBuilder
    }
  `;

  const result = client.fetch<HomePageQueryResult>(HomePageQuery);

  return result;
};

export const HomePage = async () => {
  const data = await fetchHomePageInfo();

  const headerContent = data?.pageBuilder ? data.pageBuilder[0] : null;
  const topicsContent = data?.pageBuilder ? data.pageBuilder[1] : null;
  const whatWeOfferContent = data?.pageBuilder ? data.pageBuilder[2] : null;
  const ctaContent = data?.pageBuilder ? data.pageBuilder[3] : null;

  return (
    <>
      <Header data={headerContent as HeroContent | null} />

      <main>
        <Topics data={topicsContent as HeroContent | null} />

        <WhatWeOffer data={whatWeOfferContent as HeroWithGrid | null} />
        <CallToAction data={ctaContent as HeroContent | null} />

        <styled.div mt={{ base: "100px", md: "200px" }}>
          <FAQs />
        </styled.div>
      </main>
    </>
  );
};
