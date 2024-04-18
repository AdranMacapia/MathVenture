/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type GridItem = {
  _type: "gridItem";
  title?: string;
  description?: string;
};

export type HeroWithGrid = {
  _type: "heroWithGrid";
  heading?: string;
  tagline?: string;
  grid?: Array<{
    _key: string;
  } & GridItem>;
};

export type Feedback = {
  _id: string;
  _type: "feedback";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  feedbackType?: string;
  message?: string;
  date?: string;
};

export type User = {
  _id: string;
  _type: "user";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  fullName?: string;
  email?: string;
};

export type Faq = {
  _id: string;
  _type: "faq";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  question?: string;
  answer?: string;
};

export type RichContentType = {
  _type: "richContentType";
  heading?: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
};

export type AboutPage = {
  _type: "aboutPage";
  aboveTheFoldArea?: Hero;
  mission?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  vision?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
};

export type HomePage = {
  _type: "homePage";
  aboveTheFoldArea?: Hero;
  topicsArea?: Hero;
  callToActionArea?: Hero;
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  pageBuilder?: Array<({
    _key: string;
  } & Hero) | ({
    _key: string;
  } & HeroWithGrid) | ({
    _key: string;
  } & RichContentType)>;
};

export type Button = {
  _type: "button";
  label?: string;
  href?: "/about" | "/simulations" | "/#faqs" | "/privacy-policy" | "/login";
  variant?: "outline" | "solid";
};

export type Hero = {
  _type: "hero";
  heading?: string;
  tagline?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  actionButtons?: Array<{
    _key: string;
  } & Button>;
};

export type Simulation = {
  _id: string;
  _type: "simulation";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  subtitle?: string;
  simulationUrl?: string;
  objectives?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  topic?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "topic";
  };
  simulationScreenshots?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
};

export type Topic = {
  _id: string;
  _type: "topic";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  subtitle?: string;
  objectives?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  bgColor?: Color;
  textColor?: Color;
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "svgAsset";
  };
  simulations?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "simulation";
  }>;
  simulationScreenshots?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
};

export type SvgAsset = {
  _id: string;
  _type: "svgAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  svgAsset?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}>;

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Color = {
  _type: "color";
  hex?: string;
  alpha?: number;
  hsl?: HslaColor;
  hsv?: HsvaColor;
  rgb?: RgbaColor;
};

export type RgbaColor = {
  _type: "rgbaColor";
  r?: number;
  g?: number;
  b?: number;
  a?: number;
};

export type HsvaColor = {
  _type: "hsvaColor";
  h?: number;
  s?: number;
  v?: number;
  a?: number;
};

export type HslaColor = {
  _type: "hslaColor";
  h?: number;
  s?: number;
  l?: number;
  a?: number;
};
export declare const internalGroqTypeReferenceTo: unique symbol;

// Source: ./src/components/FAQs.tsx
// Variable: FaqQuery
// Query:     *[_type == "faq"] {      _id,      question,      answer    }  
export type FaqQueryResult = Array<{
  _id: string;
  question: string | null;
  answer: string | null;
}>;

// Source: ./src/containers/about-page.tsx/AboutPage.tsx
// Variable: AboutPageQuery
// Query:     *[_type == "page" && slug.current == 'about'][0] {      _id,      pageBuilder    }  
export type AboutPageQueryResult = {
  _id: string;
  pageBuilder: Array<({
    _key: string;
  } & Hero) | ({
    _key: string;
  } & HeroWithGrid) | ({
    _key: string;
  } & RichContentType)> | null;
} | null;

// Source: ./src/containers/home-page/HomePage.tsx
// Variable: HomePageQuery
// Query:     *[_type == "page" && slug.current == 'home'][0] {      _id,      pageBuilder    }  
export type HomePageQueryResult = {
  _id: string;
  pageBuilder: Array<({
    _key: string;
  } & Hero) | ({
    _key: string;
  } & HeroWithGrid) | ({
    _key: string;
  } & RichContentType)> | null;
} | null;

// Source: ./src/containers/privacy-policy-page/PrivacyPolicyPage.tsx
// Variable: PrivacyPolicyQuery
// Query:     *[_type == "page" && slug.current == 'privacy-policy'][0] {      _id,      pageBuilder    }  
export type PrivacyPolicyQueryResult = {
  _id: string;
  pageBuilder: Array<({
    _key: string;
  } & Hero) | ({
    _key: string;
  } & HeroWithGrid) | ({
    _key: string;
  } & RichContentType)> | null;
} | null;

// Source: ./src/containers/simulation-page/SimulationPage.tsx
// Variable: SimulationQuery
// Query:     *[_type == "simulation" && slug.current == $slug][0] {      _id,      'slug': slug.current,      title,      coverImage,      subtitle,      simulationUrl,      topic -> {        title,        bgColor { rgb },        textColor { rgb }      },      simulationScreenshots,      objectives,    }  
export type SimulationQueryResult = {
  _id: string;
  slug: string | null;
  title: string | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  subtitle: string | null;
  simulationUrl: string | null;
  topic: {
    title: string | null;
    bgColor: {
      rgb: RgbaColor | null;
    } | null;
    textColor: {
      rgb: RgbaColor | null;
    } | null;
  } | null;
  simulationScreenshots: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  objectives: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  } | {
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
} | null;

// Source: ./src/containers/topic-page/TopicPage.tsx
// Variable: TopicQuery
// Query:     *[_type == "topic" && slug.current == $slug][0] {      _id,      'slug': slug.current,      title,      subtitle,      bgColor {rgb},      textColor {rgb},      objectives,      simulationScreenshots,      simulations[] -> {        title,        subtitle,        'slug': slug.current,        coverImage      }    }  
export type TopicQueryResult = {
  _id: string;
  slug: string | null;
  title: string | null;
  subtitle: string | null;
  bgColor: {
    rgb: RgbaColor | null;
  } | null;
  textColor: {
    rgb: RgbaColor | null;
  } | null;
  objectives: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  } | {
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  simulationScreenshots: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  simulations: Array<{
    title: string | null;
    subtitle: string | null;
    slug: string | null;
    coverImage: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
  }> | null;
} | null;

// Source: ./src/containers/auth/complete-signup/CompleteSignupPage.tsx
// Variable: UserQuery
// Query:     *[_type == "user" && email == $email][0] {      _id,    }  
export type UserQueryResult = {
  _id: string;
} | null;

// Source: ./src/containers/home-page/Topics/Topics.tsx
// Variable: AllTopicsQuery
// Query:     *[_type == "topic"] {      _id,      'slug': slug.current,      title,      subtitle,      asset -> {        svgAsset      },      bgColor {rgb},      textColor {rgb}    }  
export type AllTopicsQueryResult = Array<{
  _id: string;
  slug: string | null;
  title: string | null;
  subtitle: string | null;
  asset: {
    svgAsset: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
  } | null;
  bgColor: {
    rgb: RgbaColor | null;
  } | null;
  textColor: {
    rgb: RgbaColor | null;
  } | null;
}>;

// Source: ./src/containers/simulations-page/Filters/Filters.tsx
// Variable: AllTopicsForFilterQuery
// Query:     *[_type == "topic"] {      _id,      'slug': slug.current,      title,    }  
export type AllTopicsForFilterQueryResult = Array<{
  _id: string;
  slug: string | null;
  title: string | null;
}>;

