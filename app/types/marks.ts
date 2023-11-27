import {FolderType} from '~/app/types/folders';

export type MarkType = {
    id: number
    title: string
    title_rus: string
    slug: string
    offers_count: number
    folders: FolderType[]
}

export type PopularMarksType = string[]