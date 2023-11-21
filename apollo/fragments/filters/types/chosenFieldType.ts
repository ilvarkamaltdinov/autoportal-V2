import {MarkFieldType} from "~/apollo/fragments/filters/types/markFieldType";
import {FolderFieldType} from "~/apollo/fragments/filters/types/folderFieldType";
import {GenerationFieldType} from "~/apollo/fragments/filters/types/generationFieldType";
import {DriveTypeFieldType} from "~/apollo/fragments/filters/types/driveTypeFieldType";
import {BodyTypeFieldType} from "~/apollo/fragments/filters/types/bodyTypeFieldType";
import {EngineTypeFieldType} from "~/apollo/fragments/filters/types/engineTypeFieldType";
import {GearboxFieldType} from "~/apollo/fragments/filters/types/gearboxFieldType";

export const ChosenFieldType = gql`
    ${MarkFieldType}
    ${FolderFieldType}
    ${GenerationFieldType}
    ${GearboxFieldType}
    ${EngineTypeFieldType}
    ${DriveTypeFieldType}
    ${BodyTypeFieldType}
fragment ChosenFieldType on ChosenFieldType {
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
  yearFrom
  yearTo
  priceFrom
  priceTo
}`;