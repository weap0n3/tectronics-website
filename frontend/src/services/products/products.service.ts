import { API_ROUTES } from '@/constants/routes'
import { IProduct, IProductApi } from '@/types/product.interface'
import axios from 'axios'
import { ProductApiMapper } from './productApiMapper'

export const ProductsService = {
	async getProducts(): Promise<IProduct[]> {
		try {
			const response = await axios.get<IProductApi[]>(API_ROUTES.GET_PRODUCTS, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const products: IProduct[] = response.data.map(ProductApiMapper)
			return products
		} catch (err) {
			console.error('Error fetching products:', err)
			return []
		}
	},
}
