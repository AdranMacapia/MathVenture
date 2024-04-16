"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";
import ArrowTopIcon from "@/public/icons/ArrowTopIcon.svg";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          position="fixed"
          right={10}
          bottom={10}
          onClick={scrollToTop}
          rounded="full"
          width="48px"
          height="48px"
        >
          <ArrowTopIcon />
        </Button>
      )}
    </>
  );
};

export default BackToTopButton;
