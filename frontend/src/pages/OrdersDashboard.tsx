import { OrdersService } from '@/services/orders/orders.service'
import { useQuery } from '@tanstack/react-query'

const OrdersDashboard = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['orders'],
		queryFn: OrdersService.getOrders,
	})

	if (isLoading) return <p>Loading...</p>

	return (
		<main className='p-6 min-h-screen'>
			<div className='max-w-5xl mx-auto space-y-6'>
				{data?.map(order => (
					<div
						key={order.orderID}
						className='bg-muted shadow-md rounded-xl border p-5'
					>
						{/* Header */}
						<div className='flex justify-between items-center border-b pb-3 mb-4'>
							<h2 className='text-lg font-semibold'>Order #{order.orderID}</h2>
							<span className='px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700'>
								{order.orderStatus}
							</span>
						</div>

						{/* Customer info */}
						<div className='grid grid-cols-2 gap-2 text-sm mb-4'>
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

						{/* Items */}
						<div className='border-t pt-3'>
							<h3 className='font-medium mb-2'>Items</h3>
							<div className='space-y-1'>
								{order.orderItems?.map((item, i) => (
									<div
										key={i}
										className='flex justify-between text-sm p-2 rounded'
									>
										<span>{item.productName}</span>
										<span className='font-medium'>x{item.quantity}</span>
									</div>
								))}
							</div>
						</div>

						{/* Footer */}
						<div className='flex justify-between mt-4 pt-3 border-t'>
							<p className='text-sm text-gray-600'>Total:</p>
							<p className='font-bold'>€{order.totalPrice}</p>
						</div>
					</div>
				))}
			</div>
		</main>
	)
}

export default OrdersDashboard
