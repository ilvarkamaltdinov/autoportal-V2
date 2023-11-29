import {OfferUrlFilterPagination} from '~/apollo/fragments/union/offerUrlFilterPagination';
import {OfferUrl} from '~/apollo/fragments/union/offerUrl';

export const offerUrl = gql`
    ${OfferUrl}
    ${OfferUrlFilterPagination}
    query offerUrl(
    $site_id: Int,
    $url: String
) {
    offerUrl(
        site_id: $site_id
        url: $url
    )
    {
        __typename
        ... on OfferUrlType {
            ... OfferUrl
        }
        ... on OfferUrlFilterPaginationType {
            ... OfferUrlFilterPagination
        }
    }
}`;