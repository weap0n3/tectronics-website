export interface IProduct {
	id: number
	name: string
	price: number
	discPrice?: number
	photo: string
	description: string
	link: string
}

export interface IProductApi extends Omit<
	IProduct,
	'id' | 'price' | 'discPrice'
> {
	id: string
	price: string
	discPrice?: string
}
