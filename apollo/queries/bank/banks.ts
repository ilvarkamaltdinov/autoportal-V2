import {BankListType} from '~/apollo/fragments/bank/bankListType';

export const banksGql = gql`
    ${BankListType}
    query banks($site_id: Int!) {
  banks(site_id: $site_id) {
    ...BankListType
  }
}`;
