import Image from "next/image";
import { styled } from "styled-system/jsx";

type SimulationCardProps = {
  bgColor: string;
  textColor: string;
  title: string | null;
  subtitle: string | null;
  topic?: string | null;
  size?: "sm" | "md";
  coverImage?: string | null;
};
export const SimulationCard = ({
  bgColor,
  textColor,
  title,
  subtitle,
  topic,
  size = "md",
  coverImage,
}: SimulationCardProps) => {
  return (
    <styled.div
      borderWidth="1px"
      style={{
        borderColor: textColor,
      }}
      rounded="12px"
      px={size === "sm" ? "8px" : "12px"}
      pt="10px"
      pb="36px"
      h="full"
      display="flex"
      flexDir="column"
    >
      <styled.div
        pos="relative"
        minH={{ base: "200px", md: "289px" }}
        maxH={{ base: "200px", md: "289px" }}
        w="full"
      >
        <Image
          src={coverImage || ""}
          alt={title || ""}
          fill
          style={{
            backgroundColor: bgColor,
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </styled.div>

      <styled.div
        px={{ base: "12px", md: "27px" }}
        mt={{ base: "30px", md: "40px" }}
        h="full"
        display="flex"
        flexDir="column"
      >
        <styled.h3
          fontWeight="extrabold"
          style={{
            color: textColor,
          }}
        >
          {title}
        </styled.h3>

        <styled.p
          color="gray"
          fontWeight={size === "sm" ? "semibold" : "bold"}
          mt="23px"
        >
          {subtitle}
        </styled.p>

        {topic && (
          <styled.div mt="auto">
            <styled.div
              rounded="16px"
              py="2px"
              px="8px"
              fontSize="xs"
              style={{
                backgroundColor: bgColor,
                color: textColor,
              }}
              fontWeight="black"
              mt="40px"
              display="inline-block"
              textTransform="uppercase"
            >
              {topic}
            </styled.div>
          </styled.div>
        )}
      </styled.div>
    </styled.div>
  );
};
