import { Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer id='contact' className='bg-muted/30 border-t border-border py-12'>
			<div className='container mx-auto px-4'>
				<div className='grid md:grid-cols-4 gap-8 mb-8'>
					<div>
						<div className='flex items-center space-x-2 mb-4'>
							<img src='/Logo.png' width={35} alt='' />
							<span className='text-xl font-bold text-foreground'>
								TecTronics
							</span>
						</div>
						<p className='text-sm text-muted-foreground'>
							Übungsfirma der HAK Zell am See
						</p>
					</div>

					<div>
						<h4 className='font-semibold mb-4 text-foreground'>Navigation</h4>
						<ul className='space-y-2 text-sm text-muted-foreground'>
							<li>
								<a
									href='#home'
									className='hover:text-foreground transition-colors'
								>
									Home
								</a>
							</li>
							<li>
								<a
									href='#services'
									className='hover:text-foreground transition-colors'
								>
									Angebot
								</a>
							</li>
							<li>
								<a
									href='#news'
									className='hover:text-foreground transition-colors'
								>
									News
								</a>
							</li>
							<li>
								<a
									href='#about'
									className='hover:text-foreground transition-colors'
								>
									Über uns
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='font-semibold mb-4 text-foreground'>
							Geschäftsbereiche
						</h4>
						<ul className='space-y-2 text-sm text-muted-foreground'>
							<li>
								<a
									href='#services'
									className='hover:text-foreground transition-colors'
								>
									Game Garage
								</a>
							</li>
							<li>
								<a
									href='#services'
									className='hover:text-foreground transition-colors'
								>
									Cable-Corner
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='font-semibold mb-4 text-foreground'>Kontakt</h4>
						<ul className='space-y-3 text-sm text-muted-foreground'>
							<li className='flex items-center gap-2'>
								<MapPin className='w-4 h-4' />
								<span>HAK Zell am See</span>
							</li>
							<li className='flex items-center gap-2'>
								<Mail className='w-4 h-4' />
								<a href='mailto:tectronics2816@uebungsfirmen.at'>
									tectronics2816@uebungsfirmen.at
								</a>
							</li>
							<li className='flex items-center gap-2'>
								<Phone className='w-4 h-4' />
								<span>+43 06542/57588-530</span>
							</li>
						</ul>
					</div>
				</div>

				<div className='pt-8 border-t border-border text-center text-sm text-muted-foreground'>
					<p>
						© {currentYear} TecTronics - Übungsfirma der HAK Zell am See. Alle
						Rechte vorbehalten.
					</p>
					<p className='mt-2 text-xs'>Erstellt mit React & Tailwind CSS</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
