import { styled } from "styled-system/jsx";
import { Header } from "./Header";
import { Content } from "./Content";
import { groq } from "next-sanity";
import { client } from "./../../../sanity/lib/client";
import { SimulationQueryResult } from "sanity.types";
import { Feedback } from "@/components/feedback/Feedback";

const fetchSimulation = (slug: string) => {
  const SimulationQuery = groq`
    *[_type == "simulation" && slug.current == $slug][0] {
      _id,
      'slug': slug.current,
      title,
      coverImage,
      subtitle,
      simulationUrl,
      topic -> {
        title,
        bgColor { rgb },
        textColor { rgb }
      },
      simulationScreenshots,
      objectives,
      mechanics,
      credit
    }
  `;

  const result = client.fetch<SimulationQueryResult>(SimulationQuery, { slug });

  return result;
};

export const SimulationPage = async ({ slug }: { slug: string }) => {
  const data = await fetchSimulation(slug);

  return (
    <>
      <Header simulation={data} />

      <styled.main mt="73px">
        <Content simulation={data} />

        <Feedback />
      </styled.main>
    </>
  );
};
