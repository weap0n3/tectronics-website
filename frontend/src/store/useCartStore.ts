import { IProduct } from '@/types/product.interface'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ICartItem extends IProduct {
	quantity: number
}

interface IUseCartStore {
	cart: ICartItem[]
	addCartItem: (product: IProduct, amount?: number) => void
	removeCartItem: (product: IProduct, amount?: number) => void
	getTotalPrice: () => number
}

export const useCartStore = create<IUseCartStore>()(
	persist(
		(set, get) => ({
			cart: [],
			addCartItem: (product, amount) =>
				set(state => {
					const existingItem = state.cart.find(i => i.id === product.id)
					if (existingItem) {
						return {
							cart: state.cart.map(i =>
								i.id === product.id
									? { ...i, quantity: amount ?? i.quantity + 1 }
									: i,
							),
						}
					} else {
						return {
							cart: [...state.cart, { ...product, quantity: 1 }],
						}
					}
				}),
			removeCartItem: (product, amount) =>
				set(state => {
					const existingItem = state.cart.find(i => i.id === product.id)
					if (existingItem && existingItem.quantity > 1 && amount != 1) {
						return {
							cart: state.cart.map(item =>
								item.id === product.id
									? { ...item, quantity: item.quantity - 1 }
									: item,
							),
						}
					} else {
						return {
							cart: state.cart.filter(item => item.id !== product.id),
						}
					}
				}),
			getTotalPrice: () =>
				get().cart.reduce((total, i) => total + i.quantity * i.price, 0),
		}),
		{ name: 'cart-storage' },
	),
)
