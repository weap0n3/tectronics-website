import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/useCartStore'
import { IProduct } from '@/types/product.interface'
import React from 'react'

export const Clicker = React.memo(({ item }: { item: IProduct }) => {
	const cart = useCartStore(state => state)

	const startQuantity = cart.cart.find(i => i.id === item.id).quantity

	return (
		<div className='flex items-center space-x-2 w-full justify-center'>
			<Button
				variant='outline'
				onClick={() => {
					cart.removeCartItem(item)
				}}
			>
				-
			</Button>
			<input
				type='number'
				value={startQuantity}
				onChange={e => cart.addCartItem(item, parseInt(e.target.value) || 1)}
				min='1'
				className='bg-transparent w-12 text-center rounded-sm p-[6px] focus:border focus:border-accent  focus:outline-none'
			/>
			<Button
				variant='outline'
				onClick={() => {
					cart.addCartItem(item)
				}}
			>
				+
			</Button>
		</div>
	)
})
