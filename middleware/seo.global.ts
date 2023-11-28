import {defineNuxtRouteMiddleware} from '#imports';
import {seoTags} from '~/apollo/queries/seoTags';
import {bank} from '~/apollo/queries/bank/bank';
import {request} from '~/helpers/request';
import {SeoTag, SeoTagsQuery} from '~/types/graphql';
export default defineNuxtRouteMiddleware(async (to, from) => {
  async function fetchSeoTags() {
    const seoQuery = await request<{ seoTag: SeoTag }, SeoTagsQuery>(seoTags, {
      url: to.path === '/' ? '/home' : to.path
    });
    if (to.params.bank) {
      try {
        const response = await request(bank, route.params.bank);
        // store.commit('banks/SET_BANK', response.data.bank); todo set bank
      } catch (e) {
      }
    }
    return {
      description: seoQuery.data.value.seoTag.description,
      pageTitle: seoQuery.data.value.seoTag.page_title,
      title: seoQuery.data.value.seoTag.title,
      crumbs: seoQuery.data.value.seoTag.crumbs,
      siteText: seoQuery.data.value.seoTag.site_text
    };
  }
  const seoTagsResult = await fetchSeoTags();
  const { domain } = useSiteDomain();
  const seo = useHead({
    title: seoTagsResult.title,
    link: [
      {
        rel: 'canonical',
        href: 'https://' + domain + to.path
      }
    ],
    meta: [
      {
        hid: 'desctiption',
        name: 'description',
        content: `${seoTagsResult.description}`
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://' +  domain + to.path,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: `${seoTagsResult.title}`
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `${seoTagsResult.description}`
      },
      {
        name: 'robots',
        content: 'noindex, nofollow'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://' + domain + '/carro.png'
      }
    ]
  });

  // if (this.offer) { todo set offer
  //   currentMeta.push({
  //     hid: 'og:image',
  //     property: 'og:image',
  //     content: this.offer.images[0].thumb
  //   })
  // }


});