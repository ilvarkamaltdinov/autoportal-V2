export const OfferPage = gql`
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
}`;
