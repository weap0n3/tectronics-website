import { API_ROUTES } from '@/constants/routes'
import { IFormData } from '@/types/order.interface'
import { IProduct } from '@/types/product.interface'
import axios from 'axios'

export const OrdersService = {
	async addOrder(cart: IProduct[], customer: IFormData) {
		const response = await axios
			.post(API_ROUTES.ADD_ORDER, cart)
			.catch(err => console.log(err))
		return response[0]
	},
}
