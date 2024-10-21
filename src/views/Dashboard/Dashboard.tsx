import { ChangeEvent, useEffect, useState } from 'react';
import { filterBrands, filterYears } from 'src/data/filters';
import { FilterBox } from 'src/components/molecules/FilterBox/FilterBox';
import { SearchInput } from 'src/components/atoms/SearchInput/SearchInput';
import { SortSelect } from 'src/components/atoms/SortSelect/SortSelect';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { selectOptions } from 'src/data/select';
import { CarCardsWrapper, FiltersWrapper, ManageFiltersButton, NoCarsInfo, SearchWrapper, Wrapper } from './Dashboard.styles';
import { Modal } from 'src/components/organisms/Modal/Modal';
import { useOutletContext } from 'react-router-dom';

const filterBrandsData = filterBrands.map(option => ({ value: option, isActive: false }));
const filterYearsData = filterYears.map(option => ({ value: option, isActive: false }));

let filteredCars = [];

const getCarName = car => `${car.brand} ${car.model}`;

const getCarProductionYear = car => car.productionStartYear;

export const Dashboard = () => {
	const { cars, setCars, comparedCars, setComparedCars } = useOutletContext();
	const [carsToDisplay, setCarsToDisplay] = useState(cars);
	const [selectedSortValue, setSelectedSortValue] = useState('');
	const [usersFilterPreferences, setUsersFilterPreferences] = useState({ brands: filterBrandsData, years: filterYearsData });
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isModalOpen, setModalState] = useState(false);

	const handleSearchCars = (inputValue = searchPhrase) => {
		if (cars === filteredCars) {
			const matchingCars = cars.filter(car => `${car.brand} ${car.model}`.toLowerCase().includes(inputValue.toLowerCase()));
			setCarsToDisplay(matchingCars);
		} else {
			const matchingCars = filteredCars.filter(car => `${car.brand} ${car.model}`.toLowerCase().includes(inputValue.toLowerCase()));
			setCarsToDisplay(matchingCars);
		}
	};

	const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setSearchPhrase(inputValue);
		handleSearchCars(inputValue);
	};

	const openModal = () => setModalState(true);

	const closeModal = () => setModalState(false);

	const handleFilterOptionActiveStatus = clickedOption => {
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
	// const handleFilterPreferences = clickedOption => {};   // - alternative name for funcion above

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

	const handleSelectedValueChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value;
		setSelectedSortValue(selectedValue);
		sortCars(selectedValue);
	};

	const handleFilterCars = () => {
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

		handleSearchCars();
	};

	const handleCompareStatus = clickedCarId => {
		if (comparedCars.some(car => car.id === clickedCarId)) {
			const carIndex = comparedCars.map(car => car.id).indexOf(clickedCarId);
			setComparedCars(prevState => [...prevState.slice(0, carIndex), ...prevState.slice(carIndex + 1)]);
		} else {
			const clickedCar = cars.find(car => car.id === clickedCarId);
			setComparedCars(prevState => [...prevState, clickedCar]);
		}
	};

	const handleRemoveCar = clickedId => {
		const filteredCars = cars.filter(car => car.id !== clickedId);
		setCars(filteredCars);
	};

	useEffect(() => {
		isModalOpen ? document.body.classList.add('preventScroll') : document.body.classList.remove('preventScroll');
	}, [isModalOpen]);

	useEffect(() => {
		handleFilterCars();
	}, [usersFilterPreferences]);

	useEffect(() => {
		handleFilterCars();
	}, [cars]);

	return (
		<Wrapper>
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
						handleFilter={handleFilterOptionActiveStatus}
					/>
					<FilterBox title='Choose brand(s):' options={usersFilterPreferences.brands} handleFilter={handleFilterOptionActiveStatus} />
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
							handleRemoveCar={handleRemoveCar}
						/>
					))
				) : (
					<NoCarsInfo>There are no cars to display...</NoCarsInfo>
				)}
			</CarCardsWrapper>
		</Wrapper>
	);
};
