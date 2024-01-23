import * as yup from 'yup';

export default computed(() => ({
  phone: {
    mask: '+7 (999) 999-9999',
    rule: yup.string().required(),
  },
  fullName: {
    mask: '',
    rule: yup.string().required(),
  },

}));