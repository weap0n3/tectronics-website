import { PRODUCTS } from '@/pages/productList'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

export const CartSummary = () => {
	// TODO: Calculate total price (Product price * quantity)

	const total = PRODUCTS.reduce((sum, item) => {
		return sum + item.price * 1
	}, 0)

	return (
		<div className='w-full lg:w-1/3 border border-gray-300  rounded-lg p-4 h-fit sticky top-20'>
			<h2 className='text-2xl font-semibold mb-4'>Summary</h2>

			<div className='flex justify-between mb-2'>
				<span>Subtotal</span>
				<span>${total.toFixed(2)}</span>
			</div>

			<div className='flex justify-between mb-2'>
				<span>Shipping</span>
				<span>$5.00</span>
			</div>

			<hr className='my-3' />

			<div className='flex justify-between font-bold text-lg'>
				<span>Total</span>
				<span>${(total + 5).toFixed(2)}</span>
			</div>

			<div className='mt-4 text-sm text-gray-600'>
				<p>🚚 Free delivery over $50</p>
				<p>📦 Delivery: 2–4 days</p>
			</div>

			<Button className='w-full mt-6'>Proceed to Checkout</Button>
			<Link to='/products'>
				<Button variant='link' className='w-full mt-3'>
					Continue Shopping
				</Button>
			</Link>
		</div>
	)
}
