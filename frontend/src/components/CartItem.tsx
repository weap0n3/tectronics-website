import { Button } from '@/components/ui/button'
import { Clicker } from '@/components/ui/Clicker'
import { X } from 'lucide-react'

export const CartItem = ({
	item,
}: {
	item: { id: number; name: string; photo: string; price: number }
}) => {
	return (
		<div key={item.id} className='flex items-center'>
			<img src={item.photo} alt={item.name} className='w-28' />
			<h2 className='text-xl font-bold'>{item.name}</h2>
			<p className='text-lg text-gray-600'>${item.price.toFixed(2)}</p>
			<div className='flex items-center space-x-2'>
				<Clicker id={item.id} />
			</div>
			<div>
				<Button variant='destructive' className='p-3 rounded-full'>
					<X />
				</Button>
			</div>
		</div>
	)
}
