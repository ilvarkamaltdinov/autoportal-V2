import { computed } from '#imports';
export default computed(() => {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const hours = new Date().getHours();
  //проверка на дату с 31 декабря по 2 января
  if ((month === 12 && day === 31) || (month === 1 && day <= 2)) {
    if (
      //проверка на вермя с 18:00 31 ого
      (month === 12 && day === 31 && hours >= 18)
      ||
      //проверка на 1ое января
      (month === 1 && day === 1)
      ||
      //проверка на вермя с до 9:00 2ого
      (month === 1 && day === 2 && hours <= 9)) {
      return true;
    }
  }
  return false;
});