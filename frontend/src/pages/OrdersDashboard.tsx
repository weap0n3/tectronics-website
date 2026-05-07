import { SwitchSlider } from '@/components/custom-ui/SwitchSlider'
import { OrderCard } from '@/components/orders/OrderCard'
import { OrdersService } from '@/services/orders/orders.service'
import { TStatus } from '@/types/order.interface'
import { useQuery } from '@tanstack/react-query'
import { CircleCheck, Loader } from 'lucide-react'
import { useState } from 'react'

const OrdersDashboard = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['orders'],
		queryFn: OrdersService.getOrders,
	})

	const [orderStatus, setOrderStatus] = useState<TStatus>('pending')

	if (isLoading) return <p>Loading...</p>

	return (
		<main className='p-6 min-h-screen'>
			<div className='mt-4 mb-14'>
				<SwitchSlider
					startValue={orderStatus}
					setData={setOrderStatus}
					options={[
						{ icon: Loader, label: 'Pending', value: 'pending' },
						{ icon: CircleCheck, label: 'Completed', value: 'completed' },
					]}
				/>
			</div>
			<div className='max-w-5xl mx-auto space-y-6'>
				{data
					?.filter(o => o.orderStatus === orderStatus)
					.map(order => (
						<OrderCard key={order.email} order={order} />
					))}
			</div>
		</main>
	)
}

export default OrdersDashboard
