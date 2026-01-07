export enum NavbarLinks {
    HOME = 'Home',
    ABOUT = 'About',
    SERVICES = 'Services',
    CONTACT = 'Contact',
}

export interface NavbarLink {
    label: NavbarLinks;
    href: string;
}

export const navbarLinks: NavbarLink[] = [
    {
        label: NavbarLinks.HOME,
        href: '/',
    },
    {
        label: NavbarLinks.ABOUT,
        href: '/about',
    },
    {
        label: NavbarLinks.SERVICES,
        href: '/services',
    },
    {
        label: NavbarLinks.CONTACT,
        href: '/contact',
    },
]