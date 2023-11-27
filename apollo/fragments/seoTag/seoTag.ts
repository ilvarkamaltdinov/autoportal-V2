import {SeoTagCrumbs} from '~/apollo/fragments/seoTag/seoTagCrumbs';
import {SiteText} from '~/apollo/fragments/siteText/siteText';

export const SeoTag = gql`
    fragment SeoTag on SeoTag {
    page_title
    title
    description
    crumbs {
        ... SeoTagCrumbs
    },
    site_text {
       ... SiteText
    }

}`;