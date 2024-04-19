import { PortableText, PortableTextBlock } from "@portabletext/react";
import { styled } from "styled-system/jsx";
import { prose } from "styled-system/recipes";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlForImage } from "./../../sanity/lib/image";
import Image from "next/image";
import { css, cx } from "styled-system/css";

const SanityImageComponent = ({ value, isInline }: any) => {
  const { height } = getImageDimensions(value);

  const imageUrl = urlForImage(value);

  if (!imageUrl) return;

  return (
    <Image
      src={imageUrl}
      alt={value.alt || " "}
      loading="lazy"
      width={500}
      height={height}
      style={{
        display: isInline ? "inline-block" : "block",
      }}
    />
  );
};

export const RichText = ({
  content,
  size,
}: {
  content: PortableTextBlock;
  size?: "sm" | "lg";
}) => {
  return (
    <styled.div
      className={cx(
        prose({
          size,
        }),
        css({
          "& a": {
            color: "primary.default",
            fontWeight: "semibold",
          },
        })
      )}
      color="gray"
      w="full"
      fontWeight="semibold"
      lineHeight="24px"
    >
      <PortableText
        value={content}
        components={{
          types: {
            image: SanityImageComponent,
          },
        }}
      />
    </styled.div>
  );
};
