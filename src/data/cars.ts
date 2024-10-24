import { v4 as uuid } from 'uuid';

type Cars = {
	id: string;
	brand: string;
	model: string;
	generation: string;
	productionStartYear: number;
	productionEndYear: number;
	facelift: string;
	imgUrl: string;
}[];

export const cars: Cars = [
	{
		id: uuid(),
		brand: 'Alfa Romeo',
		model: '146',
		generation: 'I (Type 930)',
		productionStartYear: 1994,
		productionEndYear: 2000,
		facelift: '1999',
		imgUrl: 'https://www.datocms-assets.com/112049/1699786166-alfa_romeo_146_i.png',
	},
	{
		id: uuid(),
		brand: 'Audi',
		model: 'A3',
		generation: 'I (8L)',
		productionStartYear: 1996,
		productionEndYear: 2003,
		facelift: '2000',
		imgUrl: 'https://www.datocms-assets.com/112049/1699699902-audi_a3_i.jpg',
	},
	{
		id: uuid(),
		brand: 'BMW',
		model: '3 Compact',
		generation: 'I (E36)',
		productionStartYear: 1993,
		productionEndYear: 2000,
		facelift: '-',
		imgUrl: 'https://www.datocms-assets.com/112049/1729758243-bmw_3_compact_i.jpeg',
	},
	{
		id: uuid(),
		brand: 'Citroen',
		model: 'Xsara',
		generation: 'I (N1)',
		productionStartYear: 1997,
		productionEndYear: 2005,
		facelift: '2000',
		imgUrl: 'https://www.datocms-assets.com/112049/1729758243-citroen_xsara_i.png',
	},
	{
		id: uuid(),
		brand: 'Fiat',
		model: 'Brava',
		generation: 'I (Type 182)',
		productionStartYear: 1995,
		productionEndYear: 2001,
		facelift: '1999',
		imgUrl: 'https://www.datocms-assets.com/112049/1729758753-fiat_brava_i.jpg',
	},
	{
		id: uuid(),
		brand: 'Ford',
		model: 'Focus',
		generation: 'I (C170)',
		productionStartYear: 1998,
		productionEndYear: 2005,
		facelift: '2001',
		imgUrl: 'https://www.datocms-assets.com/112049/1729758779-ford_focus_i.jpg',
	},
	{
		id: uuid(),
		brand: 'Honda',
		model: 'Civic',
		generation: 'VI',
		productionStartYear: 1995,
		productionEndYear: 2001,
		facelift: '1999',
		imgUrl: 'https://www.datocms-assets.com/112049/1729758786-honda_civic_vi.jpg',
	},
	{
		id: uuid(),
		brand: 'Lancia',
		model: 'Delta',
		generation: 'II',
		productionStartYear: 1993,
		productionEndYear: 1999,
		facelift: '-',
		imgUrl: 'https://www.datocms-assets.com/112049/1729758791-lancia_delta_ii.webp',
	},
	{
		id: uuid(),
		brand: 'Mazda',
		model: '323',
		generation: 'VI (BJ)',
		productionStartYear: 1998,
		productionEndYear: 2003,
		facelift: '2001',
		imgUrl: 'https://www.datocms-assets.com/112049/1729758797-mazda_323_vi.jpg',
	},
	{
		id: uuid(),
		brand: 'Nissan',
		model: 'Almera',
		generation: 'I (N15)',
		productionStartYear: 1995,
		productionEndYear: 2000,
		facelift: '1998',
		imgUrl: 'https://www.datocms-assets.com/112049/1729758806-nissan_almera_i.jpg',
	},
	{
		id: uuid(),
		brand: 'Opel',
		model: 'Astra',
		generation: 'II (G)',
		productionStartYear: 1998,
		productionEndYear: 2009,
		facelift: '-',
		imgUrl: 'https://www.datocms-assets.com/112049/1729759112-opel_astra_ii.webp',
	},
	{
		id: uuid(),
		brand: 'Peugeot',
		model: '306',
		generation: 'I (7A/C)',
		productionStartYear: 1993,
		productionEndYear: 2002,
		facelift: '1997, 1999',
		imgUrl: 'https://www.datocms-assets.com/112049/1729760838-peugeot_306_i.jpg',
	},
	{
		id: uuid(),
		brand: 'Renault',
		model: 'Megane',
		generation: 'I (BA)',
		productionStartYear: 1995,
		productionEndYear: 2003,
		facelift: '1999',
		imgUrl: 'https://www.datocms-assets.com/112049/1729759123-renault_megane_i.jpg',
	},
	{
		id: uuid(),
		brand: 'Seat',
		model: 'Leon',
		generation: 'I (1M)',
		productionStartYear: 1999,
		productionEndYear: 2005,
		facelift: '-',
		imgUrl: 'https://www.datocms-assets.com/112049/1729759130-seat_leon_i.jpg',
	},
	{
		id: uuid(),
		brand: 'Toyota',
		model: 'Corolla',
		generation: 'VIII (E110)',
		productionStartYear: 1997,
		productionEndYear: 2002,
		facelift: '1999',
		imgUrl: 'https://www.datocms-assets.com/112049/1729759138-toyota_corolla_viii.jpg',
	},
	{
		id: uuid(),
		brand: 'Volkswagen',
		model: 'Golf',
		generation: 'IV (1J)',
		productionStartYear: 1997,
		productionEndYear: 2003,
		facelift: '-',
		imgUrl: 'https://www.datocms-assets.com/112049/1729759146-volkswagen_golf_iv.jpg',
	},
];
