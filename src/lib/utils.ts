import { Color } from "sanity.types";

export const parseColor = (color?: Color["rgb"] | null) => {
  return `rgba(${color?.r}, ${color?.g}, ${color?.b}, ${color?.a})`;
};

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://math-venture.vercel.app"
    : `${process.env.NEXT_PUBLIC_PROTOCOL || "https"}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
export const serverBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://math-venture.vercel.app"
    : `${process.env.PROTOCOL || "https"}://${process.env.VERCEL_URL}`;
