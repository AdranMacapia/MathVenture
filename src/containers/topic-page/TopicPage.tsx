import { styled } from "styled-system/jsx";
import { Content } from "./Content";
import { TopicSimulationsList } from "./TopicSimulationsList";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { TopicQueryResult } from "sanity.types";
import { Feedback } from "@/components/feedback/Feedback";

const fetchTopic = (slug: string) => {
  const TopicQuery = groq`
    *[_type == "topic" && slug.current == $slug][0] {
      _id,
      'slug': slug.current,
      title,
      subtitle,
      bgColor {rgb},
      textColor {rgb},
      objectives,
      simulationScreenshots,
      simulations[] -> {
        title,
        subtitle,
        'slug': slug.current,
        coverImage
      }
    }
  `;

  const result = client.fetch<TopicQueryResult>(TopicQuery, { slug });

  return result;
};

export const TopicPage = async ({ slug }: { slug: string }) => {
  const topic = await fetchTopic(slug);

  return (
    <>
      <styled.main mt="73px">
        <Content topic={topic} />
        <TopicSimulationsList topic={topic} />
        <Feedback />
      </styled.main>
    </>
  );
};
