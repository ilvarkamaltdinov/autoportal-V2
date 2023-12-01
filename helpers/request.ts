import {DocumentNode} from 'graphql/language';
import {useSiteDomain} from '#imports';
import {BlogCategoriesInputType, BlogCategoriesType} from '~/app/types/blog';
import {blogCategoryGql} from '~/apollo/queries/blog/articleCategory';
import {banksGql} from '~/apollo/queries/bank/banks';
import {BanksData} from '~/app/types/banks';

export const request = async <Response, Request = undefined>(query: DocumentNode, variables?: Request) => {
  const {siteId} = useSiteDomain();
  const assignVariables = {
    site_id: siteId
  };
  const params = {...assignVariables, ...variables};
  const removeEmptyParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null));
  return useAsyncQuery<Response>({query, variables: removeEmptyParams});
};
export const postRequest = async <Response, Request = undefined>(query: DocumentNode, variables?: Request, isNewApi?: boolean) => {
  let siteId = null;
  let clientId = 'default';
  if (isNewApi) {
    clientId = 'new';
    siteId = 1;
  } else {
    siteId = 173;
  }

  const assignVariables = {
    site_id: siteId
  };
  const params = {...assignVariables, ...variables};
  const removeEmptyParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null));
  return useMutation<Response>(query, {variables: removeEmptyParams, clientId});
};

export const requestBlogCategories = async (variables: BlogCategoriesInputType) => {
  return await request<BlogCategoriesType, BlogCategoriesInputType>(blogCategoryGql, variables);
};
export const requestBanks = async () => {
  return await request<BanksData>(banksGql);
};
