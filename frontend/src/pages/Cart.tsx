import { CartItem } from '@/components/CartItem'
import Navigation from '@/components/Navigation'
import { PRODUCTS } from './productList'

const Cart = () => {
	return (
		<main>
			<Navigation />
			<section className='mt-20 pb-7'>
				<div className='container'>
					<h1 className='text-4xl font-bold mt-24 mb-10 w-full text-center'>
						Your Shopping Cart
					</h1>
					<div className='flex flex-col lg:flex-row gap-6'>
						<div className='flex-1'>
							<div className='w-full border border-gray-300 rounded-lg p-2'>
								{PRODUCTS.map(item => (
									<CartItem key={item.id} item={item} />
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Cart
