import Footer from '@/components/Footer.tsx'
import Navigation from '@/components/Navigation.tsx'
import { ProductCard } from '@/components/ProductCard.tsx'
import { ProductsService } from '@/services/products.service.ts'
import { IProduct } from '@/types/product.interface.ts'
import { useEffect, useState } from 'react'
import { PRODUCTS } from './productList.ts'
const Products = () => {
	const [products, setProducts] = useState<IProduct[]>(PRODUCTS)

	useEffect(() => {
		const fetchProducts = async () => {
			const products = await ProductsService.getProducts()

			setProducts(products ? products : PRODUCTS)
		}

		fetchProducts()
	}, [])
	return (
		<main>
			<Navigation />
			<section className='lg:pt-20 pt-14 pb-7 overflow-x-hidden'>
				<div className='flex flex-col w-full items-center justify-center container lg:px-8 px-5'>
					{products.map(item => (
						<ProductCard
							key={item.id}
							item={item}
							startPosition={
								item.id % 2 == 0
									? 'lg:translate-x-full'
									: 'lg:-translate-x-full'
							}
						/>
					))}
				</div>
			</section>
			<Footer />
		</main>
	)
}

export default Products
