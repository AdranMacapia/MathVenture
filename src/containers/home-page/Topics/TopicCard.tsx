import { CImage, urlForImage } from "../../../../sanity/lib/image";
import { Center, styled } from "styled-system/jsx";

export const TopicCard = ({
  bgColor,
  textColor,
  svgAsset,
  topic,
}: {
  bgColor: string;
  textColor: string;
  svgAsset?: CImage;
  topic: string;
}) => {
  return (
    <Center
      textAlign="center"
      w="full"
      h="232px"
      borderRadius="12px"
      position="relative"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <styled.p
        fontWeight="black"
        style={{
          color: textColor,
        }}
      >
        {topic}
      </styled.p>

      <styled.div pos="absolute" left="-20px" top="-22px">
        <styled.img src={urlForImage(svgAsset)} alt={svgAsset?.alt || ""} />
      </styled.div>
    </Center>
  );
};
