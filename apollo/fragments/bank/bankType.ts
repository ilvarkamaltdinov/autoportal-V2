
export const BankType = gql`
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
