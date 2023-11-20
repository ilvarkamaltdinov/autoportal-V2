import scrollTo from 'vue-scrollto'

export const scrollToElement = (elementId: string, timeout?: number) => {
    let options = {
        duration: 0,
        offset: -38,
        force: true
    }
    setTimeout(() => {
        scrollTo.scrollTo(elementId, options)
    }, timeout ? timeout : 25)
}