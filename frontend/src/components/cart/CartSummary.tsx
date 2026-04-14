import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/useCartStore'
import { MessageSquareWarningIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export const CartSummary = () => {
	// TODO: Calculate total price (Product price * quantity)

	const getTotalPrice = useCartStore(state => state.getTotalPrice)

	return (
		<div className='w-full lg:w-1/3 border border-gray-300  rounded-lg p-4 h-fit sticky top-20'>
			<h2 className='text-2xl font-semibold mb-4'>Zusammenfassung</h2>

			<hr className='mb-4' />

			<div className='flex justify-between font-bold text-lg'>
				<span>Gesamt</span>
				<span>€ {getTotalPrice().toFixed(2)}</span>
			</div>

			<div className='mt-4 text-sm text-yellow-900 bg-orange-300 border border-orange-950 rounded-lg p-3 text-center'>
				<div className='flex gap-2 items-center justify-center'>
					<MessageSquareWarningIcon />
					<p className='text-lg'>Wichtiger Hinweis</p>
				</div>
				<p className='mt-1'>Versandkosten variieren je nach Bestellung</p>
				<p>
					Die Versandkosten werden nach Abschluss der Bestellung gesondert in
					Rechnung gestellt
				</p>
			</div>

			<hr className='mt-6' />

			<Button className='w-full mt-6'>Zur Kasse</Button>
			<Link to='/products'>
				<Button variant='link' className='w-full mt-3'>
					Weiter einkaufen
				</Button>
			</Link>
		</div>
	)
}
