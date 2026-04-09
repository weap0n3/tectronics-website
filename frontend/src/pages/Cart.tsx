import { CartItem } from '@/components/CartItem'
import { CartSummary } from '@/components/CartSummary'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { useCartStore } from '@/store/useCartStore'

const Cart = () => {
	const cart = useCartStore(state => state.cart)

	console.log(cart.length)
	return (
		<main>
			<Navigation />
			<section className='mt-20 pb-7'>
				<div className='container'>
					{cart.length == 0 ? (
						<div className=' items-center'>
							<h1 className='text-4xl font-bold mt-24 mb-10 w-full text-center'>
								The Cart is Empty
							</h1>
						</div>
					) : (
						<>
							<h1 className='text-4xl font-bold mt-24 mb-10 w-full text-center'>
								Your Shopping Cart
							</h1>
							<div className='flex flex-col lg:flex-row gap-6'>
								<div className='flex-1'>
									<div className='w-full border border-gray-300 rounded-lg p-2'>
										{cart.map(item => (
											<CartItem key={item.id} item={item} />
										))}
									</div>
								</div>

								<CartSummary />
							</div>
						</>
					)}
				</div>
			</section>
			<Footer />
		</main>
	)
}

export default Cart
