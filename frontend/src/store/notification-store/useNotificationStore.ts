import { create } from 'zustand/react'

export const EnumNotification = {
	INFO: 'INFO',
	SUCCESS: 'SUCCESS',
} as const

export type TNotification =
	(typeof EnumNotification)[keyof typeof EnumNotification]

interface INotificationStore {
	message: string
	type: TNotification
	show: (message: string, type: TNotification) => void
}

export const useNotificationStore = create<INotificationStore>(set => ({
	message: '',
	type: EnumNotification.SUCCESS,
	show: (message, type, duration = 2500) => {
		set({ message, type })
		setTimeout(() => {
			set({ message: '' })
		}, duration)
	},
}))
