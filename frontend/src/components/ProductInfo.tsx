import { Button } from '@/components/ui/button.tsx'
import { IProduct } from '@/types/product.interface'
import { ArrowLeft } from 'lucide-react'
import React, { useEffect } from 'react'

interface IProductInfoProps {
	setIsMoreInfoVisible: React.Dispatch<React.SetStateAction<boolean>>
	product: IProduct
}

export const ProductInfo = ({
	setIsMoreInfoVisible,
	product,
}: IProductInfoProps) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = ''
		}
	}, [])

	return (
		<div className='fixed inset-0 bg-black/50 w-full h-full flex flex-col lg:flex-row items-center justify-center z-50 '>
			<div className='bg-muted lg:pt-7 lg:pb-10 lg:px-11 m-8 p-4 rounded-lg lg:w-3/4 lg:overflow-y-hidden overflow-scroll lg:space-y-5 space-y-2'>
				<div className='w-full'>
					<div className='lg:w-fit flex lg:block justify-center lg:justify-normal after:h-px after:bg-primary after:block after:transition-all after:duration-300 after:ease-in-out after:scale-x-0 hover:after:scale-x-100 after:origin-right '>
						<button
							className='relative flex flex-wrap justify-center  gap-2 items-center hover:text-primary transition-colors'
							onClick={() => setIsMoreInfoVisible(false)}
						>
							<ArrowLeft />
							<p className='text-xl'>Zurück zu Produkten</p>
						</button>
					</div>
				</div>
				<span className='block w-full h-px lg:border'></span>
				<div className='flex flex-col lg:flex-row lg:gap-6 gap-3'>
					<div className='lg:w-3/5 rounded-lg overflow-hidden'>
						<img
							src={product.photo}
							alt=''
							className='w-full h-full object-cover'
						/>
					</div>
					<span className='block w-px lg:border'></span>
					<div className='lg:w-2/5 flex flex-col lg:gap-5 gap-3 justify-evenly'>
						<h1 className='lg:text-5xl text-center lg:text-start text-2xl font-bold'>
							{product.name}
						</h1>
						<p className='text-4xl text-center lg:text-start font-bold text-primary'>
							{product.price} €
						</p>
						<div className='flex flex-col-reverse lg:flex-col gap-3'>
							<p className='text-lg text-center lg:text-start'>
								{product.description}
							</p>
							<a href={product.link} target='_blank' className='w-full mt-2'>
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
		</div>
	)
}
