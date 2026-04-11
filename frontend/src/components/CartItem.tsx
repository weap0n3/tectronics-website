import { IProduct } from '@/types/product.interface'
import { Clicker } from '@components/custom-ui/Clicker'
import { Button } from '@components/ui/button'
import { useCartStore } from '@store/useCartStore'
import { X } from 'lucide-react'

type TCartItemProps = {
	item: IProduct
}

export const CartItem = ({ item }: TCartItemProps) => {
	const removeCartItem = useCartStore(state => state.removeCartItem)

	return (
		<div
			key={item.id}
			className='grid grid-cols-[3fr_4fr_2fr_2fr_1fr] items-center gap-4 p-4'
		>
			<img src={item.photo} alt={item.name} className=' object-cover' />
			<div className='space-y-3 flex flex-col'>
				<h2 className='text-lg font-bold line-clamp-1'>{item.name}</h2>
				<p className='line-clamp-3'>{item.description}</p>
			</div>
			<p className='text-2xl text-primary text-center'>
				€ {item.price.toFixed(2)}
			</p>
			<Clicker item={item} />
			<div className='w-full flex justify-center'>
				<Button
					variant='destructive'
					className='p-3 rounded-full'
					onClick={() => removeCartItem(item)}
				>
					<X />
				</Button>
			</div>
		</div>
	)
}
