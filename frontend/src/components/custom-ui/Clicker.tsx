import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export const Clicker = React.memo(() => {
	const [quantity, setQuantity] = useState(1)

	const handlePlusClick = () => {
		setQuantity(quantity + 1)
	}

	const handleMinusClick = () => {
		setQuantity(quantity > 1 ? quantity - 1 : quantity)
	}

	return (
		<div className='flex items-center space-x-2 w-full justify-center'>
			<Button variant='outline' onClick={handleMinusClick}>
				-
			</Button>
			<input
				type='number'
				value={quantity}
				onChange={e => setQuantity(parseInt(e.target.value) || 1)}
				min='1'
				className='bg-transparent w-12 text-center rounded-sm p-[6px] focus:border focus:border-accent  focus:outline-none'
			/>
			<Button variant='outline' onClick={handlePlusClick}>
				+
			</Button>
		</div>
	)
})
