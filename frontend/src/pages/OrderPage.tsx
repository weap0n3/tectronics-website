import { OrderForm } from '@/components/cart/OrderForm'
import { Notification } from '@/components/custom-ui/Notification'
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
			<Notification />

			<Navigation />

			<section className='flex-1 lg:mt-24 mt-20 pb-7 animate-fade-in'>
				<div className='container lg:px-8 px-5 max-w-2xl'>
					<h1 className='lg:text-4xl text-2xl font-bold text-center lg:mb-7 mb-4'>
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
