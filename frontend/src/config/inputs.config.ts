import { IInputData } from '@/components/custom-ui/OrderInput'

const namePattern = /^[\p{L}\s]+$/u

export const INPUT_FIRM_DATA: Omit<IInputData, 'register'>[] = [
	{
		regName: 'name',
		placeholder: 'Name',
		rules: {
			required: 'Name ist erforderlich',
			minLength: { value: 2, message: 'Mindestens 2 Zeichen' },
			maxLength: { value: 50, message: 'Maximal 50 Zeichen' },
			pattern: {
				value: namePattern,
				message: 'Ungültiger Name',
			},
		},
	},
	{
		regName: 'email',
		placeholder: 'E-Mail',
		rules: {
			required: 'E-Mail ist erforderlich',
			pattern: {
				value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
				message: 'E-Mail ist nicht gültig',
			},
		},
	},
	{
		regName: 'address',
		placeholder: 'Adresse',
		rules: {
			required: 'Adresse ist erforderlich',
			minLength: { value: 5, message: 'Adresse zu kurz' },
		},
	},
	{
		regName: 'ust',
		placeholder: 'USt-Nummer',
		rules: {
			required: 'USt-Nummer ist erforderlich',
			pattern: {
				value: /^[A-Z]{2}[A-Z0-9]{6,14}$/,
				message: 'Ungültige USt-IdNr.',
			},
		},
	},
	{
		regName: 'kontaktperson',
		placeholder: 'Kontaktperson',
		rules: {
			required: 'Kontaktperson ist erforderlich',
			minLength: { value: 2, message: 'Mindestens 2 Zeichen' },
			maxLength: { value: 50, message: 'Maximal 50 Zeichen' },
			pattern: {
				value: namePattern,
				message: 'Ungültiger Name',
			},
		},
	},
]

export const PLACE_INFO_DATA: Omit<IInputData, 'register'>[] = [
	{
		regName: 'ort',
		placeholder: 'Ort',
		rules: {
			required: 'Ort ist erforderlich',
			minLength: { value: 2, message: 'Ort zu kurz' },
			pattern: {
				value: /^[\p{L}\s]+$/u,
				message: 'Ort darf nur Buchstaben und Leerzeichen enthalten',
			},
		},
	},
	{
		regName: 'plz',
		placeholder: 'PLZ',
		rules: {
			required: 'PLZ ist erforderlich',
			pattern: {
				value: /^\d{5}$/,
				message: 'PLZ muss 5-stellig sein',
			},
		},
	},
	{
		regName: 'land',
		placeholder: 'Land',
		rules: {
			required: 'Land ist erforderlich',
			minLength: { value: 2, message: 'Land zu kurz' },
			pattern: {
				value: /^[\p{L}\s]+$/u,
				message: 'Land darf nur Buchstaben und Leerzeichen enthalten',
			},
		},
	},
]
