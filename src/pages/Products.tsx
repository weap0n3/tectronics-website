import Footer from '@/components/Footer.tsx'
import { ProductCard } from '@/components/ProductCard.tsx'
import Navigation from '../components/Navigation.tsx'
import { products } from './productList.ts'
const Products = () => {
	return (
		<main>
			<Navigation />
			<section className='pt-20 pb-7'>
				<div className='flex flex-col w-full items-center justify-center '>
					{products.map(item => (
						<ProductCard key={item.id} item={item} />
					))}
				</div>
			</section>
			<Footer />
		</main>
	)
}

export default Products
