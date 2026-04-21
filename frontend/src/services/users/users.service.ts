import { API_ROUTES } from '@/constants/routes'
import { IUser } from '@/types/order.interface'
import axios from 'axios'

export const UsersService = {
	async getUsers(): Promise<IUser[]> {
		try {
			const response = await axios.get(API_ROUTES.GET_USERS)
			return response.data
		} catch (err) {
			console.error('Error fetching users:', err)
			return []
		}
	},
	async getUserByID(userId: number): Promise<IUser | null> {
		const response = await axios
			.get(`${API_ROUTES.GET_USERS}/${userId}`)
			.catch(err => {
				console.error('Error fetching user by ID:', err)
				return null
			})
		return response?.data[0] ?? null
	},
	async addUser(user: IUser) {
		await axios
			.post(`${API_ROUTES.ADD_USER}`)
			.catch(err => console.log('Error fetching users:', err))
	},
}
