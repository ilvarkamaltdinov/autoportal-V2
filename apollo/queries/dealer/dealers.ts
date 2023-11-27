import {DealerList} from '~/apollo/fragments/dealer/dealerList';

export const dealers = gql`
    query dealers($site_id: Int!) {
  dealers(site_id: $site_id) {
    ...DealerList
  }
}`;