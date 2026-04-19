import { cn } from '@/utils/cn'
import { LucideProps } from 'lucide-react'
import {
	Dispatch,
	ForwardRefExoticComponent,
	RefAttributes,
	SetStateAction,
} from 'react'

interface IOption<T> {
	value: T
	label: string
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>
}

interface SwitchProps<T> {
	options: [IOption<T>, IOption<T>]
	startValue: T
	setData: Dispatch<SetStateAction<T>>
}

export const SwitchSlider = <T extends string>({
	options,
	startValue,
	setData,
}: SwitchProps<T>) => {
	const LeftIcon = options[0].icon
	const RightIcon = options[1].icon

	const isActive = startValue === options[0].value

	return (
		<div className='relative flex mb-6 bg-muted p-1 rounded-xl w-full justify-center items-center max-w-lg mx-auto'>
			<div
				className={cn(
					'absolute top-0 bottom-0 w-1/2 rounded-lg bg-white shadow transition-all duration-300 ease-in-out',
					{
						'left-1': isActive,
						'left-1/2': !isActive,
					},
				)}
			/>
			{options.map((b, index) => (
				<button
					key={b.value}
					type='button'
					onClick={() => setData(b.value)}
					className={cn(
						'relative z-10 w-1/2 px-6 py-2 rounded-lg transition-all duration-200 text-lg will-change-transform',
						{
							'text-black': startValue === b.value,
							'text-muted-foreground hover:text-primary':
								startValue !== b.value,
						},
					)}
				>
					{index === 0 ? (
						<LeftIcon className='mr-2 inline-block' />
					) : (
						<RightIcon className='mr-2 inline-block' />
					)}
					{b.label}
				</button>
			))}
		</div>
	)
}
