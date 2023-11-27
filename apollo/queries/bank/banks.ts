import {BankListType} from '~/apollo/fragments/bank/bankListType';

export const banks = gql`
    query banks($site_id: Int!) {
  banks(site_id: $site_id) {
    ...BankListType
  }
}`;
