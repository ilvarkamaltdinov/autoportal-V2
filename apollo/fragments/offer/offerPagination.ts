import { ColorType } from '~/apollo/fragments/offer/types/colorType';
import { DealerMiniType } from '~/apollo/fragments/offer/types/dealerMiniType';
import { GenerationOfferType } from '~/apollo/fragments/offer/types/generationOfferType';
import { EngineTypeType } from '~/apollo/fragments/offer/types/engineTypeType';
import { MarkType } from '~/apollo/fragments/offer/types/markType';
import { FolderType } from '~/apollo/fragments/offer/types/folderType';
import { OwnerType } from '~/apollo/fragments/offer/types/ownerType';
import { DriveTypeType } from '~/apollo/fragments/offer/types/driveTypeType';
import { BodyTypeType } from '~/apollo/fragments/offer/types/bodyTypeType';
import { GearboxType } from '~/apollo/fragments/offer/types/gearboxType';

export const OfferPagination = gql`
    ${MarkType}
    ${FolderType}
    ${ColorType}
    ${OwnerType}
    ${DealerMiniType}
    ${GenerationOfferType}
    ${EngineTypeType}
    ${DriveTypeType}
    ${BodyTypeType}
    ${GearboxType}
    fragment OfferPagination on OfferTypePagination {
  data {
    id
    external_id
    is_stock
    external_unique_id
    name
    category_enum
    price
    price_old
    run
    vin
    color {
      ... ColorType
    }
    rating {
      rating_total
      rating_body
      rating_interior
      rating_technical
    }
    year
    createdAt(format: $dateFormat, sub_day: true)
    engine_power
    engine_volume
    mark {
      ... MarkType
    }
    folder {
      ... FolderType
    }
    images {
      small_webp
    }
    owner {
      ... OwnerType
    }
    driveType {
      ... DriveTypeType
    }
    bodyType {
      ... BodyTypeType
    }
    gearbox {
      ... GearboxType
    }
    engineType {
      ... EngineTypeType
    }
    generation {
      ... GenerationOfferType
    }
    dealer {
      ... DealerMiniType
    }
  }
  last_page
  current_page
  total
  has_more_pages
}`;
