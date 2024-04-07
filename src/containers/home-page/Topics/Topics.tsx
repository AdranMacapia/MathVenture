import { styled } from "styled-system/jsx";
import { container } from "styled-system/patterns";
import { TopicCard } from "./TopicCard";
import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "./../../../../sanity/lib/client";
import { AllTopicsQueryResult, Hero, RichContentType } from "sanity.types";
import { parseColor } from "@/lib/utils";
import { HeroContent } from "@/lib/shared.types";

const fetchTopics = () => {
  const AllTopicsQuery = groq`
    *[_type == "topic"] {
      _id,
      'slug': slug.current,
      title,
      subtitle,
      asset -> {
        svgAsset
      },
      bgColor {rgb},
      textColor {rgb}
    }
  `;

  const result = client.fetch<AllTopicsQueryResult>(AllTopicsQuery);

  return result;
};

export const Topics = async ({ data }: { data: HeroContent | null }) => {
  const topics = await fetchTopics();

  const actualData = data as Hero;

  return (
    <styled.section
      className={container({
        maxW: "1239px",
        mt: { base: "100px", md: "220px" },
      })}
    >
      <styled.div maxW="636px" w="full">
        <styled.h2 color="gray.dark" fontWeight="extrabold" fontSize="32px">
          {actualData?.heading}
        </styled.h2>

        <styled.p mt="38px" fontWeight="medium" color="gray">
          {actualData?.tagline}
        </styled.p>
      </styled.div>

      <styled.div
        display="grid"
        gridTemplateColumns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        mt="104px"
        rowGap="32px"
        columnGap="21px"
      >
        {topics?.map((topic, index) => {
          return (
            <Link key={index} href={`/topics/${topic.slug}`}>
              <TopicCard
                topic={topic?.title || ""}
                bgColor={parseColor(topic?.bgColor?.rgb)}
                textColor={parseColor(topic?.textColor?.rgb)}
                // @ts-ignore
                svgAsset={topic?.asset?.svgAsset}
              />
            </Link>
          );
        })}
      </styled.div>
    </styled.section>
  );
};
