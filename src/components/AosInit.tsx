"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export const AosInit = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  }, []);

  return null;
};
