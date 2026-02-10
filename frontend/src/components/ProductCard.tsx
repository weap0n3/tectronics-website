import { Button } from '@/components/ui/button.tsx'
import { useProductCard } from '@/hooks/useProductCard'
import { IProduct } from '@/types/product.interface'
import clsx from 'clsx'
import { ArrowUpRightFromSquare } from 'lucide-react'
import { MovingArrow } from './custom-ui/MovingArrow'
import { ProductInfo } from './ProductInfo'

interface ProductCardProps {
	item: Product
	startPosition: string
}

export const ProductCard = ({ item, startPosition }: ProductCardProps) => {
	const { isVisible, isMoreInfoVisible, targetRef, setIsMoreInfoVisible } =
		useProductCard()
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
					<Button
						variant='secondary'
						className='group bg-muted/30 hover:bg-muted hover:scale-105 duration-300 ease-in-out shadow-md shadow-black/20 text-base h-11 '
						onClick={() => setIsMoreInfoVisible(!isMoreInfoVisible)}
					>
						<MovingArrow />
						Mehr Details
					</Button>
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
