import { ReactNode } from 'react';

export type Car = {
	id: string;
	brand: string;
	model: string;
	generation: string;
	productionStartYear: number;
	productionEndYear: number;
	facelift: string;
	imgUrl: string;
};

export type Cars = Car[];

export type NavProviderProps = {
	children: ReactNode;
};
