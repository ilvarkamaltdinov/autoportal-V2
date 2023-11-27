import {DocumentNode} from 'graphql/language';
export const siteConfigGql: DocumentNode = gql`
    query siteConfig(
        $site_id:Int
        $category:String
    ){
        settings(
            site_id: $site_id) {
            id
            settings{
                key
                value
            }
        }
        markFolderGeneration(site_id: $site_id, category: $category) {
            id
            title
            title_rus
            slug
            offers_count
            folders{
                id
                title
                title_rus
                slug
                offers_count
                generations{
                    id
                    name
                    slug
                    year_begin
                    year_end
                    offers_count
                }
            }
        }
    }`;