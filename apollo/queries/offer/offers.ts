import {DocumentNode} from "graphql/language";

export const offersGql: DocumentNode = gql`
    query offers(
        $site_id: Int!
        $page: Int
        $limit: Int
        $category: String
        $mark_slug: String
        $mark_slug_array: [String]
        $folder_slug_array: [String]
        $folder_slug: String
        $external_id_array: [Int]
        $sort: String
        $except_external_id: Int
        $generation_slug_array: [String]
        $generation_slug: String
        $engine_type_id_array: [Int]
        $body_type_id_array: [Int]
        $gearbox_id_array: [Int]
        $drive_type_id_array: [Int]
        $owner_id_array:[Int]
        $year_from: Int
        $year_to: Int
        $price_from: Int
        $price_to: Int
        $set: String
        $url: String
        $dateFormat: String
    ){
        offers(
            site_id: $site_id,
            except_external_id:$except_external_id,
            mark_slug: $mark_slug,
            mark_slug_array: $mark_slug_array,
            folder_slug_array: $folder_slug_array,
            folder_slug: $folder_slug,
            external_id_array: $external_id_array,
            generation_slug_array: $generation_slug_array,
            generation_slug: $generation_slug,
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
            page: $page,
            limit: $limit,
            sort: $sort,
            set: $set,
            url:$url
        ) {
            data {
                id
                external_id
                external_unique_id
                name
                category_enum
                price
                price_old
                run
                vin
                color {
                    id
                    title
                    name
                }
                year
                createdAt(format: $dateFormat, sub_day:true)
                engine_power
                engine_volume
                mark {
                    id
                    slug
                    title
                }
                folder {
                    id
                    slug
                    title
                }
                images {
                    tiny_webp
                    small_webp
                    medium_webp
                    original
                }
                owner {
                    id
                    title
                    number
                }
                driveType {
                    id
                    title
                    name
                }
                bodyType {
                    id
                    title
                    name
                }
                gearbox {
                    id
                    title
                    title_short_rus
                    name
                }
                engineType {
                    id
                    title
                    name
                }
                generation {
                    id
                    slug
                    name
                }
            }
            last_page
            current_page
            total
            has_more_pages
        }
    }`
