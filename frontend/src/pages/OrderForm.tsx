import { IInputData, OrderInput } from '@/components/custom-ui/OrderInput'
import Footer from '@/components/footer/Footer'
import Navigation from '@/components/navigation/Navigation'
import { Button } from '@/components/ui/button'
import { IFormData } from '@/types/order.interface'
import { useForm } from 'react-hook-form'

const CustomerForm = () => {
	const { register, handleSubmit, formState, watch } = useForm<IFormData>({
		mode: 'onChange',
	})

	const inputData: IInputData[] = [
		{
			register,
			regName: 'name',
			placeholder: 'Name',
			rules: {
				required: 'Name ist erforderlich',
				minLength: {
					value: 3,
					message: 'Name muss mindestens 3 Zeichen lang sein',
				},
				maxLength: {
					value: 50,
					message: 'Name darf maximal 50 Zeichen lang sein',
				},
				pattern: {
					value: /^[a-zA-Z\s]+$/,
					message: 'Name darf nur Buchstaben und Leerzeichen enthalten',
				},
			},
		},
		{
			register,
			regName: 'ust',
			placeholder: 'USt-Nummer',
			rules: { required: 'USt-Nummer ist erforderlich' },
		},
		{
			register,
			regName: 'kontaktperson',
			placeholder: 'Kontaktperson',
			rules: {
				required: 'Kontaktperson ist erforderlich',
				minLength: {
					value: 3,
					message: 'Kontaktperson muss mindestens 3 Zeichen lang sein',
				},
				maxLength: {
					value: 50,
					message: 'Kontaktperson darf maximal 50 Zeichen lang sein',
				},
				pattern: {
					value: /^[a-zA-Z\s]+$/,
					message:
						'Kontaktperson darf nur Buchstaben und Leerzeichen enthalten',
				},
			},
		},
		{
			register,
			regName: 'email',
			placeholder: 'E-Mail',
			rules: {
				required: 'E-Mail ist erforderlich',
				pattern: {
					value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
					message: 'E-Mail ist nicht gültig',
				},
			},
		},
		{
			register,
			regName: 'address',
			placeholder: 'Adresse',
			rules: { required: 'Adresse ist erforderlich' },
		},
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
						className='border border-gray-300 rounded-lg p-6 py-7 space-y-5'
					>
						{inputData.map((input, index) => (
							<div key={index}>
								<OrderInput
									register={input.register}
									regName={input.regName}
									rules={input.rules}
									placeholder={input.placeholder}
									watch={watch(input.regName)}
								/>
								{formState.errors[input.regName]?.message && (
									<p className='text-red-500 text-sm mt-1'>
										{formState.errors[input.regName].message}
									</p>
								)}
							</div>
						))}

						<div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
							<OrderInput
								register={register}
								regName='ort'
								placeholder='Ort'
								watch={watch('ort')}
							/>
							<OrderInput
								register={register}
								regName='plz'
								placeholder='PLZ'
								watch={watch('plz')}
							/>
							<OrderInput
								register={register}
								regName='land'
								placeholder='Land'
								watch={watch('land')}
							/>
						</div>
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
