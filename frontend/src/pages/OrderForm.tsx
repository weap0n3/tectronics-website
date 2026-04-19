import { OrderInput } from '@/components/custom-ui/OrderInput'
import { SwitchSlider } from '@/components/custom-ui/SwitchSlider'
import Footer from '@/components/footer/Footer'
import Navigation from '@/components/navigation/Navigation'
import { Button } from '@/components/ui/button'
import { INPUT_FIRM_DATA, INPUT_PERSON_DATA } from '@/config/inputs.config'
import { UsersService } from '@/services/users/users.service'
import { IUser } from '@/types/order.interface'
import { Building2, User } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type TInputData = 'firm' | 'person'

const CustomerForm = () => {
	const { register, handleSubmit, formState, watch } = useForm<IUser>({
		mode: 'onChange',
	})

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
					<form
						onSubmit={handleSubmit(async data => {
							console.log('Form submitted with:', data)
							console.log(await UsersService.getUsers())
						})}
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
							<div>
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
								{formState.errors['land']?.message && (
									<p className='text-red-500 text-sm mt-1'>
										{formState.errors['land'].message}
									</p>
								)}
							</div>
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
