// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = AboutUsSlice | IntroductionSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Home
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Metadata → Keywords*
 */
export interface MetadataDocumentDataKeywordsItem {
  /**
   * Keyword field in *Metadata → Keywords*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Keywords the search engine will use to index this website
   * - **API ID Path**: metadata.keywords[].keyword
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  keyword: prismic.KeyTextField;
}

/**
 * Content for Metadata documents
 */
interface MetadataDocumentData {
  /**
   * Site Name field in *Metadata*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Brand name (Tatz and Pirz Studio)
   * - **API ID Path**: metadata.site_name
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_name: prismic.KeyTextField;

  /**
   * Title field in *Metadata*
   *
   * - **Field Type**: Text
   * - **Placeholder**: This will be the name of the tab
   * - **API ID Path**: metadata.title
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Metadata*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A description of the site
   * - **API ID Path**: metadata.description
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Keywords field in *Metadata*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: metadata.keywords[]
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  keywords: prismic.GroupField<Simplify<MetadataDocumentDataKeywordsItem>>;

  /**
   * Opengraph Image field in *Metadata*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: metadata.opengraph_image
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  opengraph_image: prismic.ImageField<never>;

  /**
   * Opengraph Title field in *Metadata*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: metadata.opengraph_title
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  opengraph_title: prismic.KeyTextField;

  /**
   * Opengraph Description field in *Metadata*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: metadata.opengraph_description
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  opengraph_description: prismic.KeyTextField;
}

/**
 * Metadata document from Prismic
 *
 * - **API ID**: `metadata`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MetadataDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MetadataDocumentData>,
    "metadata",
    Lang
  >;

export type AllDocumentTypes = HomepageDocument | MetadataDocument;

/**
 * Primary content in *AboutUs → Primary*
 */
export interface AboutUsSliceDefaultPrimary {
  /**
   * Title field in *AboutUs → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *AboutUs → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Image field in *AboutUs → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for AboutUs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutUsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutUs*
 */
type AboutUsSliceVariation = AboutUsSliceDefault;

/**
 * AboutUs Shared Slice
 *
 * - **API ID**: `about_us`
 * - **Description**: AboutUs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSlice = prismic.SharedSlice<
  "about_us",
  AboutUsSliceVariation
>;

/**
 * Primary content in *Introduction → Primary*
 */
export interface IntroductionSliceDefaultPrimary {
  /**
   * Main Image field in *Introduction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.main_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  main_image: prismic.ImageField<never>;

  /**
   * Title field in *Introduction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *Introduction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;
}

/**
 * Default variation for Introduction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroductionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IntroductionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Introduction*
 */
type IntroductionSliceVariation = IntroductionSliceDefault;

/**
 * Introduction Shared Slice
 *
 * - **API ID**: `introduction`
 * - **Description**: Introduction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroductionSlice = prismic.SharedSlice<
  "introduction",
  IntroductionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      MetadataDocument,
      MetadataDocumentData,
      MetadataDocumentDataKeywordsItem,
      AllDocumentTypes,
      AboutUsSlice,
      AboutUsSliceDefaultPrimary,
      AboutUsSliceVariation,
      AboutUsSliceDefault,
      IntroductionSlice,
      IntroductionSliceDefaultPrimary,
      IntroductionSliceVariation,
      IntroductionSliceDefault,
    };
  }
}
