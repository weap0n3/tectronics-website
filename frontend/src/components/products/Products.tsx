import { IProduct } from '@/types/product.interface'
import { ProductCard } from './ProductCard'

interface ProductsProps {
	data: IProduct[]
}

export const Products = ({ data }: ProductsProps) => {
	return (
		<div className='flex flex-col w-full items-center justify-center container lg:px-8 px-5'>
			{data.map(item => (
				<ProductCard
					key={item.id}
					item={item}
					startPosition={
						item.id % 2 === 0 ? 'lg:translate-x-full' : 'lg:-translate-x-full'
					}
				/>
			))}
		</div>
	)
}
