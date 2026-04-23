import { OrderInput } from '@/components/custom-ui/OrderInput'
import { Button } from '@/components/ui/button'
import { INPUT_FIRM_DATA, PLACE_INFO_DATA } from '@/config/inputs.config'
import { OrdersService } from '@/services/orders/orders.service'
import { useCartStore } from '@/store/cart-store/useCartStore'
import { IUser } from '@/types/order.interface'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const OrderForm = ({ isFirm }: { isFirm: boolean }) => {
	const { cart } = useCartStore()
	const { register, handleSubmit, formState, watch, reset } = useForm<IUser>({
		mode: 'onChange',
	})
	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset()
		}
	}, [formState.isSubmitSuccessful, reset])

	const onSubmit = async (data: IUser) => {
		await OrdersService.validateOrder(cart, data)
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='border border-gray-300 rounded-lg p-6 py-7 space-y-5'
			>
				{INPUT_FIRM_DATA.slice(0, isFirm ? undefined : 3).map(
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
					{PLACE_INFO_DATA.map(i => (
						<div key={i.regName}>
							<OrderInput
								register={register}
								regName={i.regName}
								placeholder={i.placeholder}
								watch={watch(i.regName)}
								rules={i.rules}
							/>
							{formState.errors[i.regName]?.message && (
								<p className='text-red-500 text-sm mt-1'>
									{formState.errors[i.regName].message}
								</p>
							)}
						</div>
					))}
				</div>
				<Button className='w-full text-xl py-6' type='submit'>
					Bestellen
				</Button>
			</form>
		</>
	)
}
