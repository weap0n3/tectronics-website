import { IProduct } from '@/types/product.interface'
import { cn } from '@/utils/cn'
import { formatPrice } from '@/utils/numberFormatter'

type PriceBoxProps = {
	item: IProduct
	classNamePrice?: string
	classNameDiscPrice?: string
}

export const PriceBox = ({
	item,
	classNamePrice,
	classNameDiscPrice,
}: PriceBoxProps) => {
	const formattedPrice = formatPrice(item.price)
	const formattedDiscPrice = formatPrice(item.discPrice)

	return (
		<div>
			<p
				className={cn(
					'text-xl text-muted-foreground line-through',
					classNameDiscPrice,
				)}
			>
				{item.discPrice ? `€ ${formattedPrice}` : ''}
			</p>
			<p className={cn('text-3xl text-primary font-bold', classNamePrice)}>
				{item.discPrice ? `€ ${formattedDiscPrice}` : `€ ${formattedPrice}`}
			</p>
		</div>
	)
}
