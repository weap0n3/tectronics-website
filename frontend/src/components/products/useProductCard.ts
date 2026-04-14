import { useEffect, useRef, useState } from 'react'

export const useProductCard = () => {
	const [isVisible, setIsVisible] = useState(false)

	const [isMoreInfoVisible, setIsMoreInfoVisible] = useState(false)

	const targetRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					setIsVisible(entry.isIntersecting)
				})
			},
			{ root: null, threshold: 0, rootMargin: '0px 0px -10% 0px' },
		)

		if (targetRef.current) {
			observer.observe(targetRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return {
		isVisible,
		isMoreInfoVisible,
		targetRef,
		setIsMoreInfoVisible,
	}
}
