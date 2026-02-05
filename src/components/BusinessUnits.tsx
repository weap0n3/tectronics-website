import { Button } from '@/components/ui/button/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ArrowRight, Cable, Gamepad2 } from 'lucide-react'

const BusinessUnits = () => {
	const units = [
		{
			icon: Gamepad2,
			title: 'Game Garage',
			description:
				'Dein Partner für Gaming-Hardware, Konsolen und Zubehör. Von den neuesten Releases bis zu Retro-Klassikern.',
			gradient: 'bg-gradient-gaming',
			features: [
				'Gaming Hardware',
				'Konsolen & Spiele',
				'Gaming Zubehör',
				'Beratung',
			],
		},
		{
			icon: Cable,
			title: 'Cable-Corner',
			description:
				'IT-Lösungen, Hosting-Services und professionelle Kabel für deine technischen Anforderungen.',
			gradient: 'bg-gradient-primary',
			features: [
				'IT-Hosting',
				'Kabel & Adapter',
				'Netzwerklösungen',
				'Tech Support',
			],
		},
	]

	return (
		<section id='services' className='py-24 bg-background'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16 animate-fade-in'>
					<h2 className='text-4xl md:text-5xl font-bold mb-4'>
						Unsere Geschäftsbereiche
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Zwei spezialisierte Abteilungen für all deine Tech-Bedürfnisse
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
					{units.map((unit, index) => (
						<Card
							key={unit.title}
							className='group relative overflow-hidden border-border bg-card hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in'
							style={{ animationDelay: `${index * 0.2}s` }}
						>
							<div
								className={`absolute inset-0 ${unit.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
							/>

							<CardHeader>
								<div
									className={`w-12 h-12 rounded-lg ${unit.gradient} flex items-center justify-center mb-4`}
								>
									<unit.icon className='w-6 h-6 text-primary-foreground' />
								</div>
								<CardTitle className='text-2xl'>{unit.title}</CardTitle>
								<CardDescription className='text-base'>
									{unit.description}
								</CardDescription>
							</CardHeader>

							<CardContent>
								<ul className='space-y-3 mb-6'>
									{unit.features.map(feature => (
										<li
											key={feature}
											className='flex items-center text-muted-foreground'
										>
											<div className='w-1.5 h-1.5 rounded-full bg-primary mr-3' />
											{feature}
										</li>
									))}
								</ul>

								<Button
									variant='secondary'
									className='w-full group-hover:bg-secondary/80'
								>
									Mehr erfahren
									<ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default BusinessUnits
