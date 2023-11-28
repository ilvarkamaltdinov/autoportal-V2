import {computed} from '#imports';
export default computed(() => {
  const hours = new Date().getHours();
  return (hours >= 21 || hours <= 8);
});