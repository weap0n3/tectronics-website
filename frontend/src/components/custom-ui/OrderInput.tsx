import { ICustomer } from '@/types/order.interface'
import { cn } from '@/utils/cn'
import { memo } from 'react'
import { UseFormRegister } from 'react-hook-form'

export interface IInputData {
	register: UseFormRegister<ICustomer>
	placeholder: string
	regName: keyof ICustomer
	rules?: object
	watch?: string
}

export const OrderInput = memo(
	({ register, regName, placeholder, rules, watch }: IInputData) => {
		return (
			<div className='flex gap-1 p-1 rounded-xl shadow-md'>
				<div className='w-full relative'>
					<input
						placeholder=' '
						className='w-full p-3 rounded-lg bg-secondary text-white border-2 border-transparent outline-none transition-all duration-200 ease-in-out shadow-input-default focus:border-primary focus:border-2 focus:shadow-input-focus text-lg peer input'
						{...register(regName, rules)}
					/>
					<label
						htmlFor={regName}
						className={cn(
							'absolute top-0 left-0 lg:p-3.5 p-4 text-muted-foreground transition-all duration-200 ease-in-out',
							'lg:peer-focus:-translate-y-[2.35rem] peer-focus:-translate-y-[2.1rem] peer-focus:text-primary lg:peer-focus:text-base peer-focus:text-sm',
							'peer-not-placeholder-shown:-translate-y-[2.35rem] peer-not-placeholder-shown:text-primary lg:peer-not-placeholder-shown:text-base peer-not-placeholder-shown:text-sm',
							'pointer-events-none rounded-lg',
							watch !== ''
								? 'text-muted-foreground lg:-translate-y-[2.35rem] -translate-y-[2.1rem] lg:text-base text-sm'
								: 'lg:text-lg',
						)}
					>
						{placeholder}
					</label>
				</div>
			</div>
		)
	},
)
