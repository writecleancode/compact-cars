import { ChangeEvent, ReactNode } from 'react';

export type CarCardProps = {
	isPreviewCard?: boolean;
	isCompared: boolean;
	car: CarType;
};

export type CarType = {
	id: string;
	brand: string;
	model: string;
	generation: string;
	productionStartYear: number;
	productionEndYear: number;
	facelift: string;
	imgUrl: string;
};

export type CarsType = CarType[];

type usersFilterPreferencesType = {
	brands: {
		value: string;
		isActive: boolean;
	}[];
	years: {
		value: number;
		isActive: boolean;
	}[];
};

export type CarsContextType = {
	cars: CarsType;
	carsToDisplay: CarsType;
	setCarsToDisplay: React.Dispatch<React.SetStateAction<CarsType>>;
	comparedCars: CarsType;
	usersFilterPreferences: {} | usersFilterPreferencesType;
	handleFilterPreferences: (clickedOption: string | number) => void;
	removeCar: (clickedId: string) => void;
	sortCars: (sortCriteria: string) => void;
	findCars: (() => []) | ((inputValue: string) => CarsType);
	filterCars: () => CarsType;
	handleCompareStatus: (clickedCarId: string) => void;
};

export type CarsProviderProps = {
	children: ReactNode;
};

export type comparedCarsType = never[] | CarsType;

export type ModalProviderProps = {
	children: ReactNode;
};

export type NavProviderProps = {
	children: ReactNode;
};

export type OutletContextType = {
	cars: CarsType;
	comparedCars: comparedCarsType;
};

export type SearchInputProps = {
	value: string;
	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type SortSelectProps = {
	options: {
		value: string;
		text: string;
	}[];
	defaultOption: string;
	selectedValue: string;
	handleSelectedValueChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};
