import { ChosenFieldType } from '~/apollo/fragments/filters/types/chosenFieldType';
import { GenerationFieldType } from '~/apollo/fragments/filters/types/generationFieldType';
import { FolderFieldType } from '~/apollo/fragments/filters/types/folderFieldType';
import { MarkFieldType } from '~/apollo/fragments/filters/types/markFieldType';

export const OnlyFilterValues = gql`
    ${MarkFieldType}
    ${FolderFieldType}
    ${GenerationFieldType}
    ${ChosenFieldType}
    fragment OnlyFilterValues on OfferFilterValues {
  mark{
    ... MarkFieldType
  }
  folder{
    ... FolderFieldType
  }
  generation{
    ... GenerationFieldType
  }
  chosen{
    ... ChosenFieldType
  }
}`;
