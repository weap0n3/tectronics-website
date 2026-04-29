import { IOrder, IOrderApi, OrderProduct } from '@/types/order.interface'

export const OrderApiMapper = (orders: IOrderApi[]): IOrder[] => {
	const result: IOrder[] = []

	let currentOrderID = orders[0].orderID
	let orderItems: OrderProduct[] = []
	let currentOrder = orders[0]

	for (let index = 0; index < orders.length; index++) {
		if (currentOrderID !== orders[index].orderID) {
			result.push({
				...currentOrder,
				orderID: currentOrder.orderID,
				orderStatus: currentOrder.status,
				orderItems: orderItems,
			})
			orderItems = []
			currentOrderID = orders[index].orderID
			currentOrder = orders[index]
		}
		const orderItem: OrderProduct = {
			productName: orders[index].productName,
			quantity: orders[index].quantity,
		}
		orderItems.push(orderItem)
	}
	result.push({
		...currentOrder,
		orderID: currentOrder.orderID,
		orderStatus: currentOrder.status,
		orderItems: orderItems,
	})

	return result
}
