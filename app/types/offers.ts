export type OffersCatalogInputType = {
    limit?: number
    page?: number
    sort?: string
    category?: string
    set?: [string]
}
export type OfferCatalog = {
    id: number
    external_id: number
    is_stock: boolean
    name: string
    category_enum: number
    price: number
    run: number
    year: number
    engine_power: number
    engine_volume: number
    mark: {
        id: number
        slug: string
        title: string
    }
    folder: {
        id: number
        slug: string
        title: string
    }
    images: {
        small_webp: string
    }
    owner: {
        id: number
        title: string
        number: number
    }
    driveType: {
        id: number
        title: string
        name: string
    }
    bodyType: {
        id: number
        title: string
        name: string
    }
    gearbox: {
        id: number
        title: string
        title_short_rus: string
        name: string
    }
    engineType: {
        id: number
        title: string
        name: string
    }
    generation: {
        id: number
        title: string
        name: string
    }
    dealer: {
        id: number
        phone: number
        slug: string
        title: string
        image_logo: string
    }
}
export type OfferCatalogData = {
    data: OfferCatalog[]
    total: number
    per_page: number
    current_page: number
    from: number
    to: number
    last_page: number
    has_more_pages: boolean
}