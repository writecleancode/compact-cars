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

const cars = carsData;
const filterBrandsData = filterBrands.map(option => ({ value: option, isActive: false }));
const filterYearsData = filterYears.map(option => ({ value: option, isActive: false }));

export const Dashboard = () => {
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

	const filterCars = () => {
		let filteredCars = (() => {
			if (usersFilterPreferences.brands.some(option => option.isActive)) {
				const filteredByBrand = [];
				usersFilterPreferences.brands.forEach(option => {
					if (option.isActive) {
						cars.forEach(car => car.brand === option.value && filteredByBrand.push(car));
					}
				});
				return filteredByBrand;
			} else {
				return cars;
			}
		})();

		filteredCars = (() => {
			if (usersFilterPreferences.years.some(option => option.isActive)) {
				usersFilterPreferences.years.forEach(option => {
					if (option.isActive) {
						filteredCars = filteredCars.filter(car => {
							if (option.value >= car.productionStartYear && option.value <= car.productionEndYear) {
								return car;
							}
						});
					} else {
						return;
					}
				});

				return filteredCars;
			} else {
				return filteredCars;
			}
		})();

		setCarsToDisplay(filteredCars);
	};

	useEffect(() => {
		isModalOpen ? document.body.classList.add('preventScroll') : document.body.classList.remove('preventScroll');
	}, [isModalOpen]);

	useEffect(() => {
		filterCars();
	}, [usersFilterPreferences]);

	return (
		<Wrapper>
			<SearchWrapper>
				<SearchInput value={searchPhrase} handleInputChange={handleSearchInputChange} />
				<SortSelect options={selectOptions} />
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
