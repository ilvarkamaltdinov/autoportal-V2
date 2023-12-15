import { DealerImage } from '~/apollo/fragments/image/dealerImage';

export const DealerPage = gql`
    ${DealerImage}
    fragment DealerPage on Dealer {
    id
    slug
    title
    city
    address
    metro
    schedule
    phone
    coordinates
    site
    rating
    short_description
    description
    image_logo
    images {
    ... DealerImage
    }
}`;
