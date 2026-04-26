import { CartItem } from '@/components/cart/CartItem'
import { CartSummary } from '@/components/cart/CartSummary'
import Footer from '@/components/footer/Footer'
import Navigation from '@/components/navigation/Navigation'
import { useCartStore } from '@/store/cart-store/useCartStore'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Cart = () => {
	const cart = useCartStore(state => state.cart)

	const { hash } = useLocation()

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [hash])

	return (
		<main className='min-h-screen flex flex-col'>
			<Navigation />
			{cart.length == 0 ? (
				<div className='flex-1 flex items-center justify-center h-fit'>
					<h1 className='lg:text-4xl text-2xl font-bold text-center'>
						The Cart is Empty
					</h1>
				</div>
			) : (
				<section className='flex-1 lg:mt-24 mt-20 pb-7 animate-fade-in'>
					<div className='container lg:px-8 px-5'>
						<h1 className='lg:text-4xl text-2xl font-bold lg:mb-10 mb-4 w-full text-center'>
							Your Shopping Cart
						</h1>
						<div className='flex flex-col lg:flex-row gap-6'>
							<div className='flex-1'>
								<div className='w-full border border-gray-300 rounded-lg lg:p-2 p-1 space-y-1 lg:space-y-0'>
									{cart.map(item => (
										<CartItem key={item.id} item={item} />
									))}
								</div>
							</div>

							<CartSummary />
						</div>
					</div>
				</section>
			)}
			<Footer />
		</main>
	)
}

export default Cart
