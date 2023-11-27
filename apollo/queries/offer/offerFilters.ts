import {OfferFilterValues} from '~/apollo/fragments/filters/offerFilterValues';

export const offerFilters = gql`
    query offerFilters(
  $site_id: Int,
  $category: String,
  $mark_slug_array: [String],
  $folder_slug_array: [String],
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
  $url: String
) {
  offerFilters(
    site_id: $site_id,
    mark_slug_array: $mark_slug_array,
    folder_slug_array: $folder_slug_array,
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
    ... OfferFilterValues
  }
}`;