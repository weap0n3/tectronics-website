import Footer from '@/components/Footer.tsx'
import { ProductCard } from '@/components/ProductCard.tsx'
import Navigation from '../components/Navigation.tsx'
import { PRODUCTS } from './productList.ts'
const Products = () => {
	return (
		<main>
			<Navigation />
			<section className='pt-20 pb-7 overflow-x-hidden'>
				<div className='flex flex-col w-full items-center justify-center '>
					{PRODUCTS.map(item => (
						<ProductCard
							key={item.id}
							item={item}
							startPosition={
								item.id % 2 == 0
									? 'translate-x-[-1500px]'
									: 'translate-x-[1500px]'
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
