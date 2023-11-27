import {Story} from '~/apollo/fragments/story/story';
import {DocumentNode} from 'graphql/language';

export const stories: DocumentNode = gql`
    query stories(
  $site_id: Int!
) {
  stories(
    site_id: $site_id,
  ) {
    ... Story
  }
}`;