import {SiteText} from '~/apollo/fragments/siteText/siteText';

export const BankType = gql`
    ${SiteText}
    fragment BankType on Bank {
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
        ...SiteText
    }
}`;
