import { Car, Cars } from 'src/types/types';
import { filterBrands, filterYears } from 'src/data/filters';
import { selectOptions } from 'src/data/select';
import { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react';
import { CarsContext } from 'src/providers/CarsProvider';
import { useCars } from 'src/hooks/useCars';
import debounce from 'lodash.debounce';
import { SearchInput } from 'src/components/atoms/SearchInput/SearchInput';
import { SortSelect } from 'src/components/atoms/SortSelect/SortSelect';
import { Modal } from 'src/components/organisms/Modal/Modal';
import { FilterBox } from 'src/components/molecules/FilterBox/FilterBox';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { CarCardsWrapper, FiltersWrapper, ManageFiltersButton, NoCarsInfo, SearchWrapper } from './Dashboard.styles';
import { ModalContext } from 'src/providers/ModalProvider';

const filterBrandsData = filterBrands.map(option => ({ value: option, isActive: false }));
const filterYearsData = filterYears.map(option => ({ value: option, isActive: false }));

let filteredCars: Cars = [];

const getCarName = (car: Car) => `${car.brand} ${car.model}`;
const getCarProductionYear = (car: Car) => car.productionStartYear;

export const Dashboard = () => {
	const { cars, setCars, comparedCars, setComparedCars } = useCars();
	const { carsToDisplay, setCarsToDisplay } = useContext(CarsContext);
	const { isModalOpen, openModal, closeModal } = useContext(ModalContext);
	const [selectedSortValue, setSelectedSortValue] = useState('');
	const [usersFilterPreferences, setUsersFilterPreferences] = useState({ brands: filterBrandsData, years: filterYearsData });
	const [searchPhrase, setSearchPhrase] = useState('');

	const handleCompareStatus = clickedCarId => {
		if (comparedCars.some(car => car.id === clickedCarId)) {
			const carIndex = comparedCars.map(car => car.id).indexOf(clickedCarId);
			setComparedCars(prevState => [...prevState.slice(0, carIndex), ...prevState.slice(carIndex + 1)]);
		} else {
			const clickedCar = cars.find(car => car.id === clickedCarId);
			setComparedCars(prevState => [...prevState, clickedCar]);
		}
	};

	const findCars = (inputValue = searchPhrase) => {
		const carsToCheck = cars === filteredCars ? cars : filteredCars;

		const matchingCars = inputValue
			? carsToCheck.filter(car => `${car.brand} ${car.model}`.toLowerCase().includes(inputValue.toLowerCase()))
			: carsToCheck;

		return matchingCars;
	};

	const filterCars = () => {
		filteredCars = cars;

		if (usersFilterPreferences.brands.some(option => option.isActive)) {
			const filteredByBrand = [];
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

	const handleDisplayCars = () => {
		let matchingCars;

		matchingCars = filterCars();
		matchingCars = findCars();

		setCarsToDisplay(matchingCars);
	};

	const handleFilterPreferences = clickedOption => {
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

	const sortCars = (sortCriteria = 'byAlphabet') => {
		const sortedCars = cars.toSorted((carA, carB) => {
			if (sortCriteria.toLowerCase().includes('alphabet')) {
				carA = getCarName(carA);
				carB = getCarName(carB);
			} else if (sortCriteria.toLowerCase().includes('year')) {
				carA = getCarProductionYear(carA);
				carB = getCarProductionYear(carB);
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

	const handleSearchCars = useCallback(
		debounce(inputValue => {
			setCarsToDisplay(findCars(inputValue));
		}, 500),
		[]
	);

	const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setSearchPhrase(inputValue);
		handleSearchCars(inputValue);
	};

	const handleSelectedValueChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value;
		setSelectedSortValue(selectedValue);
		sortCars(selectedValue);
	};

	useEffect(() => {
		setCarsToDisplay(cars);
	}, []);

	useEffect(() => {
		handleDisplayCars();
	}, [usersFilterPreferences]);

	useEffect(() => {
		handleDisplayCars();
	}, [cars]);

	return (
		<div>
			<SearchWrapper>
				<SearchInput value={searchPhrase} handleInputChange={handleSearchInputChange} />
				<SortSelect
					options={selectOptions}
					defaultOption='sort cars'
					selectedValue={selectedSortValue}
					handleSelectedValueChange={handleSelectedValueChange}
				/>
			</SearchWrapper>
			<FiltersWrapper>
				<ManageFiltersButton onClick={openModal}>manage filters</ManageFiltersButton>
				<Modal isOpen={isModalOpen} closeModal={closeModal}>
					<FilterBox
						title='Choose production year(s):'
						options={usersFilterPreferences.years}
						$isYears
						handleFilter={handleFilterPreferences}
					/>
					<FilterBox title='Choose brand(s):' options={usersFilterPreferences.brands} handleFilter={handleFilterPreferences} />
				</Modal>
			</FiltersWrapper>
			<CarCardsWrapper>
				{carsToDisplay.length > 0 ? (
					carsToDisplay.map(car => (
						<CarCard
							key={car.id}
							car={car}
							isCompared={comparedCars.some(comparedCar => comparedCar.id === car.id)}
							handleCompareStatus={handleCompareStatus}
						/>
					))
				) : (
					<NoCarsInfo>There are no cars to display...</NoCarsInfo>
				)}
			</CarCardsWrapper>
		</div>
	);
};
