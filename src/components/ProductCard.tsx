import clsx from 'clsx'
import { ArrowUpRightFromSquare } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface ProductCardProps {
	item: {
		id: number
		name: string
		price: number
		photo: string
		description: string
		link: string
	}
	startPosition: string
}

export const ProductCard = ({ item, startPosition }: ProductCardProps) => {
	const [isVisible, setIsVisible] = useState(false)

	const targetRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					setIsVisible(entry.isIntersecting)
				})
			},
			{ root: null, threshold: 0, rootMargin: '0px 0px -25% 0px' }
		)

		if (targetRef.current) {
			observer.observe(targetRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<div
			ref={targetRef}
			id={`product-card-${item.id}`}
			className={clsx(
				'flex rounded-lg m-4 p-0 overflow-hidden h-[500px] border w-[1100px] duration-1000 ease-in-out',
				!isVisible && startPosition,
				isVisible && 'opacity-100 translate-x-0',
				!isVisible && 'opacity-0'
			)}
		>
			<div className='w-[60%]'>
				<img
					src={item.photo}
					className='h-full w-full object-cover'
					alt='Product Image'
				/>
			</div>
			<div className='bg-muted/30 px-14 flex flex-col justify-around w-[40%]'>
				<h1 className='text-4xl'>{item.name}</h1>
				<p className='' lang='10'>
					{item.description}
				</p>
				<button>Mehr Details</button>
				<div className='flex justify-between items-center'>
					<p className='text-4xl text-sky-500 font-bold'>
						{item.price.toFixed(2)} €
					</p>
					<div className='relative w-1/2 rounded-lg overflow-hidden shadow-sky-600 shadow-glow cursor-pointer hover:scale-110 duration-700 ease-out before:absolute before:inset-0 before:bg-gradient-primary before:opacity-0 hover:before:opacity-20 before:transition-opacity before:duration-500 before:ease-in-out'>
						<div className='relative z-10 flex justify-between items-center p-3'>
							<a className='text-xl' href={item.link} target='_blank'>
								Marketplace
							</a>
							<span>
								<ArrowUpRightFromSquare />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
