import { API_ROUTES } from '@/constants/routes'
import { ICustomer, IOrder, IOrderApi } from '@/types/order.interface'
import { IProduct } from '@/types/product.interface'
import axios from 'axios'
import { UsersService } from '../users/users.service'
import { OrderApiMapper } from './orderApiMapper'

async function addOrder(cart: IProduct[], user: ICustomer) {
	await axios
		.post(API_ROUTES.ADD_ORDER, { cart, user })
		.catch(err => console.log(err))
}

export const OrdersService = {
	async validateOrder(cart: IProduct[], user: ICustomer) {
		let client = await UsersService.getUserByEmail(user.email)

		if (!client) {
			await UsersService.addUser(user)
			client = await UsersService.getUserByEmail(user.email)
		}
		addOrder(cart, client)
	},
	async getOrders(): Promise<IOrder[]> {
		try {
			const response = await axios.get<IOrderApi[]>(API_ROUTES.GET_ORDERS)

			const orders = OrderApiMapper(response.data)

			return orders
		} catch (err) {
			console.log(err)
		}
	},
}
