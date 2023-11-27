import {GenerationType} from '~/app/types/generations';

export type FolderType = {
    id: number
    title: string
    title_rus: string
    offers_count: number
    slug: string
    generations: GenerationType[]
}