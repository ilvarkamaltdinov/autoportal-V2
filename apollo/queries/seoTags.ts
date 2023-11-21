import {SeoTag} from "~/apollo/fragments/seoTag/seoTag";

export const seoTags = gql`
    query seoTags($site_id: Int!, $url: String!) {
    seoTag(site_id: $site_id, url: $url) {
       ... SeoTag
    }
}`;