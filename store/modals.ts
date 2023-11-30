import {defineStore} from 'pinia';

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
    modalOfferSelection_mark: null,
    modalOfferSelection_folder: null,
    modalOfferSelection_generation: null,
    modalOfferSelection_offer: <ModalOfferSelection_offerType | null>null,
  }),
  actions: {
    setModal(payload: ModalType) {
      this.modal = payload;
    },
    closeModal() {
      this.modal = {
        open: false,
        component: '',
        title: '',
        subtitle: ''
      };
    },

    //модалка выбора автомобиля
    setModalOfferSelection_mark(payload: null) {
      this.modalOfferSelection_mark = payload;
    },
    setModalOfferSelection_folder(payload: null) {
      this.modalOfferSelection_folder = payload;
    },
    setModalOfferSelection_generation(payload: null) {
      this.modalOfferSelection_generation = payload;
    },
  }
});