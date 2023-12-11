export type Benefit = {
    text: string,
    text_strong: string
    icon: string
    description: string
    slug: string
}

export const enum BenefitsEnumType {
    CREDIT = 'credit',
    BUYOUT = 'BUYOUT',
    CALLBACK = 'CALLBACK',
    TRADE_IN = 'TRADE_IN',
}