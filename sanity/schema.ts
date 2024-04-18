import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import topic from "./schemaTypes/topic";
import simulation from "./schemaTypes/simulation";
import svgAsset from "./schemaTypes/svgAsset";
import { heroType } from "./schemaTypes/hero";
import { buttonType } from "./schemaTypes/button";
import page from "./schemaTypes/page";
import { homePageType } from "./schemaTypes/homePage";
import { aboutPageType } from "./schemaTypes/aboutPage";
import { richContentType } from "./schemaTypes/richContent";
import faq from "./schemaTypes/faq";
import user from "./schemaTypes/user";
import feedback from "./schemaTypes/feedback";
import heroWithGrid from "./schemaTypes/heroWithGrid";
import gridItem from "./schemaTypes/gridItem";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    topic,
    simulation,
    svgAsset,
    heroType,
    buttonType,
    page,
    homePageType,
    aboutPageType,
    richContentType,
    faq,
    user,
    feedback,
    heroWithGrid,
    gridItem,
  ],
};
