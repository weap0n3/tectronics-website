export interface ICustomer {
	name: string
	ust?: string
	kontaktperson?: string
	email: string
	address: string
	ort: string
	plz: string
	land: string
}

export interface OrderProduct {
	productName: string
	quantity: number
}

export interface IOrder extends ICustomer {
	orderID: number
	orderItems: OrderProduct[]
	orderStatus: string
	totalPrice: number
}

export interface IOrderApi extends ICustomer {
	orderID: number
	productName: string
	quantity: number
	totalPrice: number
	status: string
}
