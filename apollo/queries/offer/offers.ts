import {OfferPagination} from '~/apollo/fragments/offer/offerPagination';

export const offers = gql`
    ${OfferPagination}
    query offers(
        $site_id: Int,
        $page: Int,
        $limit: Int,
        $category: String,
        $mark_slug_array: [String],
        $mark_slug: String,
        $folder_slug_array: [String],
        $folder_slug: String,
        $external_id_array: [Int],
        $sort: String,
        $except_external_id: Int,
        $generation_slug_array: [String],
        $generation_slug: String,
        $engine_type_id_array: [Int],
        $body_type_id_array: [Int],
        $gearbox_id_array: [Int],
        $drive_type_id_array: [Int],
        $owner_id_array:[Int],
        $year_from: Int,
        $year_to: Int,
        $price_from: Int,
        $price_to: Int,
        $set: String,
        $url: String,
        $dateFormat: String
    ) {
        offers(
            page: $page,
            limit: $limit,
            site_id: $site_id,
            mark_slug_array: $mark_slug_array,
            mark_slug: $mark_slug,
            folder_slug_array: $folder_slug_array,
            folder_slug: $folder_slug,
            external_id_array: $external_id_array,
            sort: $sort,
            except_external_id:$except_external_id,
            generation_slug_array: $generation_slug_array,
            engine_type_id_array: $engine_type_id_array,
            body_type_id_array: $body_type_id_array,
            gearbox_id_array: $gearbox_id_array,
            drive_type_id_array: $drive_type_id_array,
            owner_id_array: $owner_id_array,
            year_from: $year_from,
            year_to: $year_to,
            price_from: $price_from,
            price_to: $price_to,
            category: $category,
            generation_slug: $generation_slug
            set: $set,
            url:$url
        ) {
            ... OfferPagination
        }
    }`;