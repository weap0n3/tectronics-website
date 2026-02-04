import { Product } from '@/types/product.interface'
import clsx from 'clsx'
import { ArrowUpRightFromSquare, MoveUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { ProductInfo } from './ProductInfo'
import { Button } from './ui/button'

interface ProductCardProps {
	item: Product
	startPosition: string
}

export const ProductCard = ({ item, startPosition }: ProductCardProps) => {
	const [isVisible, setIsVisible] = useState(false)

	const [isMoreInfoVisible, setIsMoreInfoVisible] = useState(false)

	const targetRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					setIsVisible(entry.isIntersecting)
				})
			},
			{ root: null, threshold: 0, rootMargin: '0px 0px -25% 0px' },
		)

		if (targetRef.current) {
			observer.observe(targetRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<>
			<div
				ref={targetRef}
				id={`product-card-${item.id}`}
				className={clsx(
					'flex rounded-lg m-4 p-0 overflow-hidden border duration-1000 ease-in-out',
					!isVisible && startPosition,
					isVisible && 'opacity-100 translate-x-0',
					!isVisible && 'opacity-0',
				)}
			>
				<div className='w-[60%]'>
					<img
						src={item.photo}
						className='h-full w-full object-cover'
						alt='Product Image'
					/>
				</div>
				<div className='bg-muted/30 px-11 py-3 flex flex-col justify-evenly w-[40%]'>
					<h1 className='text-4xl'>{item.name}</h1>
					<div className=''>
						<p className='line-clamp-6' lang='10'>
							{item.description}
						</p>
					</div>
					<div
						className='group w-full justify-center flex items-center p-3 gap-2 bg-muted/30 hover:bg-muted rounded-lg cursor-pointer hover:scale-105 duration-300 ease-in-out shadow-md shadow-black/20'
						onClick={() => setIsMoreInfoVisible(!isMoreInfoVisible)}
					>
						<div>
							<MoveUpRight
								className='absolute translate-x-0 translate-y-0 group-hover:translate-x-[110%] group-hover:translate-y-[-110%] group-hover:opacity-0 group-hover:bg-muted duration-300 ease-in-out'
								size={18}
							/>
							<MoveUpRight
								className='opacity-0 translate-x-[-110%] translate-y-[110%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 ease-in-out '
								size={18}
							/>
						</div>
						<button>Mehr Details</button>
					</div>
					<div className='flex justify-between items-center'>
						<p className='text-4xl text-sky-500 font-bold'>
							{item.price.toFixed(2)} €
						</p>
						<a href={item.link} target='_blank'>
							<Button
								variant='default'
								size='lg'
								className='text-lg hover:bg-primary/80 hover:scale-105 transition-all duration-300 ease-in-out'
							>
								Marketplace
								<ArrowUpRightFromSquare size={18} className='ml-2' />
							</Button>
						</a>
					</div>
				</div>
			</div>
			{isMoreInfoVisible && (
				<ProductInfo
					setIsMoreInfoVisible={setIsMoreInfoVisible}
					product={item}
				/>
			)}
		</>
	)
}
