import { OnlyFilterValues } from '~/apollo/fragments/filters/onlyFilterValues';

export const offerFilters = gql`
    ${OnlyFilterValues}
    query offerOnlyFilters(
  $site_id: Int,
  $page: Int,
  $limit: Int,
  $category: String,
  $mark_slug_array: [String],
  $folder_slug_array: [String],
  $sort: String,
  $generation_slug_array: [String],
  $engine_type_id_array: [Int],
  $body_type_id_array: [Int],
  $gearbox_id_array: [Int],
  $drive_type_id_array: [Int],
  $owner_id_array:[Int],
  $year_from: Int,
  $year_to: Int,
  $price_from: Int,
  $price_to: Int,
#  $dateFormat: String
  $url: String
) {
  offerFilters(
    page: $page,
    limit: $limit,
    site_id: $site_id,
    mark_slug_array: $mark_slug_array,
    folder_slug_array: $folder_slug_array,
    sort: $sort,
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
    url:$url
  )
  {
    ... OnlyFilterValues
  }
}`;