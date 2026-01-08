export interface Product {
	id: number
	name: string
	price: number
	photo: string
	description: string
	link: string
}

export const products: Product[] = [
	{
		id: 1,
		name: 'Synology DiskStation DS218',
		price: 50.99,
		photo:
			'https://images.unsplash.com/photo-1577538926988-7926820ed209?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Leistungsstarkes und vielseitiges NAS (Network Attached Storage) mit 2 Festplattenschächten. Das Gerät ist mit einem 64-Bit-Quad-Core-Prozessor mit 1,4 GHz und 2 GB DDR4-RAM ausgestattet. Die Konnektivität umfasst einen USB 2.0-Anschluss, zwei USB 3.0-Anschlüsse und einen 1GbE (RJ-45) LAN-Anschluss. Konzipiert für Privatanwender und kleine Büros, um Daten effizient zu verwalten und zu schützen',
		link: '',
	},
	{
		id: 2,
		name: 'Samsung Portable SSD T5',
		price: 100,
		photo:
			'https://images.unsplash.com/photo-1577538926210-fc6cc624fde2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Externe SSD-Festplatte, die als Alternative zur externen Festplatte (HDD) dient. Die T5 ist kompakt, stoßfest und bietet Transferraten von bis zu 540 MB/s. Sie ist mit einer USB 3.1-Schnittstelle ausgestattet und kann an PCs, Macs, Smartphones, Kameras, Spielekonsolen und Smart TVs angeschlossen werden. Das robuste Metallgehäuse schützt vor Datenverlust durch Erschütterungen und Stürze aus bis zu zwei Metern Höhe.',
		link: '',
	},
	{
		id: 3,
		name: 'Curved Office Monitor',
		price: 150,
		photo:
			'https://images.unsplash.com/photo-1666771409964-4656b1099ccb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Dient als effiziente alternative zu Multi-Monitor-Setups. Das 34-Zoll-Display (21:9) bietet eine WQHD-Auflösung von 3440 x 1440 Pixeln bei einer typischen Krümmung von 1500R. Ergonomische Merkmale wie Höhenverstellung und TÜV-zertifizierter Blaulichtfilter sind vorhanden. Die Reaktionszeit beträgt ca. 5 ms (GtG) und die Bildwiederholfrequenz liegt bei 60 Hz (oder bis zu 100 Hz).',
		link: '',
	},
	{
		id: 4,
		name: 'Logitech StreamCam',
		price: 150,
		photo:
			'https://images.unsplash.com/photo-1623949556303-b0d17d198863?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Die Logitech StreamCam dient als effiziente Lösung für hochauflösende Videokonferenzen in Unternehmen. Sie liefert Videos in Full HD (1080p) mit 60 Bildern pro Sekunde, ideal für professionelle Meetings oder interne Präsentationen.',
		link: '',
	},
	{
		id: 5,
		name: 'Canon i-SENSYS MF64',
		price: 150,
		photo:
			'https://images.unsplash.com/photo-1650094980833-7373de26feb6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Das  leistungsstarkes A4-Farb-Multifunktionssystem der Canon i-SENSYS MF640 Serie bietet Druck-, Kopier-, Scan- und optional Faxfunktionen in einem kompakten Gehäuse, ideal für kleine Büroumgebungen. Das System erreicht Druckgeschwindigkeiten von bis zu 21 A4-Seiten pro Minute in Farbe und Schwarzweiß. Die Bedienung erfolgt über einen intuitiven 12,7 cm großen LCD-Farb-Touchscreen. Flexible Konnektivitätsoptionen wie USB, LAN und WLAN sowie mobile Kompatibilität über Apps wie Canon PRINT Business sind vorhanden.',
		link: '',
	},
]
