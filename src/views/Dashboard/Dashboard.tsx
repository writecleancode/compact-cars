import { ChangeEvent, useEffect, useState } from 'react';
import { cars as carsData } from 'src/data/cars';
import { filterBrands, filterYears } from 'src/data/filters';
import { FilterBox } from 'src/components/molecules/FilterBox/FilterBox';
import { SearchInput } from 'src/components/atoms/SearchInput/SearchInput';
import { SortSelect } from 'src/components/atoms/SortSelect';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { selectOptions } from 'src/data/select';
import { CarCardsWrapper, FiltersWrapper, ManageFiltersButton, SearchWrapper, Wrapper } from './Dashboard.styles';
import { Modal } from 'src/components/organisms/Modal/Modal';

// const cars = carsData;
const filterBrandsData = filterBrands.map(option => ({ value: option, isActive: false }));
const filterYearsData = filterYears.map(option => ({ value: option, isActive: false }));

export const Dashboard = () => {
	const [cars, setCars] = useState(carsData);
	const [carsToDisplay, setCarsToDisplay] = useState(cars);
	const [usersFilterPreferences, setUsersFilterPreferences] = useState({ brands: filterBrandsData, years: filterYearsData });
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isModalOpen, setModalState] = useState(false);

	const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchPhrase(e.target.value);
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

	const getCarName = car => `${car.brand} ${car.model}`;

	const getCarProductionYear = car => car.productionStartYear;

	const sortCars = sortCriteria => {
		const sortedCars = cars.toSorted((carA, carB) => {
			if (sortCriteria.toLowerCase().includes('alphabet')) {
				carA = getCarName(carA);
				carB = getCarName(carB);

				if (sortCriteria.toLowerCase().includes('reverse')) {
					[carA, carB] = [carB, carA];
				}
			} else if (sortCriteria.toLowerCase().includes('year')) {
				carA = getCarProductionYear(carA);
				carB = getCarProductionYear(carB);

				if (sortCriteria.toLowerCase().includes('reverse')) {
					[carA, carB] = [carB, carA];
				}
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

	const handleFilterCars = () => {
		let filteredCars = cars;

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

		setCarsToDisplay(filteredCars);
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
				<SortSelect options={selectOptions} handleSort={sortCars} />
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
				{carsToDisplay.map(car => (
					<CarCard key={car.id} car={car} />
				))}
			</CarCardsWrapper>
		</Wrapper>
	);
};
