// pages.config.ts

import { ROUTES } from '@/constants/routes'
import { TFunction } from 'i18next'

export const getNavItems = (t: TFunction) => [
	{ label: t('home'), href: ROUTES.HOME },
	{ label: t('products'), href: ROUTES.PRODUCTS },
	{ label: t('about'), href: ROUTES.ABOUT },
	{ label: t('contact'), href: ROUTES.CONTACT },
	{ label: t('cart'), href: ROUTES.CART },
]
