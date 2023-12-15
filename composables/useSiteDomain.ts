import { findDomain } from '~/app/variables';
import { useRequestURL } from '#app';

export default function useSiteDomain(host = useRequestURL().host) {
  return findDomain(host);
}