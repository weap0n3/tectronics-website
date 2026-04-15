import { IFormData } from '@/types/order.interface'
import { UseFormRegister } from 'react-hook-form'

export type IInputData = {
	register: UseFormRegister<IFormData>
	placeholder: string
	regName: keyof IFormData
}

export const OrderInput = ({ register, regName, placeholder }: IInputData) => {
	return (
		<div className='flex gap-1 p-1 rounded-xl shadow-md'>
			<div className='w-full relative'>
				<input
					className='w-full p-3 rounded-lg bg-secondary text-white border-2 border-transparent outline-none transition-all duration-200 ease-in-out shadow-input-default focus:border-primary focus:border-2 focus:shadow-input-focus text-lg peer input'
					{...register(regName)}
				/>
				<label
					htmlFor={regName}
					className='absolute top-0 left-0 p-3.5 text-lg text-muted-foreground transition-all duration-200 ease-in-out peer-focus:-translate-y-[2.35rem] peer-focus:text-primary peer-focus:text-base peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-lg peer-placeholder-shown:text-muted-foreground pointer-events-none rounded-lg '
				>
					{placeholder}
				</label>
			</div>
		</div>
	)
}
