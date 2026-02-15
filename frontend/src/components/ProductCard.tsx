import { Button } from '@/components/ui/button.tsx'
import { useProductCard } from '@/hooks/useProductCard'
import { IProduct } from '@/types/product.interface'
import clsx from 'clsx'
import { ArrowUpRightFromSquare } from 'lucide-react'
import { MovingArrow } from './custom-ui/MovingArrow'
import { ProductInfo } from './ProductInfo'

interface IProductCardProps {
	item: IProduct
	startPosition: string
}

export const ProductCard = ({ item, startPosition }: IProductCardProps) => {
	const { isVisible, isMoreInfoVisible, targetRef, setIsMoreInfoVisible } =
		useProductCard()
	return (
		<>
			<div
				ref={targetRef}
				id={`product-card-${item.id}`}
				className={clsx(
					'flex rounded-lg m-4 p-0 overflow-hidden border duration-1000 ease-in-out lg:flex-row flex-col w-full',
					!isVisible && startPosition,
					isVisible && 'opacity-100 lg:translate-x-0',
					!isVisible && 'opacity-0',
				)}
			>
				<div className='lg:w-[60%]'>
					<img
						src={item.photo}
						className='h-full w-full object-cover'
						alt='Product Image'
					/>
				</div>
				<div className='lg:w-[40%] bg-muted/30 lg:px-10 px-3 py-2 pb-5 lg:pb-0 flex flex-col justify-evenly lg:gap-0 gap-4 lg:text-start text-center'>
					<h1 className='lg:text-4xl text-3xl text-center'>{item.name}</h1>
					<div className=''>
						<p className='lg:line-clamp-6 line-clamp-3 lg:text-base ' lang='10'>
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
					<div className='flex justify-between items-center flex-col lg:flex-row gap-4'>
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
