import {SettingsType} from "~/app/types/settings";
import {MarkType} from "~/app/types/marks";

export type SiteConfigType = {
    settings: SettingsType
    markFolderGeneration: MarkType[]
}

export type SiteConfigRequest = {
    category: string
}