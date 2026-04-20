import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/useCartStore'
import { MessageSquareWarningIcon } from 'lucide-react'
import { memo } from 'react'
import { Link } from 'react-router-dom'

export const CartSummary = memo(() => {
	const getTotalPrice = useCartStore(state => state.getTotalPrice())

	return (
		<div className='w-full lg:w-1/3 border border-gray-300  rounded-lg p-4 h-fit sticky top-20'>
			<h2 className='text-2xl font-semibold mb-4'>Zusammenfassung</h2>

			<div className='flex justify-between text-lg'>
				<span>Zwischensumme</span>
				<span>€ {getTotalPrice.toFixed(2)}</span>
			</div>

			{getTotalPrice < 70 && (
				<div className='flex justify-between text-lg'>
					<span>Liefergebühr</span>
					<span>€ 10.00</span>
				</div>
			)}

			<hr className='mb-4' />

			<div className='flex justify-between font-bold text-lg'>
				<span>Gesamt</span>
				<span>
					€ {(getTotalPrice + (getTotalPrice < 70 ? 10 : 0)).toFixed(2)}
				</span>
			</div>

			{getTotalPrice < 70 && (
				<div className='mt-4 text-sm text-yellow-900 bg-orange-300 border border-orange-950 rounded-lg p-3 text-center'>
					<div className='flex gap-2 items-center justify-center'>
						<MessageSquareWarningIcon />
						<p className='text-lg'>Wichtiger Hinweis</p>
					</div>
					<p className='mt-1'>
						Für Bestellungen unter 70 € wird eine Versandpauschale von 10 €
						berechnet, darüber ist der Versand kostenlos.
					</p>
				</div>
			)}

			<Link to='/order'>
				<Button className='w-full mt-6'>Zur Kasse</Button>
			</Link>
			<Link to='/products'>
				<Button variant='link' className='w-full mt-3'>
					Weiter einkaufen
				</Button>
			</Link>
		</div>
	)
})
