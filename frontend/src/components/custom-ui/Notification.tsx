import { useNotificationStore } from '@/store/notification-store/useNotificationStore'
import { Check } from 'lucide-react'

export const Notification = () => {
	const { message } = useNotificationStore()

	return (
		!!message && (
			<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm'>
				<div className='bg-muted rounded-2xl shadows p-8 max-w-md w-full mx-4 text-center animate-in fade-in zoom-in-95 duration-200'>
					{/* Icon */}
					<div className='bg-muted flex items-center justify-center pb-2'>
						<div className='rounded-3xl bg-white p-1'>
							<Check color='green' size={40} />
						</div>
					</div>

					{/* Title */}
					<h2 className='text-xl font-semibold mb-2'>Bestellung erfolgreich</h2>

					{/* Message */}
					<p className='text-gray-300 text-sm leading-relaxed'>{message}</p>

					{/* Button */}
					<button
						className='mt-6 w-full rounded-lg bg-green-600 hover:bg-green-700 text-white py-2.5 font-medium transition'
						onClick={() => window.location.reload()}
					>
						OK
					</button>
				</div>
			</div>
		)
	)
}
