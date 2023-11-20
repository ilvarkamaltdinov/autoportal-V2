export const engineVolume = (volume: number) => {
    return volume.toFixed(1);
}
export const numberFormat = (value: number) => {
    if (!value) return ''
    return new Intl.NumberFormat("ru-RU").format(value);
}
export const creditPrice = (value: number) => {
    let percent: number = 4.9
    let n: number = 84;
    let i: number = percent / 12 / 100;
    let K: number = (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    return numberFormat(Math.round(K * value));
}