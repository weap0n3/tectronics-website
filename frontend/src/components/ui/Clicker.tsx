import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export const Clicker = React.memo(({ id }: { id: number }) => {
	const [quantity, setQuantity] = useState(1)

	const handlePlusClick = () => {
		setQuantity(quantity + 1)
	}

	const handleMinusClick = () => {
		setQuantity(quantity > 1 ? quantity - 1 : quantity)
	}

	return (
		<>
			<Button variant='outline' onClick={handleMinusClick}>
				-
			</Button>
			<span>{quantity}</span>
			<Button variant='outline' onClick={handlePlusClick}>
				+
			</Button>
		</>
	)
})
