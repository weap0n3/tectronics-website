import { useNotificationStore } from '@/store/notification-store/useNotificationStore'

export const Notification = () => {
	const { message, type } = useNotificationStore()

	return (
		!!message && (
			<div className='fixed inset-0 bg-black/50 w-full h-full flex flex-col lg:flex-row items-center justify-center z-50 '>
				<div className='p-5 bg-muted rounded-lg shadow-[0_0_80px_#3b82f6] border border-primary'>
					<p className='text-2xl text-secondary-foreground'>{message}</p>
				</div>
			</div>
		)
	)
}
