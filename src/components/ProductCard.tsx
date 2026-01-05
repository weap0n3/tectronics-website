import { ArrowUpRightFromSquare } from 'lucide-react'

export const ProductCard = ({ item }) => {
	return (
		<div
			className='flex rounded-lg m-4 p-0 overflow-hidden h-96 border w-[1200px]'
			key={item.id}
		>
			<div className='w-[60%]'>
				<img
					src={item.photo}
					className='h-full w-full object-contain'
					alt='Product Image'
				/>
			</div>
			<div className='bg-muted/30 px-14 flex flex-col justify-around w-[40%]'>
				<h1 className='text-6xl'>{item.name}</h1>
				<p className=''>{item.description}</p>
				<div className='flex justify-between items-center'>
					<p className='text-4xl text-sky-500 font-bold'>
						{item.price.toFixed(2)} €
					</p>
					<div className='relative w-1/2 rounded-lg overflow-hidden shadow-sky-600 shadow-glow cursor-pointer hover:scale-110 duration-700 ease-out before:absolute before:inset-0 before:bg-gradient-primary before:opacity-0 hover:before:opacity-20 before:transition-opacity before:duration-500 before:ease-in-out'>
						<div className='relative z-10 flex justify-between items-center p-3'>
							<a className='text-xl' href={item.link} target='_blank'>
								Marketplace
							</a>
							<span>
								<ArrowUpRightFromSquare />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
