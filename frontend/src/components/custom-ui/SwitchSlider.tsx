import { cn } from '@/utils/cn'
import { Building2, User } from 'lucide-react'

export const SwitchSlider = () => {
	return (
		<div className='relative flex mb-6 bg-muted p-1 rounded-xl w-full justify-center items-center max-w-lg mx-auto'>
			{/* Sliding background */}
			<div
				className={cn(
					'absolute top-0 bottom-0 w-1/2 rounded-lg bg-white shadow transition-all duration-300 ease-in-out',
					{
						'left-1': isFirm,
						'left-1/2': !isFirm,
					},
				)}
			/>

			{/* Buttons */}
			<button
				type='button'
				onClick={() => setInputData('firm')}
				className={cn(
					'relative z-10 w-1/2 px-6 py-2 rounded-lg transition-colors duration-200',
					{
						'text-black': isFirm,
						'text-muted-foreground': !isFirm,
					},
				)}
			>
				<Building2 className='inline-block mr-2' size={18} />
				Firma
			</button>

			<button
				type='button'
				onClick={() => setInputData('person')}
				className={cn(
					'relative z-10 w-1/2 px-6 py-2 rounded-lg transition-colors duration-200',
					{
						'text-black': !isFirm,
						'text-muted-foreground': isFirm,
					},
				)}
			>
				<User className='inline-block mr-2' size={18} />
				Privatperson
			</button>
		</div>
	)
}
