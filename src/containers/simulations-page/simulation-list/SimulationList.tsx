"use client";

import { Flex, styled } from "styled-system/jsx";
import { SimulationCard } from "./SimulationCard";
import Link from "next/link";
import { parseColor } from "@/lib/utils";
import { urlForImage } from "./../../../../sanity/lib/image";

type SimulationListProps = {
  simulations: any;
};

export const SimulationList = ({ simulations }: SimulationListProps) => {
  return (
    <Flex
      maxW="1239px"
      justifyContent="space-between"
      gap="40px"
      flexDir={{ base: "column-reverse", md: "row" }}
    >
      <styled.div
        mt="42px"
        display="grid"
        gridTemplateColumns={{ base: 1, md: 2 }}
        rowGap="32px"
        columnGap="21px"
        w="full"
      >
        {simulations?.length > 0 &&
          simulations.map((simulation: any, index: number) => (
            <Link
              key={index}
              href={`/simulations/${simulation.slug}`}
              data-aos="fade-up"
            >
              <SimulationCard
                bgColor={parseColor(simulation.topic?.bgColor?.rgb)}
                textColor={parseColor(simulation.topic?.textColor?.rgb)}
                // @ts-ignore
                coverImage={urlForImage(simulation?.coverImage)}
                title={simulation.title}
                subtitle={simulation.subtitle}
                topic={simulation.topic?.title}
              />
            </Link>
          ))}
      </styled.div>
    </Flex>
  );
};
