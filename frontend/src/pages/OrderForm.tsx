import { IInputData, OrderInput } from '@/components/custom-ui/OrderInput'
import Footer from '@/components/footer/Footer'
import Navigation from '@/components/navigation/Navigation'
import { Button } from '@/components/ui/button'
import { INPUT_FIRM_DATA, INPUT_PERSON_DATA } from '@/config/inputs.config'
import { IFormData } from '@/types/order.interface'
import { cn } from '@/utils/cn'
import { Building2, User } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const CustomerForm = () => {
	const { register, handleSubmit, formState, watch } = useForm<IFormData>({
		mode: 'onChange',
	})

	type TInputData = 'firm' | 'person'

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
					<div className='relative flex mb-6 bg-muted p-1 rounded-xl w-full justify-center items-center max-w-lg mx-auto'>
						{/* Sliding background */}
						<div
							className={cn(
								'absolute top-0 bottom-0 w-1/2 rounded-lg bg-white shadow transition-all duration-300 ease-in-out',
								{
									'left-1': isFirm,
									'left-1/2': !isFirm,
								},
							)}
						/>

						{/* Buttons */}
						<button
							type='button'
							onClick={() => setInputData('firm')}
							className={cn(
								'relative z-10 w-1/2 px-6 py-2 rounded-lg transition-colors duration-200',
								{
									'text-black': isFirm,
									'text-muted-foreground': !isFirm,
								},
							)}
						>
							<Building2 className='inline-block mr-2' size={18} />
							Firma
						</button>

						<button
							type='button'
							onClick={() => setInputData('person')}
							className={cn(
								'relative z-10 w-1/2 px-6 py-2 rounded-lg transition-colors duration-200',
								{
									'text-black': !isFirm,
									'text-muted-foreground': isFirm,
								},
							)}
						>
							<User className='inline-block mr-2' size={18} />
							Privatperson
						</button>
					</div>

					<form
						onSubmit={handleSubmit(data =>
							console.log('Form submitted with:', data),
						)}
						className='border border-gray-300 rounded-lg p-6 py-7 space-y-5'
					>
						{(isFirm ? INPUT_FIRM_DATA : INPUT_PERSON_DATA).map(
							(input, index) => (
								<div key={index}>
									<OrderInput
										register={register}
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
							),
						)}

						<div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
							<OrderInput
								register={register}
								regName='ort'
								placeholder='Ort'
								watch={watch('ort')}
								rules={{
									required: 'Ort ist erforderlich',
									minLength: { value: 2, message: 'Ort zu kurz' },
									pattern: {
										value: /^[\p{L}\s]+$/u,
										message:
											'Ort darf nur Buchstaben und Leerzeichen enthalten',
									},
								}}
							/>
							<OrderInput
								register={register}
								regName='plz'
								placeholder='PLZ'
								watch={watch('plz')}
								rules={{
									required: 'PLZ ist erforderlich',
									pattern: {
										value: /^\d{5}$/,
										message: 'PLZ muss 5-stellig sein',
									},
								}}
							/>
							<OrderInput
								register={register}
								regName='land'
								placeholder='Land'
								watch={watch('land')}
								rules={{
									required: 'Land ist erforderlich',
									minLength: { value: 2, message: 'Land zu kurz' },
									pattern: {
										value: /^[\p{L}\s]+$/u,
										message:
											'Land darf nur Buchstaben und Leerzeichen enthalten',
									},
								}}
							/>
						</div>
						<Button className='w-full text-xl py-6' type='submit'>
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
