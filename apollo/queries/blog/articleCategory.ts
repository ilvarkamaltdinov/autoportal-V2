export const blogCategoryGql = gql`query articleCategory($site_id: Int!, $limit: Int) {
    articleCategory(site_id: $site_id) {
        id
        slug
        page_title
        url
        articles(limit:$limit){
            id
            page_title
            views
            url
            createdAt(format:"d.m.Y")
            image_preview{
                thumb
                small
                thumb_webp
                small_webp
            }
        }
    }
}`;
