import * as yup from 'yup';

export default computed(() => ({
  phone: {
    mask: '+7 (999) 999-9999',
    rule: yup.string().required().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/),
  },
  fullName: {
    mask: null,
    rule: yup.string().required(),
  },
  car: {
    mask: null,
    rule: yup.string().required(),
  },
}));