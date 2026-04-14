import Footer from '@/components/footer/Footer'
import Navigation from '@/components/navigation/Navigation' // or adjust the import path as needed
import { Loader } from 'lucide-react'

export const LoadingScreen = () => {
	return (
		<main className='flex flex-col'>
			<Navigation />
			<section className='flex-1 min-h-screen flex justify-center items-center'>
				<Loader className='animate-spin' size={48} />
			</section>
			<Footer />
		</main>
	)
}
