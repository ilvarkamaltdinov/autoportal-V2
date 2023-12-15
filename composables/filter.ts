import { useSiteDomain } from '#imports';

export default class Filter {
  public static replaceApiUrl(value: string) {
    const { api } = useSiteDomain();
    return `https://${api}/${value.split('/').slice(3).join('/')}`;
  }
}