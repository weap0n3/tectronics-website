import { IOrder } from '@/types/order.interface'
import { cn } from '@/utils/cn'
import { formatPrice } from '@/utils/numberFormatter'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

type OrderCardProps = {
	order: IOrder
}

export const OrderCard = ({ order }: OrderCardProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	//const [status, setStatus] = useState<TStatus>('pending')

	return (
		<div
			key={order.orderID}
			className='bg-muted shadow-md rounded-xl border p-5'
		>
			<div className='flex justify-between items-center pb-3'>
				<div className='flex justify-between items-center w-full'>
					<h2 className='text-2xl font-semibold'>Order #{order.orderID}</h2>
					<button>
						<span className='px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700'>
							{order.orderStatus}
						</span>
					</button>
				</div>
				<div className='ml-5'>
					<button onClick={() => setIsOpen(!isOpen)}>
						<ChevronDown
							className={cn(
								'transition-transform duration-300',
								isOpen ? 'rotate-180' : '',
							)}
						/>
					</button>
				</div>
			</div>

			<div
				className={cn(
					'space-y-3 transition-all duration-300 overflow-hidden',
					isOpen
						? 'placeholder-opacity-100 max-h-[600px] my-4'
						: 'opacity-0 max-h-0 my-0',
				)}
			>
				<div className='grid grid-cols-2 gap-2'>
					<p>
						<strong>Name:</strong> {order.name}
					</p>
					<p>
						<strong>Email:</strong> {order.email}
					</p>
					<p>
						<strong>Address:</strong> {order.address}
					</p>
					<p>
						<strong>City:</strong> {order.ort}
					</p>
					<p>
						<strong>PLZ:</strong> {order.plz}
					</p>
					<p>
						<strong>Country:</strong> {order.land}
					</p>
				</div>

				<div className='py-2 border-y'>
					<h3 className='font-medium mb-2'>Items</h3>
					<div className='space-y-1'>
						{order.orderItems?.map((item, i) => (
							<div key={i} className='flex justify-between text-sm p-2 rounded'>
								<span> - {item.productName}</span>
								<span className='font-medium'>x{item.quantity}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='flex justify-between pt-3 '>
				<p className='text-xl text-primary'>Total:</p>
				<p className='font-bold text-xl'>€ {formatPrice(order.totalPrice)}</p>
			</div>
		</div>
	)
}
