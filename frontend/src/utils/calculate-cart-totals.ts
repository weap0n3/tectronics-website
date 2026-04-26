import { SHIPPING_DATA } from '@/constants/shipping-data'
import { formatPrice } from '@/utils/numberFormatter'

export const calculateCartTotals = (subtotal: number) => {
	const shippingCost =
		subtotal < SHIPPING_DATA.THRESHOLD ? SHIPPING_DATA.FEE : 0

	return {
		subtotal: formatPrice(subtotal),
		shippingCost: formatPrice(shippingCost),
		total: formatPrice(subtotal + shippingCost),
		isShippingFree: shippingCost === 0,
	}
}
