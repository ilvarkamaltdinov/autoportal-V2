import {DealerReviewList} from '~/apollo/fragments/dealer/dealerReviewList';

export const dealers = gql`
    ${DealerReviewList}
    query dealersReviews($site_id: Int!) {
  dealers(site_id: $site_id) {
    ...DealerReviewList
  }
}`;