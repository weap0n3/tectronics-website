import { cn } from '@/utils/cn'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const LangSwitcher = () => {
	const { t, i18n } = useTranslation('common')

	const [lang, setLang] = useState<string>(i18n.language)

	return (
		<div className='flex gap-1.5'>
			<p>EN</p>
			<button
				onClick={() => {
					const newLang = lang === 'en' ? 'de' : 'en'

					setLang(newLang)
					i18n.changeLanguage(newLang)
				}}
			>
				<div className='relative py-2.5 px-5 shadow-inner bg-secondary rounded-full'>
					<span
						className={cn(
							'absolute top-0.5 border rounded-full bg-primary w-4 h-4 transition-all duration-200 ease-in-out',
							lang === 'en' ? 'left-0.5' : 'left-1/2',
						)}
					/>
				</div>
			</button>
			<p>DE</p>
		</div>
	)
}
