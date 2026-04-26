import { IProduct } from '@/types/product.interface'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ICartItem extends IProduct {
	quantity: number
}

interface IUseCartStore {
	cart: ICartItem[]
	addCartItem: (product: IProduct, amount?: number) => void
	removeCartItem: (product: IProduct) => void
	decreaseCartItem: (product: IProduct) => void
	getTotalPrice: () => number
	emptyCart: () => void
}

const findExistingItem = (cart: ICartItem[], product: IProduct) => {
	return cart.find(i => i.id === product.id)
}

export const useCartStore = create<IUseCartStore>()(
	persist(
		(set, get) => ({
			cart: [],
			addCartItem: (product, amount) =>
				set(state => {
					const existingItem = findExistingItem(state.cart, product)
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
			removeCartItem: product =>
				set(state => ({
					cart: state.cart.filter(i => i.id !== product.id),
				})),
			decreaseCartItem: product =>
				set(state => ({
					cart: state.cart.map(item =>
						item.id === product.id
							? {
									...item,
									quantity: item.quantity === 1 ? 1 : item.quantity - 1,
								}
							: item,
					),
				})),
			getTotalPrice: () =>
				get().cart.reduce(
					(total, i) =>
						total + i.quantity * (i.discPrice === 0 ? i.price : i.discPrice),
					0,
				),
			emptyCart: () => set({ cart: [] }),
		}),
		{ name: 'cart-storage' },
	),
)
