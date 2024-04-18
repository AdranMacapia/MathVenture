"use client";

import React, { useState } from "react";
import { styled } from "styled-system/jsx";

const ShowMoreLess = ({
  text,
  maxLength,
}: {
  maxLength: number;
  text: string;
}) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const renderText = () => {
    if (text.length <= maxLength || showAll) {
      return text;
    }

    return `${text.substring(0, maxLength)}...`;
  };

  return (
    <>
      {renderText()}
      {text.length > maxLength && (
        <styled.button onClick={toggleShowAll} cursor="pointer">
          {showAll ? "show less" : "show more"}
        </styled.button>
      )}
    </>
  );
};

export default ShowMoreLess;
