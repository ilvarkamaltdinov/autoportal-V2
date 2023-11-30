export type ArticleCategoryInputType = {
    limit: number
}
export type ArticleCategoryType = {
    id: number
    slug: string
    page_title: string
    url: string
    articles: {
        id: number
        page_title: string
        views: string
        url: string
        createdAt: string
        image_preview: {
            thumb: string
            small: string
            thumb_webp: string
            small_webp: string
        }
    }
}