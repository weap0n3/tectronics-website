import { PRODUCTS } from '@/pages/productList'
import { Product } from '@/types/product.interface'
import { ArrowLeft } from 'lucide-react'

const getCardById = (id: number): Product => {
	return PRODUCTS.find(card => card.id === id)!
}

export const ProductInfo = ({ set, product }) => {
	const productToShow = getCardById(product.id)

	return (
		<div className='fixed inset-0 bg-black/50 w-full h-full flex items-center justify-center z-50'>
			<div className='bg-muted p-8 rounded-lg max-w-[1200px] h-[50vh]'>
				<div className=''>
					<button
						className='flex items-center justify-center gap-2'
						onClick={() => set(false)}
					>
						<ArrowLeft />
						<p>Zurück zu Produkten</p>
					</button>
				</div>
				<div className='flex gap-6'>
					<div>
						<img src={productToShow?.photo} alt='' />
					</div>
					<div>
						<h1>{productToShow?.name}</h1>
						<p>{productToShow?.price}</p>
						<p>{productToShow?.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
