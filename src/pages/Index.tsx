import About from '@/components/About'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'

const Index = () => {
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
