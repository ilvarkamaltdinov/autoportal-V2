export type OffersTypeRequest = {
    page?: number | null
    limit?: number
    category?: string
    mark_slug_array?: string[]
    mark_slug?: string
    folder_slug_array?: string[]
    folder_slug?: string
    external_id_array?: number[]
    sort?: string
    except_external_id?: number
    generation_slug_array?: string[]
    generation_slug?: string
    engine_type_id_array?: number[]
    body_type_id_array?: number[]
    gearbox_id_array?: number[]
    drive_type_id_array?: number[]
    owner_id_array?: number[]
    year_from?: number
    year_to?: number
    price_from?: number
    price_to?: number
    set?: string | null
    url?: string
    dateFormat?: string
}
export type OffersTypeData = {
    offers: {
        data: OfferType[]
        last_page: number
        current_page: number
        total: number
        has_more_pages: boolean
    }

}
export type OfferType = {
    id: number
    external_id: number
    external_unique_id: number
    name: string
    category_enum: string
    price: number
    price_old: number
    run: number
    vin: string
    year: number
    createdAt: string
    engine_power: number
    engine_volume: number
    color: {
        id: number
        title: string
        name: string
    }
    images: {
        small_webp: string
        medium_webp: string
        original: string
        tiny_webp: string
    }[]
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
    generation: {
        id: number
        slug: string
        name: string
    }
    owner: {
        id: number
        title: string
        number: number
    }
    driveType: {
        id: number
        title: string
        name: number
    }
    bodyType: {
        id: number
        title: string
        name: number
    }
    engineType: {
        id: number
        title: string
        name: number
    }
    gearbox: {
        id: number
        title: string
        title_short_rus: string
        name: string
    }
}
