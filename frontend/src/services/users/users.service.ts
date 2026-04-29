import { API_ROUTES } from '@/constants/routes'
import { ICustomer } from '@/types/order.interface'
import axios from 'axios'

export const UsersService = {
	async getUsers(): Promise<ICustomer[]> {
		try {
			const response = await axios.get(API_ROUTES.GET_USERS)
			return response.data
		} catch (err) {
			console.error('Error fetching users:', err)
			return []
		}
	},
	async getUserByID(userId: number): Promise<ICustomer | null> {
		const response = await axios
			.get(`${API_ROUTES.GET_USERS}/${userId}`)
			.catch(err => {
				console.error('Error fetching user by ID:', err)
				return null
			})
		return response?.data[0] ?? null
	},
	async getUserByEmail(userEmail: string): Promise<ICustomer | null> {
		try {
			const response = await axios.get(
				`${API_ROUTES.GET_USERS}/email?email=${userEmail}`,
			)

			return response?.data ?? null
		} catch (err) {
			console.error('Error fetching user by ID:', err)
			return null
		}
	},
	async addUser(user: ICustomer) {
		const response = await axios
			.post(`${API_ROUTES.ADD_USER}`, user)
			.catch(err => console.log('Error fetching users:', err))
	},
}
