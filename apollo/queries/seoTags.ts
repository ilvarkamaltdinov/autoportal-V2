import { SeoTag } from '~/apollo/fragments/seoTag/seoTag';
import { DocumentNode } from 'graphql/language';

export const seoTags: DocumentNode = gql`
    ${SeoTag}
    query seoTags($site_id: Int!, $url: String!) {
    seoTag(site_id: $site_id, url: $url) {
       ... SeoTag
    }
}`;