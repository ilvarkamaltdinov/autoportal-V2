import {DealerPage} from '~/apollo/fragments/dealer/dealerPage';

export const dealer = gql`
    query dealer($site_id: Int!, $slug: String!) {
  dealer(site_id: $site_id,  slug: $slug) {
    ...DealerPage
  }
}`;