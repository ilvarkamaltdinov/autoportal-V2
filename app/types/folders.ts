import {Generation} from '~/app/types/generations';

export type Folder = {
    id: number
    title: string
    title_rus: string
    slug: string
    offers_count: number
    generation: Generation[]
}