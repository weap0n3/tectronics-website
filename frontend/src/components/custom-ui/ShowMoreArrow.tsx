import { cn } from '@/utils/cn'
import { ChevronDown } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

type ShowMoreArrowProps = {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const ShowMoreArrow = ({ isOpen, setIsOpen }: ShowMoreArrowProps) => {
	return (
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
	)
}
