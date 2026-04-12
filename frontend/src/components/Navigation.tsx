import { NAV_ITEMS } from '@/config/pages.config'
import { cn } from '@/utils/cn'
import { Menu, X } from 'lucide-react'
import { memo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navigation = memo(() => {
	const [isOpen, setIsOpen] = useState(false)

	const location = useLocation()

	return (
		<nav className='fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-16'>
					<a href='/'>
						<div className='flex items-center space-x-2'>
							<img src='/Logo.png' width={35} alt='' />
							<span className='text-xl font-bold text-foreground'>
								TecTronics
							</span>
						</div>
					</a>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-8'>
						{NAV_ITEMS.map(item => {
							const isActive =
								(location.pathname === item.href && location.hash === '') ||
								(location.hash === item.href &&
									location.pathname !== item.href) ||
								(location.pathname === '/' &&
									location.hash === item.href.split('/')[1])

							return (
								<HashLink
									smooth
									to={item.href}
									key={item.label}
									className={cn(
										'text-muted-foreground hover:text-foreground transition-colors',
										isActive && 'text-foreground font-semibold',
									)}
								>
									{item.label}
								</HashLink>
							)
						})}
					</div>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden text-foreground'
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className='md:hidden pb-4 animate-fade-in'>
						{NAV_ITEMS.map(item => (
							<HashLink
								smooth
								to={item.href}
								key={item.label}
								className='block py-2 text-muted-foreground hover:text-foreground transition-colors'
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</HashLink>
						))}
					</div>
				)}
			</div>
		</nav>
	)
})

export default Navigation
