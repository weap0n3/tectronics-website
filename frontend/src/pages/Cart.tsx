import { CartItem } from '@/components/cart/CartItem'
import { CartSummary } from '@/components/cart/CartSummary'
import Footer from '@/components/footer/Footer'
import Navigation from '@/components/navigation/Navigation'
import { useCartStore } from '@/store/useCartStore'
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

	console.log('Cart rendered')

	return (
		<main className='min-h-screen flex flex-col'>
			<Navigation />
			{cart.length == 0 ? (
				<div className='flex-1 flex items-center justify-center h-fit'>
					<h1 className='text-4xl font-bold text-center'>The Cart is Empty</h1>
				</div>
			) : (
				<section className='flex-1 mt-24 pb-7 animate-fade-in'>
					<div className='container '>
						<h1 className='text-4xl font-bold mb-10 w-full text-center'>
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
					</div>
				</section>
			)}
			<Footer />
		</main>
	)
}

export default Cart
