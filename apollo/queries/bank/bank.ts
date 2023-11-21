import {DocumentNode} from "graphql/language";
import {SiteText} from "~/apollo/fragments/siteText/siteText";
export const offersGql: DocumentNode = gql`
    ${SiteText}
    query bank($site_id: Int!, $slug: String!) {
  bank(site_id: $site_id, slug: $slug) {
    id
    name
    slug
    rate
    title
    image
    image_car {
      thumb
      small
      thumb_webp
      small_webp
    }
    site_text{
      ... SiteText
    }
  }
}`;
