export const ROUTES = {
	HOME: '/#home',
	PRODUCTS: '/products',
	ABOUT: '/#about',
	CONTACT: '#contact',
	CART: '/cart',
}

const BASE_API = '/api'

export const API_ROUTES = {
	GET_PRODUCTS: `${BASE_API}/products`,

	ADD_ORDER: `${BASE_API}/addOrder`,
	GET_ORDERS: `${BASE_API}/getOrders`,

	GET_USERS: `${BASE_API}/getUsers`,
	ADD_USER: `${BASE_API}/addUser`,
}
