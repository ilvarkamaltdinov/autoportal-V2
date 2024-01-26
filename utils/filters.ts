export const engineVolume = (volume: number) => {
  return volume.toFixed(1);
};
export const numberFormat = (value: number) => {
  if (!value) return '';
  return new Intl.NumberFormat('ru-RU').format(value);
};
export const creditPrice = (value: number) => {
  const percent: number = 4.9;
  const n: number = 84;
  const i: number = percent / 12 / 100;
  const K: number = (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  return numberFormat(Math.round(K * value));
};
export const calculatorPayment = (payment: string) => {
  return `${numberFormat(payment.split(' ')[0])}`;
};
