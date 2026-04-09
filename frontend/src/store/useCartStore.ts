import { IProduct } from '@/types/product.interface'
import { create } from 'zustand'

interface ICartItem extends IProduct {
	quantity: number
}

interface IUseCartStore {
	cart: ICartItem[]
	addCartItem: (product: IProduct) => void
	removeCartItem: (product: IProduct) => void
}

export const useCartStore = create<IUseCartStore>(set => ({
	cart: [],
	addCartItem: product =>
		set(state => {
			const existingItem = state.cart.find(i => i.id === product.id)
			console.log('added existing item')
			console.log(state.cart)
			if (existingItem) {
				return {
					cart: state.cart.map(i =>
						i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
					),
				}
			} else {
				console.log('test')
				return {
					cart: [...state.cart, { ...product, quantity: 1 }],
				}
			}
		}),
	removeCartItem: product =>
		set(state => ({
			cart: state.cart.filter(item => item.id !== product.id),
		})),
}))
