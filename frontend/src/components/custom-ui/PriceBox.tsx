import { IProduct } from '@/types/product.interface'
import { cn } from '@/utils/cn'
import { formatPrice } from '@/utils/numberFormatter'

type PriceBoxProps = {
	item: IProduct
	className?: string
}

export const PriceBox = ({ item, className }: PriceBoxProps) => {
	const formattedPrice = formatPrice(item.price)
	const formattedDiscPrice = formatPrice(item.discPrice)

	return (
		<div>
			<p className='text-xl text-muted-foreground line-through'>
				{item.discPrice ? `€ ${formatPrice}` : ''}
			</p>
			<p
				className={cn('text-3xl text-primary font-bold text-center', className)}
			>
				{item.discPrice ? `€ ${formattedDiscPrice}` : `€ ${formattedPrice}`}
			</p>
		</div>
	)
}
