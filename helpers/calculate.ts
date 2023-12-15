import { numberFormat } from '~/helpers/filters';

export const calculate = (price: number | undefined, payment: number, period: number) => {
  if (price) {
    const creditProc: number = 4.9;
    const car_price: number = price;
    const creditTime: number = period;
    const firstPay: number = payment;
    let total: number = 0;
    const i: number = creditProc / 12 / 100;
    const n: number = creditTime;
    let S: number;
    if (firstPay !== 0) {
      S = car_price - (car_price * firstPay) / 100;
    } else {
      S = car_price;
    }
    let K: number = 0;
    if (car_price) {
      K = (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
      total = Math.round(K * S);
      return numberFormat(total);
    } else {
      return '-';
    }
  } else {
    return '-';
  }
};


// if (props.offer) {
//
//     this.paymentPriceValue = ((car_price * firstPay) / 100).toString() + ` руб. (${firstPay}%)`

//     if (car_price) {
//         K = (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
//         A = Math.round(K * S);
//         this.total = String(A).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + " ₽"
//         //для отображения в блоке рядом с выбранным банком
//         this.setPeriodValue(this.periodValue)
//         this.setMonthPaymentValue(A)
//         //
//     }
// } else {
//     return '-'
// }