import {ComplectationType} from "~/apollo/fragments/offer/types/complectationType";
import {ColorType} from "~/apollo/fragments/offer/types/colorType";
import {MarkType} from "~/apollo/fragments/offer/types/markType";
import {FolderType} from "~/apollo/fragments/offer/types/folderType";
import {OwnerType} from "~/apollo/fragments/offer/types/ownerType";
import {DriveTypeType} from "~/apollo/fragments/offer/types/driveTypeType";
import {BodyTypeType} from "~/apollo/fragments/offer/types/bodyTypeType";
import {GearboxType} from "~/apollo/fragments/offer/types/gearboxType";
import {EngineTypeType} from "~/apollo/fragments/offer/types/engineTypeType";
import {GenerationOfferType} from "~/apollo/fragments/offer/types/generationOfferType";
import {EquipmentType} from "~/apollo/fragments/offer/types/equipmentType";
import {DealerType} from "~/apollo/fragments/offer/types/dealerType";

export const OfferPage = gql`
    ${ComplectationType}
    ${ColorType}
    ${MarkType}
    ${FolderType}
    ${OwnerType}
    ${DriveTypeType}
    ${BodyTypeType}
    ${GearboxType}
    ${EngineTypeType}
    ${GenerationOfferType}
    ${EquipmentType}
    ${DealerType}
    fragment OfferPage on Offer {
    id
    is_active
    is_stock
    external_id
    name
    category_enum
    price
    price_old
    run
    vin
    year
    description
    rating {
        rating_total
        rating_body
        rating_interior
        rating_technical
    }
    createdAt(format: $dateFormat, sub_day: true)
    engine_power
    engine_volume
    modification{
        id
        name
    }
    complectation{
        ... ComplectationType
    }
    color {
        ... ColorType
    }
    images {
        ... ImageAllType
    }
    mark {
        ... MarkType
    }
    folder {
        ... FolderType
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
    equipment_groups{
        ... EquipmentType
    }
    dealer{
        ... DealerType
    }
}`
