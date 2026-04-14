import About from '@/components/about/About'
import Hero from '@/components/welcome-screen/Hero'
import Footer from '@/components/footer/Footer'
import Navigation from '@/components/navigation/Navigation'

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
