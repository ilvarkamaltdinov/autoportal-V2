import { StoryContent } from '~/apollo/fragments/story/storyContent';

export const storyContents = gql`
    ${StoryContent}
    query storyContents(
    $site_id: Int!,
    $story_id:Int
) {
    storyContents(
        site_id: $site_id,
        story_id: $story_id,
    ) {
        ... StoryContent
    }
}`;