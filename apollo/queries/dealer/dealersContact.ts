import {DealerContact} from '~/apollo/fragments/dealer/dealerContact';

export const dealersContact = gql`
    ${DealerContact}
    query dealersContact($site_id: Int!) {
  dealers(site_id: $site_id) {
    ...DealerContact
  }
}`;