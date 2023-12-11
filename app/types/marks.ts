import {Folder} from '~/app/types/folders';

export type Mark = {
    id: number
    title: string
    title_rus: string
    slug: string
    offers_count: number
    folders: Folder[]
}