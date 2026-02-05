import { PRODUCTS } from '@/pages/productList'
import { Product } from '@/types/product.interface'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import { Button } from './ui/button/Button'

const getCardById = (id: number): Product => {
	return PRODUCTS.find(card => card.id === id)!
}

export const ProductInfo = ({ setIsMoreInfoVisible, product }) => {
	const productToShow = getCardById(product.id)

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = ''
		}
	}, [])

	return (
		<div className='fixed inset-0 bg-black/50 w-full h-full flex items-center justify-center z-50 '>
			<div className='bg-muted pt-7 pb-10 px-11 rounded-lg w-3/4 overflow-y-hidden space-y-5'>
				<div className='w-full'>
					<div className='w-fit after:h-px after:bg-primary after:block after:transition-all after:duration-300 after:ease-in-out after:scale-x-0 hover:after:scale-x-100 after:origin-right '>
						<button
							className='relative flex flex-wrap justify-center gap-1 items-center hover:text-primary transition-colors'
							onClick={() => setIsMoreInfoVisible(false)}
						>
							<ArrowLeft />
							<p className='text-xl'>Zurück zu Produkten</p>
						</button>
					</div>
				</div>
				<span className='block w-full h-px border'></span>
				<div className='flex gap-6'>
					<div className='w-3/5 rounded-lg overflow-hidden'>
						<img
							src={productToShow?.photo}
							alt=''
							className='w-full h-full object-cover'
						/>
					</div>
					<span className='block w-px border'></span>
					<div className='w-2/5 flex flex-col gap-5 justify-center'>
						<h1 className='text-5xl font-bold'>{productToShow?.name}</h1>
						<p className='text-4xl font-bold text-primary'>
							{productToShow?.price} €
						</p>
						<p className='text-lg'>{productToShow?.description}</p>
						<a
							href={productToShow?.link}
							target='_blank'
							className='w-full mt-2'
						>
							<Button
								variant='default'
								size='lg'
								className='text-lg w-full text-white hover:scale-105 transition-all duration-300 ease-in-out'
							>
								Zum Marketplace
							</Button>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
