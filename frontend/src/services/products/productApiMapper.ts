import { IProduct, IProductApi } from '@/types/product.interface'

export const ProductApiMapper = (p: IProductApi): IProduct => {
	return {
		id: Number(p.id),
		name: p.name,
		price: parseFloat(p.price),
		discPrice: p.discPrice ? parseFloat(p.discPrice) : 0,
		photo: p.photo,
		description: p.description,
		link: p.link,
	}
}
