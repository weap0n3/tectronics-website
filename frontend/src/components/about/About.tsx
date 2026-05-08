import { Card, CardContent } from '@/components/ui/card'
import { DESCRIPTIONS } from '@/constants/company-description'
import { useTranslation } from 'react-i18next'

const About = () => {
	const { t } = useTranslation()
	return (
		<section id='about' className='py-24 bg-background'>
			<div className='container mx-auto px-4'>
				<div className='max-w-6xl mx-auto'>
					<div className='text-center mb-16 animate-fade-in'>
						<h2 className='text-4xl md:text-5xl font-bold mb-4'>
							{t('about.title')}
						</h2>
						<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
							{t('about.description')}
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-8 mb-16'>
						{DESCRIPTIONS.map((value, index) => (
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
												{t(value.title)}
											</h3>
											<p className='text-muted-foreground'>
												{t(value.description)}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<Card className='bg-gradient-primary p-8 text-primary-foreground animate-fade-in'>
						<div className='text-center'>
							<h3 className='text-2xl font-bold mb-4'>
								{t('about.missionTitle')}
							</h3>
							<p className='text-lg max-w-3xl mx-auto opacity-90'>
								{t('about.missionDescription')}
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
