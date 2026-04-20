import { OrderForm } from '@/components/cart/OrderForm'
import { SwitchSlider } from '@/components/custom-ui/SwitchSlider'
import Footer from '@/components/footer/Footer'
import Navigation from '@/components/navigation/Navigation'
import { Building2, User } from 'lucide-react'
import { useState } from 'react'

type TInputData = 'firm' | 'person'

const OrderPage = () => {
	const [inputData, setInputData] = useState<TInputData>('firm')

	const isFirm = inputData === 'firm'

	return (
		<main className='min-h-screen flex flex-col'>
			<Navigation />

			<section className='flex-1 mt-24 pb-7 animate-fade-in'>
				<div className='container max-w-2xl'>
					<h1 className='text-4xl font-bold mb-10 text-center'>
						Bestellformular
					</h1>

					<SwitchSlider
						startValue={inputData}
						setData={setInputData}
						options={[
							{ value: 'firm', label: 'Firma', icon: Building2 },
							{ value: 'person', label: 'Privatperson', icon: User },
						]}
					/>
					<OrderForm isFirm={isFirm} />
				</div>
			</section>

			<Footer />
		</main>
	)
}

export default OrderPage
