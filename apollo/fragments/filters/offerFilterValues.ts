import {ChosenFieldType} from "~/apollo/fragments/filters/types/chosenFieldType";
import {BodyTypeFieldType} from "~/apollo/fragments/filters/types/bodyTypeFieldType";
import {DriveTypeFieldType} from "~/apollo/fragments/filters/types/driveTypeFieldType";
import {EngineTypeFieldType} from "~/apollo/fragments/filters/types/engineTypeFieldType";
import {GearboxFieldType} from "~/apollo/fragments/filters/types/gearboxFieldType";
import {GenerationFieldType} from "~/apollo/fragments/filters/types/generationFieldType";
import {FolderFieldType} from "~/apollo/fragments/filters/types/folderFieldType";
import {MarkFieldType} from "~/apollo/fragments/filters/types/markFieldType";

export const OfferFilterValues = gql`
    ${MarkFieldType}
    ${FolderFieldType}
    ${GenerationFieldType}
    ${GearboxFieldType}
    ${EngineTypeFieldType}
    ${DriveTypeFieldType}
    ${BodyTypeFieldType}
    ${ChosenFieldType}
    fragment OfferFilterValues on OfferFilterValues {
  mark{
    ... MarkFieldType
  }
  folder{
    ... FolderFieldType
  }
  generation{
    ... GenerationFieldType
  }
  gearbox{
    ... GearboxFieldType
  }
  engineType{
    ... EngineTypeFieldType
  }
  driveType{
    ... DriveTypeFieldType
  }
  bodyType{
    ... BodyTypeFieldType
  }
  year
  price
  chosen{
    ... ChosenFieldType
  }
}`
