import { IFormData } from '@/types/order.interface'
import { UseFormRegister } from 'react-hook-form'

export interface IInputData {
	register: UseFormRegister<IFormData>
	placeholder: string
	regName: keyof IFormData
}

export const OrderInput = ({ register, regName, placeholder }: IInputData) => {
	return (
		<input
			className='bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]'
			{...register(regName, { required: true })}
			placeholder={placeholder}
		/>
	)
}
