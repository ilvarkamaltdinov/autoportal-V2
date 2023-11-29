import {GenerationType} from '~/apollo/fragments/generation/generationType';

export const generations = gql`
    ${GenerationType}
    query generations($site_id: Int!, $folder_id: Int, $mark_slug: String, $category: String,  $folder_slug: String) {
    generations(site_id: $site_id, folder_id: $folder_id, category: $category, mark_slug: $mark_slug, folder_slug: $folder_slug) {
        ... GenerationType
    }
}`;