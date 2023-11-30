export default function numberFormat(value: number) {
  if (!value) return '';
  return new Intl.NumberFormat('ru-RU').format(value);
}