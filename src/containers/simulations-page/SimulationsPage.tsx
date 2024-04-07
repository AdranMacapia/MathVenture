import { Filters } from "./Filters/Filters";
import { Header } from "./Header";
import { Container, styled } from "styled-system/jsx";
import { SimulationList } from "./simulation-list/SimulationList";
import { groq } from "next-sanity";
import { client } from "./../../../sanity/lib/client";

const fetchAllSimulations = ({
  topic,
  sort = "desc",
}: {
  topic: string[];
  sort?: string;
}) => {
  const topicFilter = topic?.length > 0 && topic[0] !== "" ? topic : null;

  const topicFilterConditional = (s: string) => {
    return `topic -> slug.current == "${s}"`;
  };
  const topicMap = (conditional: (s: string) => string) => {
    return topicFilter?.map((s) => conditional(s)).join(" || ");
  };
  const topicFilterAction = topicFilter
    ? "&& (" + topicMap(topicFilterConditional) + ")"
    : "";

  const allSimulationsQuery = groq`
    *[_type == "simulation" ${topicFilterAction}] | order(title ${sort}){
      _id,
      'slug': slug.current,
      title,
      subtitle,
      topic -> {
        title,
        bgColor { rgb },
        textColor { rgb }
      },
      coverImage
    }
  `;

  const result = client.fetch<any>(allSimulationsQuery);

  return result;
};

export const SimulationsPage = async ({
  filter,
  sort,
}: {
  filter?: string;
  sort?: string;
}) => {
  const allSimulations = await fetchAllSimulations({
    topic: filter?.split(",") || [],
    sort,
  });

  return (
    <>
      <Header />

      <styled.main mt="100px">
        <styled.section>
          <Container maxW="1239px">
            <Filters />
            <SimulationList simulations={allSimulations} />
          </Container>
        </styled.section>
      </styled.main>
    </>
  );
};
