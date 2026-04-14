import { IInputData, OrderInput } from '@/components/custom-ui/OrderInput'
import Footer from '@/components/footer/Footer'
import Navigation from '@/components/navigation/Navigation'
import { Button } from '@/components/ui/button'
import { IFormData } from '@/types/order.interface'
import { useForm } from 'react-hook-form'

const CustomerForm = () => {
	const { register, handleSubmit } = useForm<IFormData>()

	const inputData: IInputData[] = [
		{ register, regName: 'name', placeholder: 'Name' },
		{ register, regName: 'ust', placeholder: 'USt-Nummer' },
		{ register, regName: 'kontaktperson', placeholder: 'Kontaktperson' },
		{ register, regName: 'email', placeholder: 'E-Mail' },
		{ register, regName: 'address', placeholder: 'Adresse' },
		{ register, regName: 'ort', placeholder: 'Ort' },
		{ register, regName: 'plz', placeholder: 'PLZ' },
		{ register, regName: 'land', placeholder: 'Land' },
	]

	return (
		<main className='min-h-screen flex flex-col'>
			<Navigation />

			<section className='flex-1 mt-24 pb-7 animate-fade-in'>
				<div className='container max-w-2xl'>
					<h1 className='text-4xl font-bold mb-10 text-center'>
						Bestellformular
					</h1>

					<form
						onSubmit={handleSubmit(data =>
							console.log('Form submitted with:', data),
						)}
						className='border border-gray-300 rounded-lg p-6 space-y-5'
					>
						{inputData.map((input, index) => (
							<OrderInput key={index} {...input} />
						))}
						<Button className='w-full' type='submit'>
							Bestellen
						</Button>
					</form>
				</div>
			</section>

			<Footer />
		</main>
	)
}

export default CustomerForm
