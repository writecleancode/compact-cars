import { ChangeEvent, FormEvent, ReactNode } from 'react';

export type CarCardProps = {
	isCompared?: boolean;
	car: CarType;
};

export type CarInfoBoxProps = {
	title: string;
	content: string;
};

export type CarType = {
	id?: string;
	brand: string;
	model: string;
	generation: string;
	productionStartYear: number;
	productionEndYear: number;
	facelift: string;
	imgUrl: string;
};

export type CarsType = CarType[];

export type CarsContextType = {
	cars: CarsType;
	setCars: React.Dispatch<React.SetStateAction<CarsType>>;
	carsToDisplay: CarsType;
	setCarsToDisplay: React.Dispatch<React.SetStateAction<CarsType>>;
	comparedCars: CarsType;
	usersFilterPreferences: usersFilterPreferencesType;
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

export type CompareButtonProps = {
	isCompared: boolean;
	onClick: () => void;
};

export type comparedCarsType = never[] | CarsType;

export type FilterBoxProps = {
	title: string;
	options: { value: string | number; isActive: boolean }[];
	$isYears?: boolean;
	handleFilter: (clickedOption: string | number) => void;
};

export type FormFieldProps = {
	label: string;
	name: string;
	id: string;
	type?: string;
	value: string | number;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type FormProps = {
	formValues: {
		brand: string;
		model: string;
		generation: string;
		productionStartYear: number;
		productionEndYear: number;
		facelift: string;
		imgUrl: string;
	};
	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSubmitForm: (e: FormEvent) => void;
};

export type ModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	children: ReactNode;
};

export type ModalProviderProps = {
	children: ReactNode;
};

export type NavProviderProps = {
	children: ReactNode;
};

export type NotificationsContextType = {
	successNotifications: string[];
	handleSuccessNotifications: () => void;
};

export type NotificationsProviderProps = {
	children: ReactNode;
};

export type OutletContextType = {
	cars: CarsType;
	setCars: React.Dispatch<React.SetStateAction<CarsType>>;
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
