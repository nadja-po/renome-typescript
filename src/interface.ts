export interface Images {
    id?: number
    src: string
    alt: string
}

export interface Items {
    id: number
    title: string
    url: string
    button?: boolean
    onclick?: boolean
}

export type Data = {
    logoText: string
    carouselTitle: string
    carouselSubtitle: string 
    aboutTitle: string
    aboutSubtitle: string
    galleryTitle: string
    gallerySubtitle: string
    aboutText: string
    footerText: string
    footerCopyright: string
    menuItems: Items[]
    submenuItems: Items[]
    cartItems: Items[]
    carouselImages: Images[] 
    aboutImages: Images[]
    galleryImages: Images[]
    footerIcons: Images[]
  }