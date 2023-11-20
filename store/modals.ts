import {defineStore} from 'pinia'
import {MarkType} from "~/app/types/marks";
import {FolderType} from "~/app/types/folders";
import {GenerationType} from "~/app/types/generations";

export type ModalType = {
    open: boolean
    component: string
    title: string
    subtitle: string
}


export type ModalOfferSelection_offerType = null | {
    name: string
    price: number
}


export const useModals = defineStore('modals', {
    state: () => ({
        modal: {
            open: false,
            component: '',
            title: '',
            subtitle: ''
        },
        //модалка выбора автомобиля
        modalOfferSelection_mark: <MarkType | null>null,
        modalOfferSelection_folder: <FolderType | null>null,
        modalOfferSelection_generation: <GenerationType | null>null,
        modalOfferSelection_offer: <ModalOfferSelection_offerType | null>null,
    }),
    actions: {
        setModal(payload: ModalType) {
            this.modal = payload
        },
        closeModal() {
            this.modal = {
                open: false,
                component: '',
                title: '',
                subtitle: ''
            }
        },

        //модалка выбора автомобиля
        setModalOfferSelection_mark(payload: MarkType | null) {
            this.modalOfferSelection_mark = payload
        },
        setModalOfferSelection_folder(payload: FolderType | null) {
            this.modalOfferSelection_folder = payload
        },
        setModalOfferSelection_generation(payload: GenerationType | null) {
            this.modalOfferSelection_generation = payload
        },
    }
})