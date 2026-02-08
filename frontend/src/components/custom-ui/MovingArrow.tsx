import { MoveUpRight } from 'lucide-react'

export const MovingArrow = () => {
	return (
		<div>
			<MoveUpRight
				className='absolute translate-x-0 translate-y-0 group-hover:translate-x-[110%] group-hover:translate-y-[-110%] group-hover:opacity-0 group-hover:bg-muted duration-300 ease-in-out'
				size={20}
			/>
			<MoveUpRight
				className='opacity-0 translate-x-[-110%] translate-y-[110%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 ease-in-out '
				size={20}
			/>
		</div>
	)
}
