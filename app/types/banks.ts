export type BankInputType = {
    slug: string
}
export type BanksData = {
    banks: Bank[]
}
export type Bank = {
    id: number,
    name: string
    slug: string
    request: number
    approval: number
    rating: number
    rate: number
    image: string
};
export type featuredBank = {
    slug: string,
    image: string,
    class: string,
    name?: string,
    rate?: number
}