import {DocumentNode} from 'graphql/language';
import {useSiteDomain} from '#imports';
import {ArticleCategoryInputType, ArticleCategoryType} from '~/app/types/blog';
import {articleCategory} from '~/apollo/queries/blog/articleCategory';

export const request = async <Response, Request = undefined>(query: DocumentNode, variables?: Omit<Request, 'site_id'>) => {
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

export const requestArticleCategories = async (variables: ArticleCategoryInputType) => {
  return await request<ArticleCategoryType, ArticleCategoryInputType>(articleCategory, variables);
};
