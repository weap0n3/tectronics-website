import { Card, CardContent } from '@/components/ui/card'
import { Leaf, Lightbulb, Target, Users } from 'lucide-react'

const About = () => {
	const values = [
		{
			icon: Target,
			title: 'Qualität & Innovation',
			description:
				'Wir streben nach höchster Qualität und kontinuierlicher Verbesserung in allen Bereichen.',
		},
		{
			icon: Users,
			title: 'Teamwork',
			description:
				'Zusammenarbeit und gegenseitige Unterstützung sind die Basis unseres Erfolgs.',
		},
		{
			icon: Lightbulb,
			title: 'Praxisorientiertes Lernen',
			description:
				'Echte Geschäftsprozesse simulieren und dabei wertvolle Erfahrungen sammeln.',
		},
		{
			icon: Leaf,
			title: 'Nachhaltigkeit',
			description:
				'Überwiegend papierlose Arbeitsweise für eine bessere Zukunft.',
		},
	]

	return (
		<section id='about' className='py-24 bg-background'>
			<div className='container mx-auto px-4'>
				<div className='max-w-6xl mx-auto'>
					<div className='text-center mb-16 animate-fade-in'>
						<h2 className='text-4xl md:text-5xl font-bold mb-4'>
							Über TecTronics
						</h2>
						<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
							Als Übungsfirma der HAK Zell am See simulieren wir realistische
							Unternehmensprozesse und bieten Schülerinnen und Schülern die
							Möglichkeit, praktische Erfahrungen in einem geschützten Umfeld zu
							sammeln.
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-8 mb-16'>
						{values.map((value, index) => (
							<Card
								key={value.title}
								className='group hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in'
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<CardContent className='pt-6'>
									<div className='flex items-start gap-4'>
										<div className='w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0'>
											<value.icon className='w-6 h-6 text-primary-foreground' />
										</div>
										<div>
											<h3 className='text-xl font-semibold mb-2 group-hover:text-primary transition-colors'>
												{value.title}
											</h3>
											<p className='text-muted-foreground'>
												{value.description}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<Card className='bg-gradient-primary p-8 text-primary-foreground animate-fade-in'>
						<div className='text-center'>
							<h3 className='text-2xl font-bold mb-4'>Unsere Mission</h3>
							<p className='text-lg max-w-3xl mx-auto opacity-90'>
								Wir schaffen eine realistische Lernumgebung, in der Theorie und
								Praxis verschmelzen. Durch die Simulation echter
								Geschäftsprozesse bereiten wir unsere Teilnehmer optimal auf die
								Anforderungen der modernen Arbeitswelt vor.
							</p>
						</div>
					</Card>
					<div className='w-full'>
						<img className='w-full' src='/Organigramm.png' alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
