import {defineNuxtPlugin} from '#app';
import {domains} from '~/app/variables';
import {useSiteConfig} from '~/store/siteConfig';

export default defineNuxtPlugin(async ({ssrContext}) => {
  const host = ssrContext?.event.node.req.headers.host;
  const filteredDomain = domains.filter(value => value.domain === host);
  const currentDomain = filteredDomain.length ? filteredDomain[0] : domains[0];

  const siteConfig = useSiteConfig();

  await siteConfig.getSiteConfig();
});