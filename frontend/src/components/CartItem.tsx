import { Button } from '@/components/ui/button'
import { Clicker } from '@/components/ui/Clicker'
import { X } from 'lucide-react'

export const CartItem = ({ item }: { item: IProduct }) => {
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
				${item.price.toFixed(2)}
			</p>
			<Clicker />
			<div className='w-full flex justify-center'>
				<Button variant='destructive' className='p-3 rounded-full'>
					<X />
				</Button>
			</div>
		</div>
	)
}
