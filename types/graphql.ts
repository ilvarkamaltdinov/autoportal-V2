/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Article = {
  __typename?: 'Article';
  body?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ArticleCategory>;
  /** Format output date */
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<ArticleImageItem>;
  image_preview?: Maybe<ArticleImagePreview>;
  image_slide?: Maybe<Array<Maybe<ArticleImageSlide>>>;
  long_title?: Maybe<Scalars['String']['output']>;
  page_title?: Maybe<Scalars['String']['output']>;
  /** Format output date */
  publishedAt?: Maybe<Scalars['String']['output']>;
  short_description?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  /** Format output date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  video_youtube?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['String']['output']>;
};


export type ArticleCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  relative?: InputMaybe<Scalars['Boolean']['input']>;
  sub_day?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArticlePublishedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  relative?: InputMaybe<Scalars['Boolean']['input']>;
  sub_day?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArticleUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  relative?: InputMaybe<Scalars['Boolean']['input']>;
  sub_day?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleCategory = {
  __typename?: 'ArticleCategory';
  articles?: Maybe<Array<Maybe<Article>>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  long_title?: Maybe<Scalars['String']['output']>;
  page_title?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type ArticleCategoryArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleImageItem = {
  __typename?: 'ArticleImageItem';
  large?: Maybe<Scalars['String']['output']>;
  large_webp?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  medium_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
};

export type ArticleImagePreview = {
  __typename?: 'ArticleImagePreview';
  small?: Maybe<Scalars['String']['output']>;
  small_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  thumb?: Maybe<Scalars['String']['output']>;
  thumb_webp?: Maybe<Scalars['String']['output']>;
};

export type ArticleImageSlide = {
  __typename?: 'ArticleImageSlide';
  src?: Maybe<Scalars['String']['output']>;
  thumb?: Maybe<Scalars['String']['output']>;
};

export type ArticlesPaginate = {
  __typename?: 'ArticlesPaginate';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data?: Maybe<Array<Maybe<Article>>>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

export type Bank = {
  __typename?: 'Bank';
  approval?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  image_car?: Maybe<BankImageCar>;
  license_file?: Maybe<Scalars['String']['output']>;
  license_title?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  rate?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  request?: Maybe<Scalars['Int']['output']>;
  site_text?: Maybe<SiteText>;
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type BankImageCar = {
  __typename?: 'BankImageCar';
  small?: Maybe<Scalars['String']['output']>;
  small_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  thumb?: Maybe<Scalars['String']['output']>;
  thumb_webp?: Maybe<Scalars['String']['output']>;
};

export type BodyType = {
  __typename?: 'BodyType';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BodyTypeField = {
  __typename?: 'BodyTypeField';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ChosenFieldType = {
  __typename?: 'ChosenFieldType';
  bodyType?: Maybe<Array<Maybe<BodyTypeField>>>;
  driveType?: Maybe<Array<Maybe<DriveTypeField>>>;
  engineType?: Maybe<Array<Maybe<EngineTypeField>>>;
  folder?: Maybe<Array<Maybe<FolderField>>>;
  gearbox?: Maybe<Array<Maybe<GearboxField>>>;
  generation?: Maybe<Array<Maybe<GenerationField>>>;
  mark?: Maybe<Array<Maybe<MarkField>>>;
  owner?: Maybe<Array<Maybe<OwnerField>>>;
  priceFrom?: Maybe<Scalars['Int']['output']>;
  priceTo?: Maybe<Scalars['Int']['output']>;
  runFrom?: Maybe<Scalars['Int']['output']>;
  runTo?: Maybe<Scalars['Int']['output']>;
  yearFrom?: Maybe<Scalars['Int']['output']>;
  yearTo?: Maybe<Scalars['Int']['output']>;
};

export type Color = {
  __typename?: 'Color';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Complectation = {
  __typename?: 'Complectation';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Dealer = {
  __typename?: 'Dealer';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  coordinates?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image_logo?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<DealerImage>>>;
  metro?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  schedule?: Maybe<Scalars['String']['output']>;
  short_description?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  youtube_playlist_review?: Maybe<Scalars['String']['output']>;
};

export type DealerImage = {
  __typename?: 'DealerImage';
  medium?: Maybe<Scalars['String']['output']>;
  medium_webp?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
  small_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
};

export type DriveType = {
  __typename?: 'DriveType';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type DriveTypeField = {
  __typename?: 'DriveTypeField';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type EngineType = {
  __typename?: 'EngineType';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type EngineTypeField = {
  __typename?: 'EngineTypeField';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** Order object */
export type Feedback = {
  __typename?: 'Feedback';
  /** The id of the Order */
  id?: Maybe<Scalars['Int']['output']>;
};

export type Folder = {
  __typename?: 'Folder';
  /** Идентификатор */
  id: Scalars['Int']['output'];
  /** Кол-во объявлений */
  offers_count?: Maybe<Scalars['Int']['output']>;
  /** Алиас */
  slug: Scalars['String']['output'];
  /** Наименование */
  title: Scalars['String']['output'];
  /** Наименование на русском */
  title_rus?: Maybe<Scalars['String']['output']>;
};

export type FolderField = {
  __typename?: 'FolderField';
  id?: Maybe<Scalars['Int']['output']>;
  mark_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FolderGeneration = {
  __typename?: 'FolderGeneration';
  generations?: Maybe<Array<Maybe<Generation>>>;
  /** Идентификатор */
  id: Scalars['Int']['output'];
  /** Кол-во объявлений */
  offers_count?: Maybe<Scalars['Int']['output']>;
  /** Алиас */
  slug: Scalars['String']['output'];
  /** Наименование */
  title: Scalars['String']['output'];
  /** Наименование на русском */
  title_rus?: Maybe<Scalars['String']['output']>;
};

export type Gearbox = {
  __typename?: 'Gearbox';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  title_short?: Maybe<Scalars['String']['output']>;
  title_short_rus?: Maybe<Scalars['String']['output']>;
};

export type GearboxField = {
  __typename?: 'GearboxField';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  title_short?: Maybe<Scalars['String']['output']>;
  title_short_rus?: Maybe<Scalars['String']['output']>;
};

export type Generation = {
  __typename?: 'Generation';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** The count of generations */
  offers_count?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  year_begin?: Maybe<Scalars['Int']['output']>;
  year_end?: Maybe<Scalars['Int']['output']>;
};

export type GenerationField = {
  __typename?: 'GenerationField';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type KeyValue = {
  __typename?: 'KeyValue';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Mark = {
  __typename?: 'Mark';
  /** Идентификатор */
  id: Scalars['Int']['output'];
  /** Кол-во объявлений */
  offers_count?: Maybe<Scalars['Int']['output']>;
  /** Сортировка марки */
  order_column?: Maybe<Scalars['Int']['output']>;
  /** Алиас */
  slug: Scalars['String']['output'];
  /** Наименование */
  title: Scalars['String']['output'];
  /** Наименование на русском */
  title_rus?: Maybe<Scalars['String']['output']>;
};

export type MarkField = {
  __typename?: 'MarkField';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MarkFolder = {
  __typename?: 'MarkFolder';
  folders?: Maybe<Array<Maybe<FolderGeneration>>>;
  /** Идентификатор */
  id: Scalars['Int']['output'];
  /** Кол-во объявлений */
  offers_count?: Maybe<Scalars['Int']['output']>;
  /** Алиас */
  slug: Scalars['String']['output'];
  /** Наименование */
  title: Scalars['String']['output'];
  /** Наименование на русском */
  title_rus?: Maybe<Scalars['String']['output']>;
};

export type Modification = {
  __typename?: 'Modification';
  bodyType?: Maybe<Array<Maybe<TitleName>>>;
  generation?: Maybe<Array<Maybe<Generation>>>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  feedback?: Maybe<Feedback>;
};


export type MutationFeedbackArgs = {
  bank_title?: InputMaybe<Scalars['String']['input']>;
  client_age?: InputMaybe<Scalars['String']['input']>;
  client_name?: InputMaybe<Scalars['String']['input']>;
  client_phone: Scalars['String']['input'];
  client_region?: InputMaybe<Scalars['String']['input']>;
  client_session?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_body_type?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_engine?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_gearbox?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_mark?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_model?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_owners?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_price?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_run?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_year?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  credit_initial_fee?: InputMaybe<Scalars['String']['input']>;
  credit_period?: InputMaybe<Scalars['String']['input']>;
  external_id?: InputMaybe<Scalars['Int']['input']>;
  external_unique_id?: InputMaybe<Scalars['String']['input']>;
  offer_price?: InputMaybe<Scalars['String']['input']>;
  offer_title?: InputMaybe<Scalars['String']['input']>;
  site_id: Scalars['Int']['input'];
  type: Scalars['String']['input'];
  utm_campaign?: InputMaybe<Scalars['String']['input']>;
  utm_content?: InputMaybe<Scalars['String']['input']>;
  utm_medium?: InputMaybe<Scalars['String']['input']>;
  utm_source?: InputMaybe<Scalars['String']['input']>;
  utm_term?: InputMaybe<Scalars['String']['input']>;
};

export type Offer = {
  __typename?: 'Offer';
  /** Кузов */
  bodyType?: Maybe<BodyType>;
  /** Категория */
  category_enum?: Maybe<Scalars['String']['output']>;
  /** Цвет */
  color?: Maybe<Color>;
  /** Название комплектации */
  complectation?: Maybe<Complectation>;
  /** Format output date */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Автосалон */
  dealer?: Maybe<Dealer>;
  /** Текстовое описание для сайта */
  description?: Maybe<Scalars['String']['output']>;
  /** Привод */
  driveType?: Maybe<DriveType>;
  /** Двигатель */
  engineType?: Maybe<EngineType>;
  /** Мощность двигателя */
  engine_power?: Maybe<Scalars['Int']['output']>;
  /** Объем двигателя */
  engine_volume?: Maybe<Scalars['Float']['output']>;
  /** Сгруппированные дополнительные характеристики */
  equipment_groups?: Maybe<Array<Maybe<TitleValues>>>;
  /** Внешний идентификатор */
  external_id?: Maybe<Scalars['Int']['output']>;
  /** Внешний уникальный идентификатор */
  external_unique_id?: Maybe<Scalars['String']['output']>;
  /** Модель */
  folder?: Maybe<Folder>;
  /** КПП */
  gearbox?: Maybe<Gearbox>;
  /** Поколение */
  generation?: Maybe<Generation>;
  /** Идентификатор */
  id: Scalars['Int']['output'];
  /** Изображения */
  images?: Maybe<Array<Maybe<OfferImage>>>;
  /** Активное объявление */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** На складе */
  is_stock?: Maybe<Scalars['Boolean']['output']>;
  /** Марка */
  mark?: Maybe<Mark>;
  /** Модификация */
  modification?: Maybe<Modification>;
  name: Scalars['String']['output'];
  /** Владельцы */
  owner?: Maybe<Owner>;
  /** Цена, руб */
  price: Scalars['Int']['output'];
  /** Старая цена, руб */
  price_old?: Maybe<Scalars['Int']['output']>;
  /** Рейтинг */
  rating?: Maybe<Rating>;
  /** Пробег, км */
  run?: Maybe<Scalars['Int']['output']>;
  /** Format output date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Ссылка на видео */
  video?: Maybe<Scalars['String']['output']>;
  /** VIN-номер */
  vin?: Maybe<Scalars['String']['output']>;
  /** Руль */
  wheel?: Maybe<Wheel>;
  /** Год */
  year?: Maybe<Scalars['Int']['output']>;
};


export type OfferCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  relative?: InputMaybe<Scalars['Boolean']['input']>;
  sub_day?: InputMaybe<Scalars['Boolean']['input']>;
};


export type OfferUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  relative?: InputMaybe<Scalars['Boolean']['input']>;
  sub_day?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OfferFilterValues = {
  __typename?: 'OfferFilterValues';
  bodyType?: Maybe<Array<Maybe<BodyTypeField>>>;
  chosen?: Maybe<ChosenFieldType>;
  driveType?: Maybe<Array<Maybe<DriveTypeField>>>;
  engineType?: Maybe<Array<Maybe<EngineTypeField>>>;
  folder?: Maybe<Array<Maybe<FolderField>>>;
  gearbox?: Maybe<Array<Maybe<GearboxField>>>;
  generation?: Maybe<Array<Maybe<GenerationField>>>;
  mark?: Maybe<Array<Maybe<MarkField>>>;
  owner?: Maybe<Array<Maybe<OwnerField>>>;
  price?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  run?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  year?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type OfferImage = {
  __typename?: 'OfferImage';
  medium?: Maybe<Scalars['String']['output']>;
  medium_webp?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
  small_webp?: Maybe<Scalars['String']['output']>;
  /** @deprecated Используйте medium */
  src?: Maybe<Scalars['String']['output']>;
  /** @deprecated Используйте small */
  thumb?: Maybe<Scalars['String']['output']>;
  tiny?: Maybe<Scalars['String']['output']>;
  tiny_webp?: Maybe<Scalars['String']['output']>;
};

export type OfferTypePagination = {
  __typename?: 'OfferTypePagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data?: Maybe<Array<Maybe<Offer>>>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

export type OfferUnionType = OfferUrlFilterPaginationType | OfferUrlType;

export type OfferUrlFilterPaginationType = {
  __typename?: 'OfferUrlFilterPaginationType';
  body_type_id_array?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  category?: Maybe<Scalars['String']['output']>;
  engine_type_id_array?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  folder_slug_array?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  generation_slug_array?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mark_slug_array?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  year_from?: Maybe<Scalars['Int']['output']>;
};

export type OfferUrlType = {
  __typename?: 'OfferUrlType';
  external_id?: Maybe<Scalars['Int']['output']>;
  folder_slug?: Maybe<Scalars['String']['output']>;
  mark_slug?: Maybe<Scalars['String']['output']>;
};

export type Owner = {
  __typename?: 'Owner';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  number: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type OwnerField = {
  __typename?: 'OwnerField';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Статья */
  article?: Maybe<Article>;
  /** Категории статей */
  articleCategory?: Maybe<Array<Maybe<ArticleCategory>>>;
  /** Список статей */
  articlesPaginate?: Maybe<ArticlesPaginate>;
  /** Банк */
  bank?: Maybe<Bank>;
  /** Список банков */
  banks?: Maybe<Array<Maybe<Bank>>>;
  /** Автосалон */
  dealer?: Maybe<Dealer>;
  /** Список автосалонов */
  dealers?: Maybe<Array<Maybe<Dealer>>>;
  /** Список моделей */
  folders?: Maybe<Array<Maybe<Folder>>>;
  /** Список поколений */
  generations?: Maybe<Array<Maybe<Generation>>>;
  /** Список марок */
  markFolderGeneration?: Maybe<Array<Maybe<MarkFolder>>>;
  /** Список марок */
  marks?: Maybe<Array<Maybe<Mark>>>;
  /** Объявление */
  offer?: Maybe<Offer>;
  /** Фильтр объявлений */
  offerFilters?: Maybe<OfferFilterValues>;
  /** Определение объявление или фильтр */
  offerUrl?: Maybe<OfferUnionType>;
  /** Список объявлений */
  offers?: Maybe<OfferTypePagination>;
  /** Список регионов */
  regions?: Maybe<Array<Maybe<Region>>>;
  /** SEO теги */
  seoTag?: Maybe<SeoTag>;
  /** Настройки сайта */
  settings?: Maybe<SiteSetting>;
  /** Список баннеров */
  slides?: Maybe<Array<Maybe<Slide>>>;
  /** Список категорий услуг сервиса */
  stationCategory?: Maybe<Array<Maybe<StationCategory>>>;
  /** Список историй */
  stories?: Maybe<Array<Maybe<Story>>>;
  /** Список содержимого историй */
  storyContents?: Maybe<Array<Maybe<StoryContent>>>;
};


export type QueryArticleArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticleCategoryArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryArticlesPaginateArgs = {
  category_url?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBankArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBanksArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDealerArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDealersArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFoldersArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  mark_id?: InputMaybe<Scalars['Int']['input']>;
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGenerationsArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  folder_id?: InputMaybe<Scalars['Int']['input']>;
  folder_slug?: InputMaybe<Scalars['String']['input']>;
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMarkFolderGenerationArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMarksArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOfferArgs = {
  external_id?: InputMaybe<Scalars['Int']['input']>;
  folder_slug?: InputMaybe<Scalars['String']['input']>;
  generation_slug?: InputMaybe<Scalars['String']['input']>;
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOfferFiltersArgs = {
  body_type_id?: InputMaybe<Scalars['Int']['input']>;
  body_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category?: InputMaybe<Scalars['String']['input']>;
  drive_type_id?: InputMaybe<Scalars['Int']['input']>;
  drive_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  engine_type_id?: InputMaybe<Scalars['Int']['input']>;
  engine_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  except_external_id?: InputMaybe<Scalars['Int']['input']>;
  external_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  folder_id?: InputMaybe<Scalars['Int']['input']>;
  folder_slug?: InputMaybe<Scalars['String']['input']>;
  folder_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gearbox_id?: InputMaybe<Scalars['Int']['input']>;
  gearbox_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  generation_slug?: InputMaybe<Scalars['String']['input']>;
  generation_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  mark_id?: InputMaybe<Scalars['Int']['input']>;
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  mark_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_id?: InputMaybe<Scalars['Int']['input']>;
  owner_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  price_from?: InputMaybe<Scalars['Int']['input']>;
  price_to?: InputMaybe<Scalars['Int']['input']>;
  run_from?: InputMaybe<Scalars['Int']['input']>;
  run_to?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  year_from?: InputMaybe<Scalars['Int']['input']>;
  year_to?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOfferUrlArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOffersArgs = {
  body_type_id?: InputMaybe<Scalars['Int']['input']>;
  body_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category?: InputMaybe<Scalars['String']['input']>;
  drive_type_id?: InputMaybe<Scalars['Int']['input']>;
  drive_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  engine_type_id?: InputMaybe<Scalars['Int']['input']>;
  engine_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  except_external_id?: InputMaybe<Scalars['Int']['input']>;
  external_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  folder_id?: InputMaybe<Scalars['Int']['input']>;
  folder_slug?: InputMaybe<Scalars['String']['input']>;
  folder_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gearbox_id?: InputMaybe<Scalars['Int']['input']>;
  gearbox_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  generation_slug?: InputMaybe<Scalars['String']['input']>;
  generation_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  mark_id?: InputMaybe<Scalars['Int']['input']>;
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  mark_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_id?: InputMaybe<Scalars['Int']['input']>;
  owner_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  price_from?: InputMaybe<Scalars['Int']['input']>;
  price_to?: InputMaybe<Scalars['Int']['input']>;
  run_from?: InputMaybe<Scalars['Int']['input']>;
  run_to?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  year_from?: InputMaybe<Scalars['Int']['input']>;
  year_to?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRegionsArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySeoTagArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySettingsArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySlidesArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStationCategoryArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStoriesArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStoryContentsArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  story_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Rating = {
  __typename?: 'Rating';
  rating_body?: Maybe<Scalars['Float']['output']>;
  rating_interior?: Maybe<Scalars['Float']['output']>;
  rating_technical?: Maybe<Scalars['Float']['output']>;
  rating_total?: Maybe<Scalars['Float']['output']>;
};

export type Region = {
  __typename?: 'Region';
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SeoTag = {
  __typename?: 'SeoTag';
  crumbs?: Maybe<Array<Maybe<SeoTagCrumbs>>>;
  /** The description of the seo tags */
  description?: Maybe<Scalars['String']['output']>;
  /** The title of the seo tags */
  page_title?: Maybe<Scalars['String']['output']>;
  site_text?: Maybe<SiteText>;
  /** The title of the seo tags */
  title?: Maybe<Scalars['String']['output']>;
};

export type SeoTagCrumbs = {
  __typename?: 'SeoTagCrumbs';
  link?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SiteSetting = {
  __typename?: 'SiteSetting';
  id: Scalars['Int']['output'];
  settings?: Maybe<Array<Maybe<KeyValue>>>;
};

export type SiteText = {
  __typename?: 'SiteText';
  body?: Maybe<Scalars['String']['output']>;
};

export type Slide = {
  __typename?: 'Slide';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<SlideImageItemType>;
  image_element?: Maybe<SlideImageElementItemType>;
  link?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SlideImageElementItemType = {
  __typename?: 'SlideImageElementItemType';
  small?: Maybe<Scalars['String']['output']>;
  small_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  thumb?: Maybe<Scalars['String']['output']>;
  thumb_webp?: Maybe<Scalars['String']['output']>;
};

export type SlideImageItemType = {
  __typename?: 'SlideImageItemType';
  slide_1x?: Maybe<Scalars['String']['output']>;
  slide_1x_webp?: Maybe<Scalars['String']['output']>;
  slide_2x?: Maybe<Scalars['String']['output']>;
  slide_2x_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
};

export type Station = {
  __typename?: 'Station';
  id: Scalars['Int']['output'];
  image?: Maybe<StationImage>;
  price?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type StationCategory = {
  __typename?: 'StationCategory';
  id: Scalars['Int']['output'];
  stations?: Maybe<Array<Maybe<Station>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type StationImage = {
  __typename?: 'StationImage';
  large?: Maybe<Scalars['String']['output']>;
  large_webp?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  medium_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
};

export type Story = {
  __typename?: 'Story';
  id: Scalars['Int']['output'];
  image?: Maybe<StoryImage>;
  stories?: Maybe<Array<Maybe<StoryContent>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type StoryContent = {
  __typename?: 'StoryContent';
  body?: Maybe<Scalars['String']['output']>;
  button_color?: Maybe<Scalars['String']['output']>;
  button_link?: Maybe<Scalars['String']['output']>;
  button_title?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<StoryImageContent>;
  title?: Maybe<Scalars['String']['output']>;
};

export type StoryImage = {
  __typename?: 'StoryImage';
  src?: Maybe<Scalars['String']['output']>;
  thumb?: Maybe<Scalars['String']['output']>;
  thumb_webp?: Maybe<Scalars['String']['output']>;
  tiny?: Maybe<Scalars['String']['output']>;
  tiny_webp?: Maybe<Scalars['String']['output']>;
  xs?: Maybe<Scalars['String']['output']>;
  xs_webp?: Maybe<Scalars['String']['output']>;
};

export type StoryImageContent = {
  __typename?: 'StoryImageContent';
  medium?: Maybe<Scalars['String']['output']>;
  medium_webp?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
  small_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
};

export type TitleName = {
  __typename?: 'TitleName';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TitleValues = {
  __typename?: 'TitleValues';
  title?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Wheel = {
  __typename?: 'Wheel';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BankListTypeFragment = { __typename?: 'Bank', id: number, name: string, slug: string, request?: number | null, approval?: number | null, rating?: number | null, rate?: number | null, image?: string | null };

export type BankTypeFragment = { __typename?: 'Bank', id: number, name: string, slug: string, rate?: number | null, title?: string | null, image?: string | null, image_car?: { __typename?: 'BankImageCar', thumb?: string | null, small?: string | null, thumb_webp?: string | null, small_webp?: string | null } | null, site_text?: { __typename?: 'SiteText', body?: string | null } | null };

export type DealerContactFragment = { __typename?: 'Dealer', id: number, slug?: string | null, address?: string | null };

export type DealerListFragment = { __typename?: 'Dealer', id: number, phone?: string | null, title?: string | null, metro?: string | null, short_description?: string | null, youtube_playlist_review?: string | null, slug?: string | null, address?: string | null, rating?: number | null, schedule?: string | null, site?: string | null, images?: Array<{ __typename?: 'DealerImage', small?: string | null, medium?: string | null, small_webp?: string | null, medium_webp?: string | null } | null> | null };

export type DealerPageFragment = { __typename?: 'Dealer', id: number, slug?: string | null, title?: string | null, city?: string | null, address?: string | null, metro?: string | null, schedule?: string | null, phone?: string | null, coordinates?: string | null, site?: string | null, rating?: number | null, short_description?: string | null, description?: string | null, image_logo?: string | null, images?: Array<{ __typename?: 'DealerImage', small?: string | null, medium?: string | null, small_webp?: string | null, medium_webp?: string | null } | null> | null };

export type DealerReviewListFragment = { __typename?: 'Dealer', id: number, title?: string | null, youtube_playlist_review?: string | null };

export type OfferFilterValuesFragment = { __typename?: 'OfferFilterValues', year?: Array<number | null> | null, price?: Array<number | null> | null, mark?: Array<{ __typename?: 'MarkField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, folder?: Array<{ __typename?: 'FolderField', title?: string | null, id?: number | null, slug?: string | null, mark_id?: number | null } | null> | null, generation?: Array<{ __typename?: 'GenerationField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, gearbox?: Array<{ __typename?: 'GearboxField', title?: string | null, title_short_rus?: string | null, id?: number | null, slug?: string | null } | null> | null, engineType?: Array<{ __typename?: 'EngineTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, driveType?: Array<{ __typename?: 'DriveTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, bodyType?: Array<{ __typename?: 'BodyTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, chosen?: { __typename?: 'ChosenFieldType', yearFrom?: number | null, yearTo?: number | null, priceFrom?: number | null, priceTo?: number | null, mark?: Array<{ __typename?: 'MarkField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, folder?: Array<{ __typename?: 'FolderField', title?: string | null, id?: number | null, slug?: string | null, mark_id?: number | null } | null> | null, generation?: Array<{ __typename?: 'GenerationField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, gearbox?: Array<{ __typename?: 'GearboxField', title?: string | null, title_short_rus?: string | null, id?: number | null, slug?: string | null } | null> | null, engineType?: Array<{ __typename?: 'EngineTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, driveType?: Array<{ __typename?: 'DriveTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, bodyType?: Array<{ __typename?: 'BodyTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null } | null };

export type OnlyFilterValuesFragment = { __typename?: 'OfferFilterValues', mark?: Array<{ __typename?: 'MarkField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, folder?: Array<{ __typename?: 'FolderField', title?: string | null, id?: number | null, slug?: string | null, mark_id?: number | null } | null> | null, generation?: Array<{ __typename?: 'GenerationField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, chosen?: { __typename?: 'ChosenFieldType', yearFrom?: number | null, yearTo?: number | null, priceFrom?: number | null, priceTo?: number | null, mark?: Array<{ __typename?: 'MarkField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, folder?: Array<{ __typename?: 'FolderField', title?: string | null, id?: number | null, slug?: string | null, mark_id?: number | null } | null> | null, generation?: Array<{ __typename?: 'GenerationField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, gearbox?: Array<{ __typename?: 'GearboxField', title?: string | null, title_short_rus?: string | null, id?: number | null, slug?: string | null } | null> | null, engineType?: Array<{ __typename?: 'EngineTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, driveType?: Array<{ __typename?: 'DriveTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, bodyType?: Array<{ __typename?: 'BodyTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null } | null };

export type BodyTypeFieldTypeFragment = { __typename?: 'BodyTypeField', title?: string | null, id?: number | null, slug?: string | null };

export type ChosenFieldTypeFragment = { __typename?: 'ChosenFieldType', yearFrom?: number | null, yearTo?: number | null, priceFrom?: number | null, priceTo?: number | null, mark?: Array<{ __typename?: 'MarkField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, folder?: Array<{ __typename?: 'FolderField', title?: string | null, id?: number | null, slug?: string | null, mark_id?: number | null } | null> | null, generation?: Array<{ __typename?: 'GenerationField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, gearbox?: Array<{ __typename?: 'GearboxField', title?: string | null, title_short_rus?: string | null, id?: number | null, slug?: string | null } | null> | null, engineType?: Array<{ __typename?: 'EngineTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, driveType?: Array<{ __typename?: 'DriveTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, bodyType?: Array<{ __typename?: 'BodyTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null };

export type DriveTypeFieldTypeFragment = { __typename?: 'DriveTypeField', title?: string | null, id?: number | null, slug?: string | null };

export type EngineTypeFieldTypeFragment = { __typename?: 'EngineTypeField', title?: string | null, id?: number | null, slug?: string | null };

export type FolderFieldTypeFragment = { __typename?: 'FolderField', title?: string | null, id?: number | null, slug?: string | null, mark_id?: number | null };

export type GearboxFieldTypeFragment = { __typename?: 'GearboxField', title?: string | null, title_short_rus?: string | null, id?: number | null, slug?: string | null };

export type GenerationFieldTypeFragment = { __typename?: 'GenerationField', title?: string | null, id?: number | null, slug?: string | null };

export type MarkFieldTypeFragment = { __typename?: 'MarkField', title?: string | null, id?: number | null, slug?: string | null };

export type OwnerFieldTypeFragment = { __typename?: 'OwnerField', title?: string | null, id?: number | null, slug?: string | null };

export type GenerationTypeFragment = { __typename?: 'Generation', id?: number | null, name?: string | null, year_begin?: number | null, year_end?: number | null, slug: string, offers_count?: number | null };

export type DealerImageFragment = { __typename?: 'DealerImage', small?: string | null, medium?: string | null, small_webp?: string | null, medium_webp?: string | null };

export type OfferPageFragment = { __typename?: 'Offer', id: number, is_active?: boolean | null, is_stock?: boolean | null, external_id?: number | null, name: string, category_enum?: string | null, price: number, price_old?: number | null, run?: number | null, vin?: string | null, year?: number | null, description?: string | null, createdAt?: string | null, engine_power?: number | null, engine_volume?: number | null, rating?: { __typename?: 'Rating', rating_total?: number | null, rating_body?: number | null, rating_interior?: number | null, rating_technical?: number | null } | null, modification?: { __typename?: 'Modification', id: number, name?: string | null } | null, complectation?: { __typename?: 'Complectation', id: number, name?: string | null } | null, color?: { __typename?: 'Color', id: number, title?: string | null, name?: string | null } | null, images?: Array<{ __typename?: 'OfferImage', original?: string | null, small_webp?: string | null, small?: string | null, medium_webp?: string | null, medium?: string | null } | null> | null, mark?: { __typename?: 'Mark', id: number, slug: string, title: string } | null, folder?: { __typename?: 'Folder', id: number, slug: string, title: string } | null, owner?: { __typename?: 'Owner', id: number, title?: string | null, number: number } | null, driveType?: { __typename?: 'DriveType', id: number, title?: string | null, name?: string | null } | null, bodyType?: { __typename?: 'BodyType', id: number, title?: string | null, name?: string | null } | null, gearbox?: { __typename?: 'Gearbox', id: number, title?: string | null, title_short_rus?: string | null, name?: string | null } | null, engineType?: { __typename?: 'EngineType', id: number, title?: string | null, name?: string | null } | null, generation?: { __typename?: 'Generation', id?: number | null, slug: string, name?: string | null } | null, equipment_groups?: Array<{ __typename?: 'TitleValues', title?: string | null, values?: Array<string | null> | null } | null> | null, dealer?: { __typename?: 'Dealer', id: number, slug?: string | null, title?: string | null, address?: string | null, city?: string | null, metro?: string | null, schedule?: string | null, phone?: string | null, rating?: number | null, image_logo?: string | null } | null };

export type OfferPaginationFragment = { __typename?: 'OfferTypePagination', last_page: number, current_page: number, total: number, has_more_pages: boolean, data?: Array<{ __typename?: 'Offer', id: number, external_id?: number | null, is_stock?: boolean | null, external_unique_id?: string | null, name: string, category_enum?: string | null, price: number, price_old?: number | null, run?: number | null, vin?: string | null, year?: number | null, createdAt?: string | null, engine_power?: number | null, engine_volume?: number | null, color?: { __typename?: 'Color', id: number, title?: string | null, name?: string | null } | null, rating?: { __typename?: 'Rating', rating_total?: number | null, rating_body?: number | null, rating_interior?: number | null, rating_technical?: number | null } | null, mark?: { __typename?: 'Mark', id: number, slug: string, title: string } | null, folder?: { __typename?: 'Folder', id: number, slug: string, title: string } | null, images?: Array<{ __typename?: 'OfferImage', small_webp?: string | null } | null> | null, owner?: { __typename?: 'Owner', id: number, title?: string | null, number: number } | null, driveType?: { __typename?: 'DriveType', id: number, title?: string | null, name?: string | null } | null, bodyType?: { __typename?: 'BodyType', id: number, title?: string | null, name?: string | null } | null, gearbox?: { __typename?: 'Gearbox', id: number, title?: string | null, title_short_rus?: string | null, name?: string | null } | null, engineType?: { __typename?: 'EngineType', id: number, title?: string | null, name?: string | null } | null, generation?: { __typename?: 'Generation', id?: number | null, slug: string, name?: string | null } | null, dealer?: { __typename?: 'Dealer', id: number, phone?: string | null, slug?: string | null, title?: string | null, image_logo?: string | null } | null } | null> | null };

export type BodyTypeTypeFragment = { __typename?: 'BodyType', id: number, title?: string | null, name?: string | null };

export type ColorTypeFragment = { __typename?: 'Color', id: number, title?: string | null, name?: string | null };

export type ComplectationTypeFragment = { __typename?: 'Complectation', id: number, name?: string | null };

export type DealerMiniTypeFragment = { __typename?: 'Dealer', id: number, phone?: string | null, slug?: string | null, title?: string | null, image_logo?: string | null };

export type DealerTypeFragment = { __typename?: 'Dealer', id: number, slug?: string | null, title?: string | null, address?: string | null, city?: string | null, metro?: string | null, schedule?: string | null, phone?: string | null, rating?: number | null, image_logo?: string | null };

export type DriveTypeTypeFragment = { __typename?: 'DriveType', id: number, title?: string | null, name?: string | null };

export type EngineTypeTypeFragment = { __typename?: 'EngineType', id: number, title?: string | null, name?: string | null };

export type EquipmentTypeFragment = { __typename?: 'TitleValues', title?: string | null, values?: Array<string | null> | null };

export type FolderTypeFragment = { __typename?: 'Folder', id: number, slug: string, title: string };

export type GearboxTypeFragment = { __typename?: 'Gearbox', id: number, title?: string | null, title_short_rus?: string | null, name?: string | null };

export type GenerationOfferTypeFragment = { __typename?: 'Generation', id?: number | null, slug: string, name?: string | null };

export type ImageAllTypeFragment = { __typename?: 'OfferImage', original?: string | null, small_webp?: string | null, small?: string | null, medium_webp?: string | null, medium?: string | null };

export type ImageThumbTypeFragment = { __typename?: 'OfferImage', thumb?: string | null, original?: string | null };

export type MarkTypeFragment = { __typename?: 'Mark', id: number, slug: string, title: string };

export type ModificationTypeFragment = { __typename?: 'Modification', id: number, name?: string | null };

export type OwnerTypeFragment = { __typename?: 'Owner', id: number, title?: string | null, number: number };

export type WheelTypeFragment = { __typename?: 'Wheel', id: number, name?: string | null };

export type SeoTagFragment = { __typename?: 'SeoTag', page_title?: string | null, title?: string | null, description?: string | null, crumbs?: Array<{ __typename?: 'SeoTagCrumbs', title?: string | null, link?: string | null } | null> | null, site_text?: { __typename?: 'SiteText', body?: string | null } | null };

export type SeoTagCrumbsFragment = { __typename?: 'SeoTagCrumbs', title?: string | null, link?: string | null };

export type SiteTextFragment = { __typename?: 'SiteText', body?: string | null };

export type StoryFragment = { __typename?: 'Story', id: number, title?: string | null, stories?: Array<{ __typename?: 'StoryContent', id: number, body?: string | null, title?: string | null, button_link?: string | null, image?: { __typename?: 'StoryImageContent', medium?: string | null, medium_webp?: string | null, small?: string | null, small_webp?: string | null, src?: string | null } | null } | null> | null, image?: { __typename?: 'StoryImage', tiny?: string | null, tiny_webp?: string | null, xs?: string | null, xs_webp?: string | null } | null };

export type StoryContentFragment = { __typename?: 'StoryContent', id: number, title?: string | null, body?: string | null, button_title?: string | null, button_link?: string | null, button_color?: string | null, image?: { __typename?: 'StoryImageContent', small?: string | null, small_webp?: string | null, medium?: string | null, medium_webp?: string | null } | null };

export type OfferUrlFragment = { __typename?: 'OfferUrlType', mark_slug?: string | null, folder_slug?: string | null, external_id?: number | null };

export type OfferUrlFilterPaginationFragment = { __typename?: 'OfferUrlFilterPaginationType', mark_slug_array?: Array<string | null> | null, folder_slug_array?: Array<string | null> | null, generation_slug_array?: Array<string | null> | null, year_from?: number | null, engine_type_id_array?: Array<number | null> | null, body_type_id_array?: Array<string | null> | null, category?: string | null };

export type FeedbackMutationVariables = Exact<{
  external_id?: InputMaybe<Scalars['Int']['input']>;
  site_id: Scalars['Int']['input'];
  type: Scalars['String']['input'];
  client_name?: InputMaybe<Scalars['String']['input']>;
  client_phone: Scalars['String']['input'];
  client_age?: InputMaybe<Scalars['String']['input']>;
  client_region?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_mark?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_model?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_run?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_year?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_body_type?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_price?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_owners?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_gearbox?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_engine?: InputMaybe<Scalars['String']['input']>;
  credit_initial_fee?: InputMaybe<Scalars['String']['input']>;
  credit_period?: InputMaybe<Scalars['String']['input']>;
  utm_source?: InputMaybe<Scalars['String']['input']>;
  utm_content?: InputMaybe<Scalars['String']['input']>;
  utm_medium?: InputMaybe<Scalars['String']['input']>;
  utm_campaign?: InputMaybe<Scalars['String']['input']>;
  utm_term?: InputMaybe<Scalars['String']['input']>;
  offer_title?: InputMaybe<Scalars['String']['input']>;
  offer_price?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
}>;


export type FeedbackMutation = { __typename?: 'Mutation', feedback?: { __typename?: 'Feedback', id?: number | null } | null };

export type SendFeedbackMutationVariables = Exact<{
  site_id: Scalars['Int']['input'];
  type_enum: Scalars['String']['input'];
  client_name?: InputMaybe<Scalars['String']['input']>;
  client_phone: Scalars['String']['input'];
  client_age?: InputMaybe<Scalars['String']['input']>;
  client_region?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_mark?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_model?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_run?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_year?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_body_type?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_price?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_owners?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_gearbox?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_engine?: InputMaybe<Scalars['String']['input']>;
  credit_initial_fee?: InputMaybe<Scalars['String']['input']>;
  credit_period?: InputMaybe<Scalars['String']['input']>;
  utm_source?: InputMaybe<Scalars['String']['input']>;
  utm_content?: InputMaybe<Scalars['String']['input']>;
  utm_medium?: InputMaybe<Scalars['String']['input']>;
  utm_campaign?: InputMaybe<Scalars['String']['input']>;
  utm_term?: InputMaybe<Scalars['String']['input']>;
  offer_title?: InputMaybe<Scalars['String']['input']>;
  offer_price?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
}>;


export type SendFeedbackMutation = { __typename?: 'Mutation', feedback?: { __typename?: 'Feedback', id?: number | null } | null };

export type BankQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
}>;


export type BankQuery = { __typename?: 'Query', bank?: { __typename?: 'Bank', id: number, name: string, slug: string, rate?: number | null, title?: string | null, image?: string | null, image_car?: { __typename?: 'BankImageCar', thumb?: string | null, small?: string | null, thumb_webp?: string | null, small_webp?: string | null } | null, site_text?: { __typename?: 'SiteText', body?: string | null } | null } | null };

export type BanksQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
}>;


export type BanksQuery = { __typename?: 'Query', banks?: Array<{ __typename?: 'Bank', id: number, name: string, slug: string, request?: number | null, approval?: number | null, rating?: number | null, rate?: number | null, image?: string | null } | null> | null };

export type ArticleQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
}>;


export type ArticleQuery = { __typename?: 'Query', article?: { __typename?: 'Article', id: number, slug?: string | null, page_title?: string | null, long_title?: string | null, short_description?: string | null, description?: string | null, url?: string | null, views?: string | null, video_youtube?: string | null, body?: string | null, createdAt?: string | null, image_preview?: { __typename?: 'ArticleImagePreview', thumb?: string | null } | null, image_slide?: Array<{ __typename?: 'ArticleImageSlide', src?: string | null } | null> | null, image?: { __typename?: 'ArticleImageItem', medium?: string | null, large?: string | null, medium_webp?: string | null, large_webp?: string | null, src?: string | null } | null } | null };

export type ArticleCategoryQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ArticleCategoryQuery = { __typename?: 'Query', articleCategory?: Array<{ __typename?: 'ArticleCategory', id: number, slug?: string | null, page_title?: string | null, url?: string | null, articles?: Array<{ __typename?: 'Article', id: number, page_title?: string | null, views?: string | null, url?: string | null, createdAt?: string | null, image_preview?: { __typename?: 'ArticleImagePreview', thumb?: string | null, small?: string | null, thumb_webp?: string | null, small_webp?: string | null } | null } | null> | null } | null> | null };

export type ArticlesPaginateQueryVariables = Exact<{
  site_id?: InputMaybe<Scalars['Int']['input']>;
  category_url?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ArticlesPaginateQuery = { __typename?: 'Query', articlesPaginate?: { __typename?: 'ArticlesPaginate', last_page: number, data?: Array<{ __typename?: 'Article', id: number, page_title?: string | null, views?: string | null, url?: string | null, createdAt?: string | null, image_preview?: { __typename?: 'ArticleImagePreview', thumb?: string | null, small?: string | null, thumb_webp?: string | null, small_webp?: string | null } | null } | null> | null } | null };

export type DealerQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
}>;


export type DealerQuery = { __typename?: 'Query', dealer?: { __typename?: 'Dealer', id: number, slug?: string | null, title?: string | null, city?: string | null, address?: string | null, metro?: string | null, schedule?: string | null, phone?: string | null, coordinates?: string | null, site?: string | null, rating?: number | null, short_description?: string | null, description?: string | null, image_logo?: string | null, images?: Array<{ __typename?: 'DealerImage', small?: string | null, medium?: string | null, small_webp?: string | null, medium_webp?: string | null } | null> | null } | null };

export type DealersReviewsQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
}>;


export type DealersReviewsQuery = { __typename?: 'Query', dealers?: Array<{ __typename?: 'Dealer', id: number, title?: string | null, youtube_playlist_review?: string | null } | null> | null };

export type DealersQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
}>;


export type DealersQuery = { __typename?: 'Query', dealers?: Array<{ __typename?: 'Dealer', id: number, phone?: string | null, title?: string | null, metro?: string | null, short_description?: string | null, youtube_playlist_review?: string | null, slug?: string | null, address?: string | null, rating?: number | null, schedule?: string | null, site?: string | null, images?: Array<{ __typename?: 'DealerImage', small?: string | null, medium?: string | null, small_webp?: string | null, medium_webp?: string | null } | null> | null } | null> | null };

export type DealersContactQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
}>;


export type DealersContactQuery = { __typename?: 'Query', dealers?: Array<{ __typename?: 'Dealer', id: number, slug?: string | null, address?: string | null } | null> | null };

export type FiltersCountQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  mark_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  folder_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  sort?: InputMaybe<Scalars['String']['input']>;
  generation_slug?: InputMaybe<Scalars['String']['input']>;
  gearbox_id?: InputMaybe<Scalars['Int']['input']>;
  body_type_id?: InputMaybe<Scalars['Int']['input']>;
  drive_type_id?: InputMaybe<Scalars['Int']['input']>;
  owner_id?: InputMaybe<Scalars['Int']['input']>;
  year_from?: InputMaybe<Scalars['Int']['input']>;
  year_to?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FiltersCountQuery = { __typename?: 'Query', offers?: { __typename?: 'OfferTypePagination', total: number } | null };

export type FoldersQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
  mark_id?: InputMaybe<Scalars['Int']['input']>;
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
}>;


export type FoldersQuery = { __typename?: 'Query', folders?: Array<{ __typename?: 'Folder', id: number, title: string, title_rus?: string | null, slug: string, offers_count?: number | null } | null> | null };

export type GenerationsQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
  folder_id?: InputMaybe<Scalars['Int']['input']>;
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  folder_slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GenerationsQuery = { __typename?: 'Query', generations?: Array<{ __typename?: 'Generation', id?: number | null, name?: string | null, year_begin?: number | null, year_end?: number | null, slug: string, offers_count?: number | null } | null> | null };

export type MarkFolderGenerationQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
  category?: InputMaybe<Scalars['String']['input']>;
}>;


export type MarkFolderGenerationQuery = { __typename?: 'Query', markFolderGeneration?: Array<{ __typename?: 'MarkFolder', id: number, title: string, slug: string, offers_count?: number | null, folders?: Array<{ __typename?: 'FolderGeneration', id: number, title: string, slug: string, offers_count?: number | null, generations?: Array<{ __typename?: 'Generation', id?: number | null, name?: string | null, year_begin?: number | null, year_end?: number | null, slug: string, offers_count?: number | null } | null> | null } | null> | null } | null> | null };

export type MarksQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
  category?: InputMaybe<Scalars['String']['input']>;
}>;


export type MarksQuery = { __typename?: 'Query', marks?: Array<{ __typename?: 'Mark', id: number, title: string, slug: string, offers_count?: number | null } | null> | null };

export type OfferQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  folder_slug: Scalars['String']['input'];
  external_id: Scalars['Int']['input'];
  dateFormat?: InputMaybe<Scalars['String']['input']>;
}>;


export type OfferQuery = { __typename?: 'Query', offer?: { __typename?: 'Offer', id: number, is_active?: boolean | null, is_stock?: boolean | null, external_id?: number | null, name: string, category_enum?: string | null, price: number, price_old?: number | null, run?: number | null, vin?: string | null, year?: number | null, description?: string | null, createdAt?: string | null, engine_power?: number | null, engine_volume?: number | null, rating?: { __typename?: 'Rating', rating_total?: number | null, rating_body?: number | null, rating_interior?: number | null, rating_technical?: number | null } | null, modification?: { __typename?: 'Modification', id: number, name?: string | null } | null, complectation?: { __typename?: 'Complectation', id: number, name?: string | null } | null, color?: { __typename?: 'Color', id: number, title?: string | null, name?: string | null } | null, images?: Array<{ __typename?: 'OfferImage', original?: string | null, small_webp?: string | null, small?: string | null, medium_webp?: string | null, medium?: string | null } | null> | null, mark?: { __typename?: 'Mark', id: number, slug: string, title: string } | null, folder?: { __typename?: 'Folder', id: number, slug: string, title: string } | null, owner?: { __typename?: 'Owner', id: number, title?: string | null, number: number } | null, driveType?: { __typename?: 'DriveType', id: number, title?: string | null, name?: string | null } | null, bodyType?: { __typename?: 'BodyType', id: number, title?: string | null, name?: string | null } | null, gearbox?: { __typename?: 'Gearbox', id: number, title?: string | null, title_short_rus?: string | null, name?: string | null } | null, engineType?: { __typename?: 'EngineType', id: number, title?: string | null, name?: string | null } | null, generation?: { __typename?: 'Generation', id?: number | null, slug: string, name?: string | null } | null, equipment_groups?: Array<{ __typename?: 'TitleValues', title?: string | null, values?: Array<string | null> | null } | null> | null, dealer?: { __typename?: 'Dealer', id: number, slug?: string | null, title?: string | null, address?: string | null, city?: string | null, metro?: string | null, schedule?: string | null, phone?: string | null, rating?: number | null, image_logo?: string | null } | null } | null };

export type OfferFiltersQueryVariables = Exact<{
  site_id?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  mark_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  folder_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  generation_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  engine_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  body_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  gearbox_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  drive_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  owner_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  year_from?: InputMaybe<Scalars['Int']['input']>;
  year_to?: InputMaybe<Scalars['Int']['input']>;
  price_from?: InputMaybe<Scalars['Int']['input']>;
  price_to?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
}>;


export type OfferFiltersQuery = { __typename?: 'Query', offerFilters?: { __typename?: 'OfferFilterValues', year?: Array<number | null> | null, price?: Array<number | null> | null, mark?: Array<{ __typename?: 'MarkField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, folder?: Array<{ __typename?: 'FolderField', title?: string | null, id?: number | null, slug?: string | null, mark_id?: number | null } | null> | null, generation?: Array<{ __typename?: 'GenerationField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, gearbox?: Array<{ __typename?: 'GearboxField', title?: string | null, title_short_rus?: string | null, id?: number | null, slug?: string | null } | null> | null, engineType?: Array<{ __typename?: 'EngineTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, driveType?: Array<{ __typename?: 'DriveTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, bodyType?: Array<{ __typename?: 'BodyTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, chosen?: { __typename?: 'ChosenFieldType', yearFrom?: number | null, yearTo?: number | null, priceFrom?: number | null, priceTo?: number | null, mark?: Array<{ __typename?: 'MarkField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, folder?: Array<{ __typename?: 'FolderField', title?: string | null, id?: number | null, slug?: string | null, mark_id?: number | null } | null> | null, generation?: Array<{ __typename?: 'GenerationField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, gearbox?: Array<{ __typename?: 'GearboxField', title?: string | null, title_short_rus?: string | null, id?: number | null, slug?: string | null } | null> | null, engineType?: Array<{ __typename?: 'EngineTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, driveType?: Array<{ __typename?: 'DriveTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, bodyType?: Array<{ __typename?: 'BodyTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null } | null } | null };

export type OfferUrlQueryVariables = Exact<{
  site_id?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
}>;


export type OfferUrlQuery = { __typename?: 'Query', offerUrl?: { __typename: 'OfferUrlFilterPaginationType', mark_slug_array?: Array<string | null> | null, folder_slug_array?: Array<string | null> | null, generation_slug_array?: Array<string | null> | null, year_from?: number | null, engine_type_id_array?: Array<number | null> | null, body_type_id_array?: Array<string | null> | null, category?: string | null } | { __typename: 'OfferUrlType', mark_slug?: string | null, folder_slug?: string | null, external_id?: number | null } | null };

export type OffersQueryVariables = Exact<{
  site_id?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  mark_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  folder_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  folder_slug?: InputMaybe<Scalars['String']['input']>;
  external_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  sort?: InputMaybe<Scalars['String']['input']>;
  except_external_id?: InputMaybe<Scalars['Int']['input']>;
  generation_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  generation_slug?: InputMaybe<Scalars['String']['input']>;
  engine_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  body_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  gearbox_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  drive_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  owner_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  year_from?: InputMaybe<Scalars['Int']['input']>;
  year_to?: InputMaybe<Scalars['Int']['input']>;
  price_from?: InputMaybe<Scalars['Int']['input']>;
  price_to?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  url?: InputMaybe<Scalars['String']['input']>;
  dateFormat?: InputMaybe<Scalars['String']['input']>;
}>;


export type OffersQuery = { __typename?: 'Query', offers?: { __typename?: 'OfferTypePagination', last_page: number, current_page: number, total: number, has_more_pages: boolean, data?: Array<{ __typename?: 'Offer', id: number, external_id?: number | null, is_stock?: boolean | null, external_unique_id?: string | null, name: string, category_enum?: string | null, price: number, price_old?: number | null, run?: number | null, vin?: string | null, year?: number | null, createdAt?: string | null, engine_power?: number | null, engine_volume?: number | null, color?: { __typename?: 'Color', id: number, title?: string | null, name?: string | null } | null, rating?: { __typename?: 'Rating', rating_total?: number | null, rating_body?: number | null, rating_interior?: number | null, rating_technical?: number | null } | null, mark?: { __typename?: 'Mark', id: number, slug: string, title: string } | null, folder?: { __typename?: 'Folder', id: number, slug: string, title: string } | null, images?: Array<{ __typename?: 'OfferImage', small_webp?: string | null } | null> | null, owner?: { __typename?: 'Owner', id: number, title?: string | null, number: number } | null, driveType?: { __typename?: 'DriveType', id: number, title?: string | null, name?: string | null } | null, bodyType?: { __typename?: 'BodyType', id: number, title?: string | null, name?: string | null } | null, gearbox?: { __typename?: 'Gearbox', id: number, title?: string | null, title_short_rus?: string | null, name?: string | null } | null, engineType?: { __typename?: 'EngineType', id: number, title?: string | null, name?: string | null } | null, generation?: { __typename?: 'Generation', id?: number | null, slug: string, name?: string | null } | null, dealer?: { __typename?: 'Dealer', id: number, phone?: string | null, slug?: string | null, title?: string | null, image_logo?: string | null } | null } | null> | null } | null };

export type OffersCatalogQueryVariables = Exact<{
  site_id?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  mark_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  folder_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  folder_slug?: InputMaybe<Scalars['String']['input']>;
  external_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  sort?: InputMaybe<Scalars['String']['input']>;
  except_external_id?: InputMaybe<Scalars['Int']['input']>;
  generation_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  generation_slug?: InputMaybe<Scalars['String']['input']>;
  engine_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  body_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  gearbox_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  drive_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  owner_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  year_from?: InputMaybe<Scalars['Int']['input']>;
  year_to?: InputMaybe<Scalars['Int']['input']>;
  price_from?: InputMaybe<Scalars['Int']['input']>;
  price_to?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  url?: InputMaybe<Scalars['String']['input']>;
  dateFormat?: InputMaybe<Scalars['String']['input']>;
}>;


export type OffersCatalogQuery = { __typename?: 'Query', offers?: { __typename?: 'OfferTypePagination', last_page: number, current_page: number, total: number, has_more_pages: boolean, data?: Array<{ __typename?: 'Offer', id: number, external_id?: number | null, is_stock?: boolean | null, name: string, category_enum?: string | null, price: number, run?: number | null, year?: number | null, engine_power?: number | null, engine_volume?: number | null, mark?: { __typename?: 'Mark', id: number, slug: string, title: string } | null, folder?: { __typename?: 'Folder', id: number, slug: string, title: string } | null, images?: Array<{ __typename?: 'OfferImage', small_webp?: string | null } | null> | null, owner?: { __typename?: 'Owner', id: number, title?: string | null, number: number } | null, driveType?: { __typename?: 'DriveType', id: number, title?: string | null, name?: string | null } | null, bodyType?: { __typename?: 'BodyType', id: number, title?: string | null, name?: string | null } | null, gearbox?: { __typename?: 'Gearbox', id: number, title?: string | null, title_short_rus?: string | null, name?: string | null } | null, engineType?: { __typename?: 'EngineType', id: number, title?: string | null, name?: string | null } | null, generation?: { __typename?: 'Generation', id?: number | null, slug: string, name?: string | null } | null, dealer?: { __typename?: 'Dealer', id: number, phone?: string | null, slug?: string | null, title?: string | null, image_logo?: string | null } | null } | null> | null } | null };

export type OfferOnlyFiltersQueryVariables = Exact<{
  site_id?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  mark_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  folder_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  sort?: InputMaybe<Scalars['String']['input']>;
  generation_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  engine_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  body_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  gearbox_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  drive_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  owner_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
  year_from?: InputMaybe<Scalars['Int']['input']>;
  year_to?: InputMaybe<Scalars['Int']['input']>;
  price_from?: InputMaybe<Scalars['Int']['input']>;
  price_to?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
}>;


export type OfferOnlyFiltersQuery = { __typename?: 'Query', offerFilters?: { __typename?: 'OfferFilterValues', mark?: Array<{ __typename?: 'MarkField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, folder?: Array<{ __typename?: 'FolderField', title?: string | null, id?: number | null, slug?: string | null, mark_id?: number | null } | null> | null, generation?: Array<{ __typename?: 'GenerationField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, chosen?: { __typename?: 'ChosenFieldType', yearFrom?: number | null, yearTo?: number | null, priceFrom?: number | null, priceTo?: number | null, mark?: Array<{ __typename?: 'MarkField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, folder?: Array<{ __typename?: 'FolderField', title?: string | null, id?: number | null, slug?: string | null, mark_id?: number | null } | null> | null, generation?: Array<{ __typename?: 'GenerationField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, gearbox?: Array<{ __typename?: 'GearboxField', title?: string | null, title_short_rus?: string | null, id?: number | null, slug?: string | null } | null> | null, engineType?: Array<{ __typename?: 'EngineTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, driveType?: Array<{ __typename?: 'DriveTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null, bodyType?: Array<{ __typename?: 'BodyTypeField', title?: string | null, id?: number | null, slug?: string | null } | null> | null } | null } | null };

export type RegionsQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
}>;


export type RegionsQuery = { __typename?: 'Query', regions?: Array<{ __typename?: 'Region', id?: number | null, title?: string | null } | null> | null };

export type SeoTagsQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
  url: Scalars['String']['input'];
}>;


export type SeoTagsQuery = { __typename?: 'Query', seoTag?: { __typename?: 'SeoTag', page_title?: string | null, title?: string | null, description?: string | null, crumbs?: Array<{ __typename?: 'SeoTagCrumbs', title?: string | null, link?: string | null } | null> | null, site_text?: { __typename?: 'SiteText', body?: string | null } | null } | null };

export type SettingsQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
}>;


export type SettingsQuery = { __typename?: 'Query', settings?: { __typename?: 'SiteSetting', id: number, settings?: Array<{ __typename?: 'KeyValue', key?: string | null, value?: string | null } | null> | null } | null };

export type SiteConfigQueryVariables = Exact<{
  site_id?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
}>;


export type SiteConfigQuery = { __typename?: 'Query', settings?: { __typename?: 'SiteSetting', id: number, settings?: Array<{ __typename?: 'KeyValue', key?: string | null, value?: string | null } | null> | null } | null, markFolderGeneration?: Array<{ __typename?: 'MarkFolder', id: number, title: string, title_rus?: string | null, slug: string, offers_count?: number | null, folders?: Array<{ __typename?: 'FolderGeneration', id: number, title: string, title_rus?: string | null, slug: string, offers_count?: number | null, generations?: Array<{ __typename?: 'Generation', id?: number | null, name?: string | null, slug: string, year_begin?: number | null, year_end?: number | null, offers_count?: number | null } | null> | null } | null> | null } | null> | null };

export type SlidesQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
}>;


export type SlidesQuery = { __typename?: 'Query', slides?: Array<{ __typename?: 'Slide', id: number, title?: string | null, body?: string | null, link?: string | null, image?: { __typename?: 'SlideImageItemType', slide_1x?: string | null, slide_2x?: string | null, slide_1x_webp?: string | null, slide_2x_webp?: string | null, src?: string | null } | null, image_element?: { __typename?: 'SlideImageElementItemType', thumb?: string | null, small?: string | null, thumb_webp?: string | null, small_webp?: string | null, src?: string | null } | null } | null> | null };

export type StationCategoryQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
}>;


export type StationCategoryQuery = { __typename?: 'Query', stationCategory?: Array<{ __typename?: 'StationCategory', id: number, title?: string | null, stations?: Array<{ __typename?: 'Station', id: number, title?: string | null, price?: string | null, image?: { __typename?: 'StationImage', medium?: string | null, large?: string | null, medium_webp?: string | null, large_webp?: string | null } | null } | null> | null } | null> | null };

export type StoriesQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
}>;


export type StoriesQuery = { __typename?: 'Query', stories?: Array<{ __typename?: 'Story', id: number, title?: string | null, stories?: Array<{ __typename?: 'StoryContent', id: number, body?: string | null, title?: string | null, button_link?: string | null, image?: { __typename?: 'StoryImageContent', medium?: string | null, medium_webp?: string | null, small?: string | null, small_webp?: string | null, src?: string | null } | null } | null> | null, image?: { __typename?: 'StoryImage', tiny?: string | null, tiny_webp?: string | null, xs?: string | null, xs_webp?: string | null } | null } | null> | null };

export type StoryContentsQueryVariables = Exact<{
  site_id: Scalars['Int']['input'];
  story_id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type StoryContentsQuery = { __typename?: 'Query', storyContents?: Array<{ __typename?: 'StoryContent', id: number, title?: string | null, body?: string | null, button_title?: string | null, button_link?: string | null, button_color?: string | null, image?: { __typename?: 'StoryImageContent', small?: string | null, small_webp?: string | null, medium?: string | null, medium_webp?: string | null } | null } | null> | null };

export const BankListTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BankListType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bank"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"approval"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]} as unknown as DocumentNode<BankListTypeFragment, unknown>;
export const SiteTextFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SiteText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SiteText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]} as unknown as DocumentNode<SiteTextFragment, unknown>;
export const BankTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BankType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bank"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"image_car"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumb"}},{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"thumb_webp"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"site_text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SiteText"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SiteText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SiteText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]} as unknown as DocumentNode<BankTypeFragment, unknown>;
export const DealerContactFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerContact"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]} as unknown as DocumentNode<DealerContactFragment, unknown>;
export const DealerImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DealerImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"medium"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}},{"kind":"Field","name":{"kind":"Name","value":"medium_webp"}}]}}]} as unknown as DocumentNode<DealerImageFragment, unknown>;
export const DealerListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"metro"}},{"kind":"Field","name":{"kind":"Name","value":"short_description"}},{"kind":"Field","name":{"kind":"Name","value":"youtube_playlist_review"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"}},{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerImage"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DealerImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"medium"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}},{"kind":"Field","name":{"kind":"Name","value":"medium_webp"}}]}}]} as unknown as DocumentNode<DealerListFragment, unknown>;
export const DealerPageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"metro"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}},{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"short_description"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image_logo"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerImage"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DealerImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"medium"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}},{"kind":"Field","name":{"kind":"Name","value":"medium_webp"}}]}}]} as unknown as DocumentNode<DealerPageFragment, unknown>;
export const DealerReviewListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerReviewList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"youtube_playlist_review"}}]}}]} as unknown as DocumentNode<DealerReviewListFragment, unknown>;
export const MarkFieldTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarkFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MarkField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<MarkFieldTypeFragment, unknown>;
export const FolderFieldTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FolderField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"mark_id"}}]}}]} as unknown as DocumentNode<FolderFieldTypeFragment, unknown>;
export const GenerationFieldTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenerationField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<GenerationFieldTypeFragment, unknown>;
export const GearboxFieldTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GearboxFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GearboxField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_short_rus"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<GearboxFieldTypeFragment, unknown>;
export const EngineTypeFieldTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EngineTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EngineTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<EngineTypeFieldTypeFragment, unknown>;
export const DriveTypeFieldTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DriveTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DriveTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<DriveTypeFieldTypeFragment, unknown>;
export const BodyTypeFieldTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BodyTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BodyTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<BodyTypeFieldTypeFragment, unknown>;
export const ChosenFieldTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChosenFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChosenFieldType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarkFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gearbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GearboxFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"engineType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EngineTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"driveType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DriveTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BodyTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"yearFrom"}},{"kind":"Field","name":{"kind":"Name","value":"yearTo"}},{"kind":"Field","name":{"kind":"Name","value":"priceFrom"}},{"kind":"Field","name":{"kind":"Name","value":"priceTo"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarkFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MarkField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FolderField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"mark_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenerationField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GearboxFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GearboxField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_short_rus"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EngineTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EngineTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DriveTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DriveTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BodyTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BodyTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<ChosenFieldTypeFragment, unknown>;
export const OfferFilterValuesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfferFilterValues"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferFilterValues"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarkFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gearbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GearboxFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"engineType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EngineTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"driveType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DriveTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BodyTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"chosen"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChosenFieldType"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarkFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MarkField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FolderField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"mark_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenerationField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GearboxFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GearboxField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_short_rus"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EngineTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EngineTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DriveTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DriveTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BodyTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BodyTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChosenFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChosenFieldType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarkFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gearbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GearboxFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"engineType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EngineTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"driveType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DriveTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BodyTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"yearFrom"}},{"kind":"Field","name":{"kind":"Name","value":"yearTo"}},{"kind":"Field","name":{"kind":"Name","value":"priceFrom"}},{"kind":"Field","name":{"kind":"Name","value":"priceTo"}}]}}]} as unknown as DocumentNode<OfferFilterValuesFragment, unknown>;
export const OnlyFilterValuesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OnlyFilterValues"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferFilterValues"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarkFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"chosen"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChosenFieldType"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarkFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MarkField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FolderField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"mark_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenerationField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GearboxFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GearboxField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_short_rus"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EngineTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EngineTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DriveTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DriveTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BodyTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BodyTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChosenFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChosenFieldType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarkFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gearbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GearboxFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"engineType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EngineTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"driveType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DriveTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BodyTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"yearFrom"}},{"kind":"Field","name":{"kind":"Name","value":"yearTo"}},{"kind":"Field","name":{"kind":"Name","value":"priceFrom"}},{"kind":"Field","name":{"kind":"Name","value":"priceTo"}}]}}]} as unknown as DocumentNode<OnlyFilterValuesFragment, unknown>;
export const OwnerFieldTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OwnerFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OwnerField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<OwnerFieldTypeFragment, unknown>;
export const GenerationTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Generation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"year_begin"}},{"kind":"Field","name":{"kind":"Name","value":"year_end"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"offers_count"}}]}}]} as unknown as DocumentNode<GenerationTypeFragment, unknown>;
export const ComplectationTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ComplectationType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Complectation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ComplectationTypeFragment, unknown>;
export const ColorTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColorType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Color"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ColorTypeFragment, unknown>;
export const ImageAllTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageAllType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}},{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"medium_webp"}},{"kind":"Field","name":{"kind":"Name","value":"medium"}}]}}]} as unknown as DocumentNode<ImageAllTypeFragment, unknown>;
export const MarkTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarkType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mark"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<MarkTypeFragment, unknown>;
export const FolderTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Folder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<FolderTypeFragment, unknown>;
export const OwnerTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OwnerType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Owner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]} as unknown as DocumentNode<OwnerTypeFragment, unknown>;
export const DriveTypeTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DriveTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DriveType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<DriveTypeTypeFragment, unknown>;
export const BodyTypeTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BodyTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BodyType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<BodyTypeTypeFragment, unknown>;
export const GearboxTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GearboxType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Gearbox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_short_rus"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GearboxTypeFragment, unknown>;
export const EngineTypeTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EngineTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EngineType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<EngineTypeTypeFragment, unknown>;
export const GenerationOfferTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationOfferType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Generation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GenerationOfferTypeFragment, unknown>;
export const EquipmentTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EquipmentType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TitleValues"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"values"}}]}}]} as unknown as DocumentNode<EquipmentTypeFragment, unknown>;
export const DealerTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"metro"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"image_logo"}}]}}]} as unknown as DocumentNode<DealerTypeFragment, unknown>;
export const OfferPageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfferPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Offer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"is_stock"}},{"kind":"Field","name":{"kind":"Name","value":"external_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category_enum"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"price_old"}},{"kind":"Field","name":{"kind":"Name","value":"run"}},{"kind":"Field","name":{"kind":"Name","value":"vin"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating_total"}},{"kind":"Field","name":{"kind":"Name","value":"rating_body"}},{"kind":"Field","name":{"kind":"Name","value":"rating_interior"}},{"kind":"Field","name":{"kind":"Name","value":"rating_technical"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateFormat"}}},{"kind":"Argument","name":{"kind":"Name","value":"sub_day"},"value":{"kind":"BooleanValue","value":true}}]},{"kind":"Field","name":{"kind":"Name","value":"engine_power"}},{"kind":"Field","name":{"kind":"Name","value":"engine_volume"}},{"kind":"Field","name":{"kind":"Name","value":"modification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complectation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ComplectationType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageAllType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarkType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OwnerType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"driveType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DriveTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BodyTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gearbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GearboxType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"engineType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EngineTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationOfferType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"equipment_groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquipmentType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dealer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerType"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ComplectationType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Complectation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColorType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Color"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageAllType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}},{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"medium_webp"}},{"kind":"Field","name":{"kind":"Name","value":"medium"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarkType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mark"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Folder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OwnerType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Owner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DriveTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DriveType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BodyTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BodyType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GearboxType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Gearbox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_short_rus"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EngineTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EngineType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationOfferType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Generation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EquipmentType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TitleValues"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"values"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"metro"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"image_logo"}}]}}]} as unknown as DocumentNode<OfferPageFragment, unknown>;
export const DealerMiniTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerMiniType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image_logo"}}]}}]} as unknown as DocumentNode<DealerMiniTypeFragment, unknown>;
export const OfferPaginationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfferPagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferTypePagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"external_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_stock"}},{"kind":"Field","name":{"kind":"Name","value":"external_unique_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category_enum"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"price_old"}},{"kind":"Field","name":{"kind":"Name","value":"run"}},{"kind":"Field","name":{"kind":"Name","value":"vin"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating_total"}},{"kind":"Field","name":{"kind":"Name","value":"rating_body"}},{"kind":"Field","name":{"kind":"Name","value":"rating_interior"}},{"kind":"Field","name":{"kind":"Name","value":"rating_technical"}}]}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateFormat"}}},{"kind":"Argument","name":{"kind":"Name","value":"sub_day"},"value":{"kind":"BooleanValue","value":true}}]},{"kind":"Field","name":{"kind":"Name","value":"engine_power"}},{"kind":"Field","name":{"kind":"Name","value":"engine_volume"}},{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarkType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"small_webp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OwnerType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"driveType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DriveTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BodyTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gearbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GearboxType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"engineType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EngineTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationOfferType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dealer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerMiniType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"last_page"}},{"kind":"Field","name":{"kind":"Name","value":"current_page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"has_more_pages"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColorType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Color"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarkType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mark"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Folder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OwnerType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Owner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DriveTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DriveType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BodyTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BodyType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GearboxType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Gearbox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_short_rus"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EngineTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EngineType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationOfferType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Generation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerMiniType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image_logo"}}]}}]} as unknown as DocumentNode<OfferPaginationFragment, unknown>;
export const ImageThumbTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageThumbType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumb"}},{"kind":"Field","name":{"kind":"Name","value":"original"}}]}}]} as unknown as DocumentNode<ImageThumbTypeFragment, unknown>;
export const ModificationTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ModificationType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Modification"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ModificationTypeFragment, unknown>;
export const WheelTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WheelType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Wheel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<WheelTypeFragment, unknown>;
export const SeoTagCrumbsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SeoTagCrumbs"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SeoTagCrumbs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]} as unknown as DocumentNode<SeoTagCrumbsFragment, unknown>;
export const SeoTagFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SeoTag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SeoTag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page_title"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"crumbs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SeoTagCrumbs"}}]}},{"kind":"Field","name":{"kind":"Name","value":"site_text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SiteText"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SeoTagCrumbs"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SeoTagCrumbs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SiteText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SiteText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]} as unknown as DocumentNode<SeoTagFragment, unknown>;
export const StoryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Story"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"button_link"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"medium"}},{"kind":"Field","name":{"kind":"Name","value":"medium_webp"}},{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}},{"kind":"Field","name":{"kind":"Name","value":"src"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tiny"}},{"kind":"Field","name":{"kind":"Name","value":"tiny_webp"}},{"kind":"Field","name":{"kind":"Name","value":"xs"}},{"kind":"Field","name":{"kind":"Name","value":"xs_webp"}}]}}]}}]} as unknown as DocumentNode<StoryFragment, unknown>;
export const StoryContentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"button_title"}},{"kind":"Field","name":{"kind":"Name","value":"button_link"}},{"kind":"Field","name":{"kind":"Name","value":"button_color"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}},{"kind":"Field","name":{"kind":"Name","value":"medium"}},{"kind":"Field","name":{"kind":"Name","value":"medium_webp"}}]}}]}}]} as unknown as DocumentNode<StoryContentFragment, unknown>;
export const OfferUrlFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfferUrl"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferUrlType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark_slug"}},{"kind":"Field","name":{"kind":"Name","value":"folder_slug"}},{"kind":"Field","name":{"kind":"Name","value":"external_id"}}]}}]} as unknown as DocumentNode<OfferUrlFragment, unknown>;
export const OfferUrlFilterPaginationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfferUrlFilterPagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferUrlFilterPaginationType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark_slug_array"}},{"kind":"Field","name":{"kind":"Name","value":"folder_slug_array"}},{"kind":"Field","name":{"kind":"Name","value":"generation_slug_array"}},{"kind":"Field","name":{"kind":"Name","value":"year_from"}},{"kind":"Field","name":{"kind":"Name","value":"engine_type_id_array"}},{"kind":"Field","name":{"kind":"Name","value":"body_type_id_array"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]} as unknown as DocumentNode<OfferUrlFilterPaginationFragment, unknown>;
export const FeedbackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"feedback"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"external_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_phone"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_age"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_region"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_mark"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_model"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_run"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_year"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_body_type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_price"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_owners"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_gearbox"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_engine"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"credit_initial_fee"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"credit_period"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"utm_source"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"utm_content"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"utm_medium"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"utm_campaign"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"utm_term"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offer_title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offer_price"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feedback"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"external_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"external_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_name"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_phone"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_age"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_age"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_region"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_region"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_mark"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_mark"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_model"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_model"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_run"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_run"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_year"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_body_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_body_type"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_price"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_owners"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_owners"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_gearbox"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_gearbox"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_engine"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_engine"}}},{"kind":"Argument","name":{"kind":"Name","value":"credit_initial_fee"},"value":{"kind":"Variable","name":{"kind":"Name","value":"credit_initial_fee"}}},{"kind":"Argument","name":{"kind":"Name","value":"credit_period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"credit_period"}}},{"kind":"Argument","name":{"kind":"Name","value":"utm_source"},"value":{"kind":"Variable","name":{"kind":"Name","value":"utm_source"}}},{"kind":"Argument","name":{"kind":"Name","value":"utm_content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"utm_content"}}},{"kind":"Argument","name":{"kind":"Name","value":"utm_medium"},"value":{"kind":"Variable","name":{"kind":"Name","value":"utm_medium"}}},{"kind":"Argument","name":{"kind":"Name","value":"utm_campaign"},"value":{"kind":"Variable","name":{"kind":"Name","value":"utm_campaign"}}},{"kind":"Argument","name":{"kind":"Name","value":"utm_term"},"value":{"kind":"Variable","name":{"kind":"Name","value":"utm_term"}}},{"kind":"Argument","name":{"kind":"Name","value":"offer_title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offer_title"}}},{"kind":"Argument","name":{"kind":"Name","value":"offer_price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offer_price"}}},{"kind":"Argument","name":{"kind":"Name","value":"comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comment"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<FeedbackMutation, FeedbackMutationVariables>;
export const SendFeedbackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendFeedback"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type_enum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_phone"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_age"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_region"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_mark"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_model"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_run"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_year"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_body_type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_price"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_owners"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_gearbox"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_engine"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"credit_initial_fee"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"credit_period"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"utm_source"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"utm_content"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"utm_medium"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"utm_campaign"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"utm_term"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offer_title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offer_price"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feedback"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type_enum"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_name"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_phone"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_age"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_age"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_region"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_region"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_mark"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_mark"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_model"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_model"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_run"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_run"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_year"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_body_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_body_type"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_price"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_owners"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_owners"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_gearbox"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_gearbox"}}},{"kind":"Argument","name":{"kind":"Name","value":"client_vehicle_engine"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_vehicle_engine"}}},{"kind":"Argument","name":{"kind":"Name","value":"credit_initial_fee"},"value":{"kind":"Variable","name":{"kind":"Name","value":"credit_initial_fee"}}},{"kind":"Argument","name":{"kind":"Name","value":"credit_period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"credit_period"}}},{"kind":"Argument","name":{"kind":"Name","value":"utm_source"},"value":{"kind":"Variable","name":{"kind":"Name","value":"utm_source"}}},{"kind":"Argument","name":{"kind":"Name","value":"utm_content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"utm_content"}}},{"kind":"Argument","name":{"kind":"Name","value":"utm_medium"},"value":{"kind":"Variable","name":{"kind":"Name","value":"utm_medium"}}},{"kind":"Argument","name":{"kind":"Name","value":"utm_campaign"},"value":{"kind":"Variable","name":{"kind":"Name","value":"utm_campaign"}}},{"kind":"Argument","name":{"kind":"Name","value":"utm_term"},"value":{"kind":"Variable","name":{"kind":"Name","value":"utm_term"}}},{"kind":"Argument","name":{"kind":"Name","value":"offer_title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offer_title"}}},{"kind":"Argument","name":{"kind":"Name","value":"offer_price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offer_price"}}},{"kind":"Argument","name":{"kind":"Name","value":"comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comment"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SendFeedbackMutation, SendFeedbackMutationVariables>;
export const BankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"bank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"image_car"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumb"}},{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"thumb_webp"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"site_text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SiteText"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SiteText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SiteText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]} as unknown as DocumentNode<BankQuery, BankQueryVariables>;
export const BanksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"banks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"banks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BankListType"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BankListType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bank"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"approval"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]} as unknown as DocumentNode<BanksQuery, BanksQueryVariables>;
export const ArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"article"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"page_title"}},{"kind":"Field","name":{"kind":"Name","value":"long_title"}},{"kind":"Field","name":{"kind":"Name","value":"short_description"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"video_youtube"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"StringValue","value":"d.m.Y","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"image_preview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumb"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image_slide"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"medium"}},{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"medium_webp"}},{"kind":"Field","name":{"kind":"Name","value":"large_webp"}},{"kind":"Field","name":{"kind":"Name","value":"src"}}]}}]}}]}}]} as unknown as DocumentNode<ArticleQuery, ArticleQueryVariables>;
export const ArticleCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"articleCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"page_title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"page_title"}},{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"StringValue","value":"d.m.Y","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"image_preview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumb"}},{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"thumb_webp"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ArticleCategoryQuery, ArticleCategoryQueryVariables>;
export const ArticlesPaginateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"articlesPaginate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category_url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articlesPaginate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"category_url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category_url"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"page_title"}},{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"StringValue","value":"d.m.Y","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"image_preview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumb"}},{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"thumb_webp"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"last_page"}}]}}]}}]} as unknown as DocumentNode<ArticlesPaginateQuery, ArticlesPaginateQueryVariables>;
export const DealerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"dealer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dealer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerPage"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DealerImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"medium"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}},{"kind":"Field","name":{"kind":"Name","value":"medium_webp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"metro"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}},{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"short_description"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image_logo"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerImage"}}]}}]}}]} as unknown as DocumentNode<DealerQuery, DealerQueryVariables>;
export const DealersReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"dealersReviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dealers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerReviewList"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerReviewList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"youtube_playlist_review"}}]}}]} as unknown as DocumentNode<DealersReviewsQuery, DealersReviewsQueryVariables>;
export const DealersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"dealers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dealers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerList"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DealerImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"medium"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}},{"kind":"Field","name":{"kind":"Name","value":"medium_webp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"metro"}},{"kind":"Field","name":{"kind":"Name","value":"short_description"}},{"kind":"Field","name":{"kind":"Name","value":"youtube_playlist_review"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"}},{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerImage"}}]}}]}}]} as unknown as DocumentNode<DealersQuery, DealersQueryVariables>;
export const DealersContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"dealersContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dealers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerContact"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerContact"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]} as unknown as DocumentNode<DealersContactQuery, DealersContactQueryVariables>;
export const FiltersCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"filtersCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"generation_slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gearbox_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body_type_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"drive_type_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year_from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year_to"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"offers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"mark_slug_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder_slug_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"generation_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"generation_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"gearbox_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gearbox_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"body_type_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body_type_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"drive_type_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"drive_type_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"owner_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"year_from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year_from"}}},{"kind":"Argument","name":{"kind":"Name","value":"year_to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year_to"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FiltersCountQuery, FiltersCountQueryVariables>;
export const FoldersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"folders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mark_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"folders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"mark_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mark_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"mark_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_rus"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"offers_count"}}]}}]}}]} as unknown as DocumentNode<FoldersQuery, FoldersQueryVariables>;
export const GenerationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"generations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}},{"kind":"Argument","name":{"kind":"Name","value":"mark_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationType"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Generation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"year_begin"}},{"kind":"Field","name":{"kind":"Name","value":"year_end"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"offers_count"}}]}}]} as unknown as DocumentNode<GenerationsQuery, GenerationsQueryVariables>;
export const MarkFolderGenerationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"markFolderGeneration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markFolderGeneration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"offers_count"}},{"kind":"Field","name":{"kind":"Name","value":"folders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"offers_count"}},{"kind":"Field","name":{"kind":"Name","value":"generations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationType"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Generation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"year_begin"}},{"kind":"Field","name":{"kind":"Name","value":"year_end"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"offers_count"}}]}}]} as unknown as DocumentNode<MarkFolderGenerationQuery, MarkFolderGenerationQueryVariables>;
export const MarksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"marks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"offers_count"}}]}}]}}]} as unknown as DocumentNode<MarksQuery, MarksQueryVariables>;
export const OfferDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"offer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"external_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateFormat"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"offer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"mark_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"external_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"external_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OfferPage"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ComplectationType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Complectation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColorType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Color"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageAllType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}},{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"medium_webp"}},{"kind":"Field","name":{"kind":"Name","value":"medium"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarkType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mark"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Folder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OwnerType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Owner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DriveTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DriveType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BodyTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BodyType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GearboxType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Gearbox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_short_rus"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EngineTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EngineType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationOfferType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Generation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EquipmentType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TitleValues"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"values"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"metro"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"image_logo"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfferPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Offer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"is_stock"}},{"kind":"Field","name":{"kind":"Name","value":"external_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category_enum"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"price_old"}},{"kind":"Field","name":{"kind":"Name","value":"run"}},{"kind":"Field","name":{"kind":"Name","value":"vin"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating_total"}},{"kind":"Field","name":{"kind":"Name","value":"rating_body"}},{"kind":"Field","name":{"kind":"Name","value":"rating_interior"}},{"kind":"Field","name":{"kind":"Name","value":"rating_technical"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateFormat"}}},{"kind":"Argument","name":{"kind":"Name","value":"sub_day"},"value":{"kind":"BooleanValue","value":true}}]},{"kind":"Field","name":{"kind":"Name","value":"engine_power"}},{"kind":"Field","name":{"kind":"Name","value":"engine_volume"}},{"kind":"Field","name":{"kind":"Name","value":"modification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complectation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ComplectationType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageAllType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarkType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OwnerType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"driveType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DriveTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BodyTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gearbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GearboxType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"engineType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EngineTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationOfferType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"equipment_groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EquipmentType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dealer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerType"}}]}}]}}]} as unknown as DocumentNode<OfferQuery, OfferQueryVariables>;
export const OfferFiltersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"offerFilters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"generation_slug_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"engine_type_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body_type_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gearbox_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"drive_type_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year_from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year_to"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price_from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price_to"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"offerFilters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"mark_slug_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder_slug_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"generation_slug_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"generation_slug_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"engine_type_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"engine_type_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"body_type_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body_type_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"gearbox_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gearbox_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"drive_type_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"drive_type_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"owner_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"year_from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year_from"}}},{"kind":"Argument","name":{"kind":"Name","value":"year_to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year_to"}}},{"kind":"Argument","name":{"kind":"Name","value":"price_from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price_from"}}},{"kind":"Argument","name":{"kind":"Name","value":"price_to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price_to"}}},{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OfferFilterValues"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarkFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MarkField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FolderField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"mark_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenerationField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GearboxFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GearboxField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_short_rus"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EngineTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EngineTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DriveTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DriveTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BodyTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BodyTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChosenFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChosenFieldType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarkFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gearbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GearboxFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"engineType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EngineTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"driveType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DriveTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BodyTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"yearFrom"}},{"kind":"Field","name":{"kind":"Name","value":"yearTo"}},{"kind":"Field","name":{"kind":"Name","value":"priceFrom"}},{"kind":"Field","name":{"kind":"Name","value":"priceTo"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfferFilterValues"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferFilterValues"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarkFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gearbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GearboxFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"engineType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EngineTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"driveType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DriveTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BodyTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"chosen"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChosenFieldType"}}]}}]}}]} as unknown as DocumentNode<OfferFiltersQuery, OfferFiltersQueryVariables>;
export const OfferUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"offerUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"offerUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferUrlType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OfferUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferUrlFilterPaginationType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OfferUrlFilterPagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfferUrl"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferUrlType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark_slug"}},{"kind":"Field","name":{"kind":"Name","value":"folder_slug"}},{"kind":"Field","name":{"kind":"Name","value":"external_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfferUrlFilterPagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferUrlFilterPaginationType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark_slug_array"}},{"kind":"Field","name":{"kind":"Name","value":"folder_slug_array"}},{"kind":"Field","name":{"kind":"Name","value":"generation_slug_array"}},{"kind":"Field","name":{"kind":"Name","value":"year_from"}},{"kind":"Field","name":{"kind":"Name","value":"engine_type_id_array"}},{"kind":"Field","name":{"kind":"Name","value":"body_type_id_array"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]} as unknown as DocumentNode<OfferUrlQuery, OfferUrlQueryVariables>;
export const OffersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"offers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"external_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"except_external_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"generation_slug_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"generation_slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"engine_type_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body_type_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gearbox_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"drive_type_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year_from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year_to"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price_from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price_to"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"set"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateFormat"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"offers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"mark_slug_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"mark_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder_slug_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"external_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"external_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"except_external_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"except_external_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"generation_slug_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"generation_slug_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"engine_type_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"engine_type_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"body_type_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body_type_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"gearbox_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gearbox_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"drive_type_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"drive_type_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"owner_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"year_from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year_from"}}},{"kind":"Argument","name":{"kind":"Name","value":"year_to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year_to"}}},{"kind":"Argument","name":{"kind":"Name","value":"price_from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price_from"}}},{"kind":"Argument","name":{"kind":"Name","value":"price_to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price_to"}}},{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}},{"kind":"Argument","name":{"kind":"Name","value":"generation_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"generation_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"set"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OfferPagination"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColorType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Color"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarkType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mark"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Folder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OwnerType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Owner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DriveTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DriveType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BodyTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BodyType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GearboxType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Gearbox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_short_rus"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EngineTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EngineType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationOfferType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Generation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerMiniType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image_logo"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfferPagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferTypePagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"external_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_stock"}},{"kind":"Field","name":{"kind":"Name","value":"external_unique_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category_enum"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"price_old"}},{"kind":"Field","name":{"kind":"Name","value":"run"}},{"kind":"Field","name":{"kind":"Name","value":"vin"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating_total"}},{"kind":"Field","name":{"kind":"Name","value":"rating_body"}},{"kind":"Field","name":{"kind":"Name","value":"rating_interior"}},{"kind":"Field","name":{"kind":"Name","value":"rating_technical"}}]}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateFormat"}}},{"kind":"Argument","name":{"kind":"Name","value":"sub_day"},"value":{"kind":"BooleanValue","value":true}}]},{"kind":"Field","name":{"kind":"Name","value":"engine_power"}},{"kind":"Field","name":{"kind":"Name","value":"engine_volume"}},{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarkType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"small_webp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OwnerType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"driveType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DriveTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BodyTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gearbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GearboxType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"engineType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EngineTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationOfferType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dealer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerMiniType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"last_page"}},{"kind":"Field","name":{"kind":"Name","value":"current_page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"has_more_pages"}}]}}]} as unknown as DocumentNode<OffersQuery, OffersQueryVariables>;
export const OffersCatalogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"offersCatalog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"external_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"except_external_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"generation_slug_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"generation_slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"engine_type_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body_type_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gearbox_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"drive_type_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year_from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year_to"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price_from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price_to"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"set"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateFormat"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"offers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"mark_slug_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"mark_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder_slug_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"external_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"external_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"except_external_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"except_external_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"generation_slug_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"generation_slug_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"engine_type_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"engine_type_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"body_type_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body_type_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"gearbox_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gearbox_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"drive_type_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"drive_type_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"owner_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"year_from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year_from"}}},{"kind":"Argument","name":{"kind":"Name","value":"year_to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year_to"}}},{"kind":"Argument","name":{"kind":"Name","value":"price_from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price_from"}}},{"kind":"Argument","name":{"kind":"Name","value":"price_to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price_to"}}},{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}},{"kind":"Argument","name":{"kind":"Name","value":"generation_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"generation_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"set"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"external_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_stock"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category_enum"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"run"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"engine_power"}},{"kind":"Field","name":{"kind":"Name","value":"engine_volume"}},{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarkType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"small_webp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OwnerType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"driveType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DriveTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BodyTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gearbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GearboxType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"engineType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EngineTypeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationOfferType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dealer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerMiniType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"last_page"}},{"kind":"Field","name":{"kind":"Name","value":"current_page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"has_more_pages"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarkType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mark"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Folder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OwnerType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Owner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DriveTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DriveType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BodyTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BodyType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GearboxType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Gearbox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_short_rus"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EngineTypeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EngineType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationOfferType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Generation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerMiniType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image_logo"}}]}}]} as unknown as DocumentNode<OffersCatalogQuery, OffersCatalogQueryVariables>;
export const OfferOnlyFiltersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"offerOnlyFilters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"generation_slug_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"engine_type_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body_type_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gearbox_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"drive_type_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner_id_array"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year_from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year_to"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price_from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price_to"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"offerFilters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"mark_slug_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mark_slug_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder_slug_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder_slug_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"generation_slug_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"generation_slug_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"engine_type_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"engine_type_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"body_type_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body_type_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"gearbox_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gearbox_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"drive_type_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"drive_type_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"owner_id_array"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner_id_array"}}},{"kind":"Argument","name":{"kind":"Name","value":"year_from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year_from"}}},{"kind":"Argument","name":{"kind":"Name","value":"year_to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year_to"}}},{"kind":"Argument","name":{"kind":"Name","value":"price_from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price_from"}}},{"kind":"Argument","name":{"kind":"Name","value":"price_to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price_to"}}},{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OnlyFilterValues"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarkFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MarkField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FolderFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FolderField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"mark_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenerationFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenerationField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GearboxFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GearboxField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_short_rus"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EngineTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EngineTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DriveTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DriveTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BodyTypeFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BodyTypeField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChosenFieldType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChosenFieldType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarkFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gearbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GearboxFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"engineType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EngineTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"driveType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DriveTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BodyTypeFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"yearFrom"}},{"kind":"Field","name":{"kind":"Name","value":"yearTo"}},{"kind":"Field","name":{"kind":"Name","value":"priceFrom"}},{"kind":"Field","name":{"kind":"Name","value":"priceTo"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OnlyFilterValues"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfferFilterValues"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarkFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FolderFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenerationFieldType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"chosen"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChosenFieldType"}}]}}]}}]} as unknown as DocumentNode<OfferOnlyFiltersQuery, OfferOnlyFiltersQueryVariables>;
export const RegionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"regions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<RegionsQuery, RegionsQueryVariables>;
export const SeoTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"seoTags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seoTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SeoTag"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SeoTagCrumbs"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SeoTagCrumbs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SiteText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SiteText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SeoTag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SeoTag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page_title"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"crumbs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SeoTagCrumbs"}}]}},{"kind":"Field","name":{"kind":"Name","value":"site_text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SiteText"}}]}}]}}]} as unknown as DocumentNode<SeoTagsQuery, SeoTagsQueryVariables>;
export const SettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"settings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"settings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<SettingsQuery, SettingsQueryVariables>;
export const SiteConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"siteConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"settings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"markFolderGeneration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_rus"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"offers_count"}},{"kind":"Field","name":{"kind":"Name","value":"folders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"title_rus"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"offers_count"}},{"kind":"Field","name":{"kind":"Name","value":"generations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"year_begin"}},{"kind":"Field","name":{"kind":"Name","value":"year_end"}},{"kind":"Field","name":{"kind":"Name","value":"offers_count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SiteConfigQuery, SiteConfigQueryVariables>;
export const SlidesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"slides"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slides"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slide_1x"}},{"kind":"Field","name":{"kind":"Name","value":"slide_2x"}},{"kind":"Field","name":{"kind":"Name","value":"slide_1x_webp"}},{"kind":"Field","name":{"kind":"Name","value":"slide_2x_webp"}},{"kind":"Field","name":{"kind":"Name","value":"src"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image_element"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumb"}},{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"thumb_webp"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}},{"kind":"Field","name":{"kind":"Name","value":"src"}}]}}]}}]}}]} as unknown as DocumentNode<SlidesQuery, SlidesQueryVariables>;
export const StationCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"stationCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stationCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"stations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"medium"}},{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"medium_webp"}},{"kind":"Field","name":{"kind":"Name","value":"large_webp"}}]}}]}}]}}]}}]} as unknown as DocumentNode<StationCategoryQuery, StationCategoryQueryVariables>;
export const StoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"stories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Story"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Story"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"button_link"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"medium"}},{"kind":"Field","name":{"kind":"Name","value":"medium_webp"}},{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}},{"kind":"Field","name":{"kind":"Name","value":"src"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tiny"}},{"kind":"Field","name":{"kind":"Name","value":"tiny_webp"}},{"kind":"Field","name":{"kind":"Name","value":"xs"}},{"kind":"Field","name":{"kind":"Name","value":"xs_webp"}}]}}]}}]} as unknown as DocumentNode<StoriesQuery, StoriesQueryVariables>;
export const StoryContentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"storyContents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"story_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storyContents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"story_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"story_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryContent"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"button_title"}},{"kind":"Field","name":{"kind":"Name","value":"button_link"}},{"kind":"Field","name":{"kind":"Name","value":"button_color"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"small_webp"}},{"kind":"Field","name":{"kind":"Name","value":"medium"}},{"kind":"Field","name":{"kind":"Name","value":"medium_webp"}}]}}]}}]} as unknown as DocumentNode<StoryContentsQuery, StoryContentsQueryVariables>;