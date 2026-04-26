import { ROUTES } from '@/constants/routes'
import { useNotificationStore } from '@/store/notification-store/useNotificationStore'
import { Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const Notification = () => {
	const { message, hide } = useNotificationStore()

	const navigate = useNavigate()

	return (
		!!message && (
			<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm'>
				<div className='bg-muted rounded-2xl shadows p-8 max-w-md w-full mx-4 text-center animate-in fade-in zoom-in-95 duration-200'>
					<div className='bg-muted flex items-center justify-center pb-2'>
						<div className='rounded-full bg-green-600 p-1.5'>
							<Check color='white' size={40} />
						</div>
					</div>

					<h2 className='text-xl font-semibold mb-2'>Bestellung erfolgreich</h2>

					<p className='text-gray-300 text-sm leading-relaxed'>{message}</p>

					<button
						className='mt-6 w-full rounded-lg bg-green-600 hover:bg-green-700 text-white py-2.5 font-medium transition'
						onClick={() => {
							hide()
							navigate(ROUTES.HOME)
						}}
					>
						OK
					</button>
				</div>
			</div>
		)
	)
}
