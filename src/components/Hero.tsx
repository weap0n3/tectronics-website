import { Button } from '@/components/ui/button/Button'
import { ArrowRight, BriefcaseBusiness } from 'lucide-react'

const Hero = () => {
	return (
		<section
			id='home'
			className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero'
		>
			{/* Animated background elements */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow' />
				<div
					className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-gaming/20 rounded-full blur-3xl animate-glow'
					style={{ animationDelay: '1s' }}
				/>
			</div>

			<div className='container mx-auto px-4 pt-20 relative z-10'>
				<div className='max-w-4xl mx-auto text-center animate-fade-in'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border mb-8'>
						<BriefcaseBusiness className='w-5 text-primary' />
						<span className='text-sm text-muted-foreground'>
							Übungsfirma der HAK Zell am See
						</span>
					</div>

					<h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent'>
						TecTronics
					</h1>

					<p className='text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
						Deine Plattform für Gaming und Technologie. Wir simulieren echte
						Geschäftsprozesse und bieten innovative Lösungen.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
						<a href='/products'>
							<Button
								size='lg'
								className='bg-gradient-primary shadow-glow hover:shadow-glow hover:scale-105 transition-all'
							>
								Entdecke unsere Services
								<ArrowRight className='ml-2 w-5 h-5' />
							</Button>
						</a>
						<a href='#about'>
							<Button
								size='lg'
								variant='secondary'
								className='hover:scale-105 transition-transform'
							>
								Mehr erfahren
							</Button>
						</a>
					</div>

					{/*<div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16'>
						{[
							{ label: 'Abteilungen', value: '2+' },
							{ label: 'Produkte', value: '50+' },
							{ label: 'Projekte', value: '20+' },
							{ label: 'Partner', value: '10+' },
						].map(stat => (
							<div key={stat.label} className='text-center'>
								<div className='text-3xl md:text-4xl font-bold text-primary mb-2'>
									{stat.value}
								</div>
								<div className='text-sm text-muted-foreground'>
									{stat.label}
								</div>
							</div>
						))}
					</div>
					*/}
				</div>
			</div>
		</section>
	)
}

export default Hero
