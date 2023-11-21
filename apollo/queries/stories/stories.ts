import {Story} from "~/apollo/fragments/story/story";

export const stories = gql`
    query stories(
  $site_id: Int!
) {
  stories(
    site_id: $site_id,
  ) {
    ... Story
  }
}`;