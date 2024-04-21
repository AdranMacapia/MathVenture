import { Container, styled } from "styled-system/jsx";
import { SimulationCard } from "../simulations-page/simulation-list/SimulationCard";
import Link from "next/link";
import { TopicQueryResult } from "sanity.types";
import { parseColor } from "@/lib/utils";
import { urlForImage } from "../../../sanity/lib/image";

export const TopicSimulationsList = ({
  topic,
}: {
  topic: TopicQueryResult;
}) => {
  return (
    <styled.section>
      <Container maxW="1239px">
        <styled.h2
          mt="102px"
          fontSize="sm"
          fontWeight="black"
          textTransform="uppercase"
        >
          Simulations
        </styled.h2>

        <styled.div
          mt="32px"
          display="grid"
          gridTemplateColumns={{ base: 1, md: 2, lg: 3 }}
          rowGap="32px"
          columnGap="21px"
        >
          {topic?.simulations?.map((simulation, index) => (
            <Link
              key={index}
              href={`/simulations/${simulation.slug}`}
              data-aos="fade-up"
              data-aos-delay={`${index + 1}00`}
            >
              <SimulationCard
                bgColor={parseColor(topic?.bgColor?.rgb)}
                textColor={parseColor(topic?.textColor?.rgb)}
                title={simulation.title}
                subtitle={simulation.subtitle}
                size="sm"
                // @ts-ignore
                coverImage={urlForImage(simulation?.coverImage)}
              />
            </Link>
          ))}
        </styled.div>
      </Container>
    </styled.section>
  );
};
