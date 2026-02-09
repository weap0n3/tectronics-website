import { Product } from '@/types/product.interface'
import axios from 'axios'

export const ProductsService = {
	async getProducts() {
		try {
			const response = await axios.get('/api/products', {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const products: Product[] = response.data.map(p => ({
				id: Number(p.id),
				name: p.name,
				price: parseFloat(p.price), // convert string to number
				photo: p.photo,
				description: p.description,
				link: p.link,
			}))
			return products
		} catch (err) {
			console.error('Error fetching products:', err)
			return []
		}
	},
}
