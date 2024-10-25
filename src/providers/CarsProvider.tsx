import { CarsContextType, CarsProviderProps, CarsType, CarType, comparedCarsType } from 'src/types/types';
import { cars as carsData } from 'src/data/cars';
import { filterBrands, filterYears } from 'src/data/filters';
import { createContext, useState } from 'react';

const filterBrandsData = filterBrands.map(option => ({ value: option, isActive: false }));
const filterYearsData = filterYears.map(option => ({ value: option, isActive: false }));

let filteredCars: CarsType = [];

const getCarName = (car: CarType) => `${car.brand} ${car.model}`;
const getCarProductionYear = (car: CarType) => car.productionStartYear;

export const CarsContext = createContext<CarsContextType>({
	cars: [],
	setCars: () => {},
	carsToDisplay: [],
	setCarsToDisplay: () => {},
	comparedCars: [],
	usersFilterPreferences: { brands: [], years: [] },
	handleFilterPreferences: () => {},
	removeCar: () => {},
	sortCars: () => {},
	findCars: () => [],
	filterCars: () => [],
	handleCompareStatus: () => {},
});

export const CarsProvider = ({ children }: CarsProviderProps) => {
	const [cars, setCars] = useState(carsData);
	const [carsToDisplay, setCarsToDisplay] = useState<CarsType>([]);
	const [usersFilterPreferences, setUsersFilterPreferences] = useState({ brands: filterBrandsData, years: filterYearsData });
	const [comparedCars, setComparedCars] = useState<comparedCarsType>([]);

	const removeCarFromComparison = (clickedCarId: string) => {
		const carIndex = comparedCars.map(car => car.id).indexOf(clickedCarId);
		setComparedCars(prevState => [...prevState.slice(0, carIndex), ...prevState.slice(carIndex + 1)]);
	};

	const handleCompareStatus = (clickedCarId: string) => {
		if (comparedCars.some(car => car.id === clickedCarId)) {
			removeCarFromComparison(clickedCarId);
		} else {
			const clickedCar = cars.find(car => car.id === clickedCarId);
			clickedCar && setComparedCars(prevState => [...prevState, clickedCar]);
		}
	};

	const removeCar = (clickedCarId: string) => {
		const filteredCars = cars.filter(car => car.id !== clickedCarId);
		setCars(filteredCars);
		removeCarFromComparison(clickedCarId);
	};

	const sortCars = (sortCriteria = 'byAlphabet') => {
		const sortedCars = cars.toSorted((carA: CarType | string | number, carB: CarType | string | number) => {
			if (sortCriteria.toLowerCase().includes('alphabet')) {
				carA = getCarName(carA as CarType);
				carB = getCarName(carB as CarType);
			} else if (sortCriteria.toLowerCase().includes('year')) {
				carA = getCarProductionYear(carA as CarType);
				carB = getCarProductionYear(carB as CarType);
			}

			if (sortCriteria.toLowerCase().includes('reverse')) {
				[carA, carB] = [carB, carA];
			}

			if (carA < carB) {
				return -1;
			} else if (carA > carB) {
				return 1;
			} else {
				return 0;
			}
		});

		setCars(sortedCars);
	};

	const findCars = (inputValue: string) => {
		const carsToCheck = cars === filteredCars ? cars : filteredCars;

		const matchingCars = inputValue
			? carsToCheck.filter(car => `${car.brand} ${car.model}`.toLowerCase().includes(inputValue.toLowerCase()))
			: carsToCheck;

		return matchingCars;
	};

	const filterCars = () => {
		filteredCars = cars;

		if (usersFilterPreferences.brands.some(option => option.isActive)) {
			const filteredByBrand: CarsType = [];
			const activeFilterClasses = usersFilterPreferences.brands.filter(option => option.isActive);

			cars.forEach(car => {
				activeFilterClasses.forEach(option => option.value === car.brand && filteredByBrand.push(car));
			});

			filteredCars = filteredByBrand;
		}

		if (usersFilterPreferences.years.some(option => option.isActive)) {
			usersFilterPreferences.years.forEach(option => {
				if (option.isActive) {
					filteredCars = filteredCars.filter(
						car => option.value >= car.productionStartYear && option.value <= car.productionEndYear && car
					);
				}
			});
		}

		return filteredCars;
	};

	const handleFilterPreferences = (clickedOption: string | number) => {
		const optionType = typeof clickedOption === 'number' ? 'years' : 'brands';
		const clickedOptionIndex = usersFilterPreferences[optionType].map(option => option.value).indexOf(clickedOption);

		setUsersFilterPreferences(prevState => ({
			...prevState,
			[optionType]: [
				...prevState[optionType].slice(0, clickedOptionIndex),
				{
					...prevState[optionType][clickedOptionIndex],
					isActive: !prevState[optionType][clickedOptionIndex].isActive,
				},
				...prevState[optionType].slice(clickedOptionIndex + 1),
			],
		}));
	};

	return (
		<CarsContext.Provider
			value={{
				cars,
				setCars,
				carsToDisplay,
				setCarsToDisplay,
				comparedCars,
				usersFilterPreferences,
				handleFilterPreferences,
				removeCar,
				sortCars,
				findCars,
				filterCars,
				handleCompareStatus,
			}}>
			{children}
		</CarsContext.Provider>
	);
};
