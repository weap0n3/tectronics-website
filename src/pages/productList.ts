export interface Product {
	id: number
	name: string
	price: number
	photo: string
	description: string
	link: string
}

export const products: Product[] = [
	{
		id: 1,
		name: 'Test',
		price: 50.99,
		photo: '/Organigramm.png',
		description: 'BLABALBLALBLBL',
		link: '',
	},
	{
		id: 2,
		name: 'Test3',
		price: 100,
		photo: '/Organigramm.png',
		description: 'BLABALBLALBLBL',
		link: '',
	},
	{
		id: 3,
		name: 'Test3',
		price: 150,
		photo: '/Organigramm.png',
		description: 'BLABALBLALBLBL',
		link: '',
	},
]
