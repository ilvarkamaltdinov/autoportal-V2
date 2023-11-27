import {findDomain} from '~/app/variables';

export default function useSiteId(host: string) {
  return findDomain(host);
}