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

export type comparedCars = never[] | Cars;

export type NavProviderProps = {
	children: ReactNode;
};

export type OutletContextType = {
	cars: Cars;
	setCars: React.Dispatch<React.SetStateAction<Cars>>;
	comparedCars: comparedCars;
	setComparedCars: React.Dispatch<React.SetStateAction<never[] | Cars>>;
};
