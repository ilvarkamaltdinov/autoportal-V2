export const regions = gql`query regions($site_id: Int!) {
  regions(site_id: $site_id) {
    id,
    title
  }
}`;