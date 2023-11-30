import {Exact, InputMaybe, Scalars} from '~/types/graphql';

export type OffersCatalogTypeInput = Exact<{
    site_id: number;
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
export type OffersCatalogType = {
    __typename?: 'Query', offers?: {
        __typename?: 'OfferTypePagination',
        last_page: number,
        current_page: number,
        total: number,
        has_more_pages: boolean,
        data?: Array<{
            __typename?: 'Offer',
            id: number,
            external_id?: number | null,
            is_stock?: boolean | null,
            name: string,
            category_enum?: string | null,
            price: number,
            run?: number | null,
            year?: number | null,
            engine_power?: number | null,
            engine_volume?: number | null,
            mark?: { __typename?: 'Mark', id: number, slug: string, title: string } | null,
            folder?: { __typename?: 'Folder', id: number, slug: string, title: string } | null,
            images?: Array<{ __typename?: 'OfferImage', small_webp?: string | null } | null> | null,
            owner?: { __typename?: 'Owner', id: number, title?: string | null, number: number } | null,
            driveType?: { __typename?: 'DriveType', id: number, title?: string | null, name?: string | null } | null,
            bodyType?: { __typename?: 'BodyType', id: number, title?: string | null, name?: string | null } | null,
            gearbox?: {
                __typename?: 'Gearbox',
                id: number,
                title?: string | null,
                title_short_rus?: string | null,
                name?: string | null
            } | null,
            engineType?: { __typename?: 'EngineType', id: number, title?: string | null, name?: string | null } | null,
            generation?: { __typename?: 'Generation', id?: number | null, slug: string, name?: string | null } | null,
            dealer?: {
                __typename?: 'Dealer',
                id: number,
                phone?: string | null,
                slug?: string | null,
                title?: string | null,
                image_logo?: string | null
            } | null
        } | null> | null
    } | null
};