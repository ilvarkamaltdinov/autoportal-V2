import { Mark } from '~/app/types/marks';
import { SeoTagType } from '~/app/types/seoTags';
import { Set } from '~/app/types/sets';
import { Settings } from '~/app/types/settings';

export type SiteConfigType = {
    seoTag: SeoTagType[]
    siteSettings: Settings
    markFolderGeneration: Mark[]
    sets: Set[]
}

