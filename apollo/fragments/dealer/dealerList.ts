import {DealerImage} from "~/apollo/fragments/image/dealerImage";

export const DealerList = gql`
    fragment DealerList on Dealer {
    id
    phone
    title
    metro
    short_description
    youtube_playlist_review
    slug
    address
    rating
    schedule
    site
    images {
        ... DealerImage
    }
}`;