import About from '@/components/about/About'
import Footer from '@/components/footer/Footer'
import Navigation from '@/components/navigation/Navigation'
import Hero from '@/components/welcome-screen/Hero'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Index = () => {
	const { hash } = useLocation()

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [hash])
	return (
		<div className='min-h-screen bg-background'>
			<Navigation />
			<Hero />
			{/*<BusinessUnits /> */}
			{/*<NewsSection /> */}
			<About />
			<Footer />
		</div>
	)
}

export default Index
