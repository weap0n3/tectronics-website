export interface IProduct {
	id: number
	name: string
	price: number
	photo: string
	description: string
	link: string
}

export interface IProductApi extends Omit<IProduct, 'id' | 'price'> {
	id: string
	price: string
}
