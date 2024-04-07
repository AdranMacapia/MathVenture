import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";
import typographyPreset from "pandacss-preset-typography";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  presets: [
    "@pandacss/preset-base",
    createPreset({
      accentColor: "purple",
      borderRadius: "lg",
    }),
    typographyPreset(),
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          gray: {
            DEFAULT: {
              value: "#344054",
            },
            border: {
              value: "#D0D5DD",
            },
            light: {
              value: "#344054",
            },
            dark: {
              value: "#000000",
            },
          },
          primary: {
            default: {
              value: "#7F56D9",
            },
            "50": {
              value: "#faf9fe",
            },
            "100": {
              value: "#efeafa",
            },
            "200": {
              value: "#e3daf7",
            },
            "300": {
              value: "#d5c8f3",
            },
            "400": {
              value: "#c3b0ed",
            },
            "500": {
              value: "#ac92e6",
            },
            "600": {
              value: "#9270df",
            },
            "700": {
              value: "#7b53d1",
            },
            "800": {
              value: "#6545ad",
            },
            "900": {
              value: "#48317b",
            },
            "950": {
              value: "#2c1e4c",
            },
          },
        },
      },
      recipes: {
        button: {
          base: {
            fontWeight: "bold",
          },
        },
        input: {
          base: {
            backgroundColor: "white",
            borderRadius: "8px",
            borderColor: "#D0D5DD",
            height: "44px",
            fontSize: "14px !important",
            fontWeight: "semibold",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",
});
