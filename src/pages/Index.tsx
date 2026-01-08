import About from '@/components/About'
import BusinessUnits from '@/components/BusinessUnits'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import NewsSection from '@/components/NewsSection'

const Index = () => {
	return (
		<div className='min-h-screen bg-background'>
			<Navigation />
			<Hero />
			<BusinessUnits />
			<NewsSection />
			<About />
			<Footer />
		</div>
	)
}

export default Index
