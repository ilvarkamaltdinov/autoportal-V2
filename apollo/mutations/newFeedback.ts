import {DocumentNode} from "graphql/language";

export const sendNewFeedbackGql: DocumentNode = gql`
    mutation feedback(
        $site_id:Int!,
        $type_enum:String!,
        $client_name:String,
        $client_phone:String!,
        $client_age:String,
        $client_region:String,
        $client_vehicle_mark:String,
        $client_vehicle_model:String,
        $client_vehicle_run:String,
        $client_vehicle_year:String,
        $client_vehicle_body_type: String,
        $client_vehicle_price: String,
        $client_vehicle_owners: String,
        $client_vehicle_gearbox: String,
        $client_vehicle_engine: String,
        $credit_initial_fee:String,
        $credit_period:String,
        $utm_source:String,
        $utm_content:String,
        $utm_medium:String,
        $utm_campaign:String,
        $utm_term:String,
        $offer_title:String,
        $offer_price:String,
        $comment:String
    ){
        feedback(
            site_id: $site_id,
            type_enum: $type_enum,
            client_name: $client_name,
            client_phone: $client_phone,
            client_age: $client_age,
            client_region: $client_region,
            client_vehicle_mark: $client_vehicle_mark,
            client_vehicle_model: $client_vehicle_model,
            client_vehicle_run: $client_vehicle_run,
            client_vehicle_year: $client_vehicle_year,
            client_vehicle_body_type: $client_vehicle_body_type,
            client_vehicle_price: $client_vehicle_price,
            client_vehicle_owners: $client_vehicle_owners,
            client_vehicle_gearbox: $client_vehicle_gearbox,
            client_vehicle_engine: $client_vehicle_engine,
            credit_initial_fee: $credit_initial_fee,
            credit_period: $credit_period,
            utm_source: $utm_source,
            utm_content: $utm_content,
            utm_medium: $utm_medium,
            utm_campaign: $utm_campaign,
            utm_term: $utm_term,
            offer_title: $offer_title,
            offer_price: $offer_price,
            comment: $comment){
            id
        }
    }`
export type SendNewFeedback = {
    type_enum: string
    client_name: string
    client_phone: string
    client_age?: string
    client_region?: string
    client_vehicle_mark?: string
    client_vehicle_model?: string
    client_vehicle_run?: string
    client_vehicle_year?: string
    client_vehicle_body_type?: string
    client_vehicle_price?: string
    client_vehicle_owners?: string
    client_vehicle_gearbox?: string
    client_vehicle_engine?: string
    credit_initial_fee?: string
    credit_period?: string
    utm_source?: string
    utm_content?: string
    utm_medium?: string
    utm_campaign?: string
    utm_term?: string
    offer_title?: string
    offer_price?: string
    comment?: string
}

export type SendNewFeedbackData = {
    id: number
}
