import { SwitchSlider } from '@/components/custom-ui/SwitchSlider'
import { OrderCard } from '@/components/orders/OrderCard'
import { OrdersService } from '@/services/orders/orders.service'
import { useQuery } from '@tanstack/react-query'
import { CircleCheck, Loader } from 'lucide-react'

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
					<OrderCard order={order} />
				))}
			</div>
		</main>
	)
}

export default OrdersDashboard
