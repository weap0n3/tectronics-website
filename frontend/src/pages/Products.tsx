import Footer from '@/components/Footer.tsx'
import Navigation from '@/components/Navigation.tsx'
import { ProductCard } from '@/components/ProductCard.tsx'
import { ProductsService } from '@/services/products.service.ts'
import { IProduct } from '@/types/product.interface.ts'
import { useQuery } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
const Products = () => {
	const { hash } = useLocation()

	const { data, isLoading } = useQuery({
		queryKey: ['products'],
		queryFn: async () => await ProductsService.getProducts(),
	})

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [hash])
	return (
		<main className='flex flex-col'>
			<Navigation />

			<section className='lg:pt-20 pt-14 pb-7 overflow-x-hidden flex-1 min-h-screen flex justify-center items-center'>
				{isLoading ? (
					<Loader className='animate-spin' size={48} />
				) : data ? (
					<div className='flex flex-col w-full items-center justify-center container lg:px-8 px-5full'>
						{data.map(item => (
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
				) : (
					<p>No products found.</p>
				)}
			</section>
			<Footer />
		</main>
	)
}

export default Products
