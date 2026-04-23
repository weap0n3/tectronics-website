import { API_ROUTES } from '@/constants/routes'
import { IUser } from '@/types/order.interface'
import { IProduct } from '@/types/product.interface'
import axios from 'axios'
import { UsersService } from '../users/users.service'

async function addOrder(cart: IProduct[], user: IUser) {
	await axios
		.post(API_ROUTES.ADD_ORDER, { cart, user })
		.catch(err => console.log(err))
}

export const OrdersService = {
	async validateOrder(cart: IProduct[], user: IUser) {
		let client = await UsersService.getUserByEmail(user.email)

		if (!client) {
			await UsersService.addUser(user)
			client = await UsersService.getUserByEmail(user.email)
		}
		addOrder(cart, client)
	},
}
