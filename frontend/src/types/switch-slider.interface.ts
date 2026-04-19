import { LucideProps } from 'lucide-react'
import {
	Dispatch,
	ForwardRefExoticComponent,
	RefAttributes,
	SetStateAction,
} from 'react'

interface IOption<T> {
	value: T
	label: string
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>
}

export interface ISwitchSlider<T> {
	options: [IOption<T>, IOption<T>]
	startValue: T
	setData: Dispatch<SetStateAction<T>>
}
