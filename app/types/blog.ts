export type BlogCategoriesInputType = {
    limit: number
}
export type Article = {
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
export type BlogCategoryType = {
    id: number
    slug: string
    page_title: string
    url: string
    articles: Article[]
}

export type BlogCategoriesType = {
    articleCategory: BlogCategoryType[]
}
