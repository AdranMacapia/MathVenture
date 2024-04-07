import { Hero, RichContentType } from "sanity.types";

export type HeroContent =
  | ({
      _key: string;
    } & Hero)
  | ({
      _key: string;
    } & RichContentType);
