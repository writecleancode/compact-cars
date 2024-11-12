import { CarsContextType, CarsProviderProps, CarsType, CarType } from 'src/types/types';
import { filterBrands, filterYears } from 'src/data/filters';
import { createContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCarToComparison, removeCarFromComparison, setCars } from 'src/store';

const filterBrandsData = filterBrands.map(option => ({ value: option, isActive: false }));
const filterYearsData = filterYears.map(option => ({ value: option, isActive: false }));

let filteredCars: CarsType = [];

const getCarName = (car: CarType) => `${car.brand} ${car.model}`;
const getCarProductionYear = (car: CarType) => car.productionStartYear;

export const CarsContext = createContext<CarsContextType>({
	cars: [],
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
	const cars = useSelector((state: Record<string, CarsType>) => state.cars);
	const comparedCars = useSelector((state: Record<string, CarsType>) => state.comparedCars);
	const dispatch = useDispatch();
	const [carsToDisplay, setCarsToDisplay] = useState<CarsType>([]);
	const [usersFilterPreferences, setUsersFilterPreferences] = useState({ brands: filterBrandsData, years: filterYearsData });

	const handleCompareStatus = (clickedCarId: string) => {
		if (comparedCars.some(car => car.id === clickedCarId)) {
			dispatch(removeCarFromComparison(clickedCarId));
		} else {
			const clickedCar = cars.find(car => car.id === clickedCarId);
			clickedCar && dispatch(addCarToComparison(clickedCar));
		}
	};

	const removeCar = (clickedCarId: string) => {
		const filteredCars = cars.filter(car => car.id !== clickedCarId);
		dispatch(setCars(filteredCars));
		dispatch(removeCarFromComparison(clickedCarId));
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

		dispatch(setCars(sortedCars));
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
