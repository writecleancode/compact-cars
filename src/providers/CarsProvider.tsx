import { CarsProviderProps, comparedCars } from 'src/types/types';
import { cars as carsData } from 'src/data/cars';
import { createContext, useState } from 'react';

export const CarsContext = createContext({
	cars: [],
	setCars: () => {},
	carsToDisplay: [],
	setCarsToDisplay: () => {},
	comparedCars: [],
	setComparedCars: () => {},
	removeCar: () => {},
});

export const CarsProvider = ({ children }: CarsProviderProps) => {
	const [cars, setCars] = useState(carsData);
	const [carsToDisplay, setCarsToDisplay] = useState([]);
	const [comparedCars, setComparedCars] = useState<comparedCars>([]);

	const removeCar = (clickedId: string) => {
		const filteredCars = cars.filter(car => car.id !== clickedId);
		setCars(filteredCars);
	};

	return (
		<CarsContext.Provider value={{ cars, setCars, carsToDisplay, setCarsToDisplay, comparedCars, setComparedCars, removeCar }}>
			{children}
		</CarsContext.Provider>
	);
};
