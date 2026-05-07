import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart-store/useCartStore'
import { IProduct } from '@/types/product.interface'

export const Clicker = ({ item }: { item: IProduct }) => {
	const quantity = useCartStore(
		state => state.cart.find(i => i.id === item.id)?.quantity ?? 0,
	)

	const increase = useCartStore(state => state.increaseQuantity)
	const decrease = useCartStore(state => state.decreaseQuantity)

	return (
		<div className='flex items-center space-x-2 w-full justify-center'>
			<Button variant='outline' onClick={() => decrease(item)}>
				-
			</Button>

			<input
				type='number'
				value={quantity}
				onChange={e => increase(item, parseInt(e.target.value) || 1)}
				min='1'
				className='bg-transparent w-12 text-center rounded-sm p-[6px] focus:border focus:border-accent focus:outline-none'
			/>

			<Button variant='outline' onClick={() => increase(item)}>
				+
			</Button>
		</div>
	)
}
