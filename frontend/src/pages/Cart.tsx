import { CartItem } from '@/components/CartItem'
import Navigation from '@/components/Navigation'
import { PRODUCTS } from './productList'

const Cart = () => {
	return (
		<main>
			<Navigation />
			<section className='mt-20 pb-7'>
				<div className='flex flex-col w-full items-center justify-center container lg:px-8 px-5'>
					<h1 className='text-3xl font-bold'>Your Shopping Cart</h1>
					<div className='w-full space-y-4 mt-4 border border-gray-300 rounded-lg p-4 mb-4'>
						{PRODUCTS.map(item => (
							<CartItem key={item.id} item={item} />
						))}
					</div>
				</div>
			</section>
		</main>
	)
}

export default Cart
