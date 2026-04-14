import { LoadingScreen } from '@/components/custom-ui/LoadingScreen'
import Footer from '@/components/footer/Footer'
import Navigation from '@/components/navigation/Navigation'
import { Products } from '@/components/products/Products'
import { ProductsService } from '@/services/products.service.ts'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const ProductPage = () => {
	const { hash } = useLocation()

	const { data, isLoading } = useQuery({
		queryKey: ['products'],
		queryFn: () => ProductsService.getProducts(),
	})

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [hash])

	if (isLoading) {
		return <LoadingScreen />
	}

	return (
		<main className='flex flex-col'>
			<Navigation />

			<section className='lg:pt-20 pt-14 pb-7 overflow-x-hidden flex-1 min-h-screen flex justify-center items-center'>
				{data ? <Products data={data} /> : <p>No products found.</p>}
			</section>

			<Footer />
		</main>
	)
}

export default ProductPage
