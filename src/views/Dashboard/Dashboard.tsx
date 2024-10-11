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

export const Dashboard = () => {
	const [carsToDisplay, setCarsToDisplay] = useState(cars);
	const [usersFilterPreferences, setUsersFilterPreferences] = useState({ brands: [], years: [] });
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isModalOpen, setModalState] = useState(false);

	const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchPhrase(e.target.value);
	};

	const openModal = () => setModalState(true);

	const closeModal = () => setModalState(false);

	const handleActiveClass = e => {
		e.target.classList.toggle('active');
	};

	const handleFilterPreferences = option => {
		// console.log(option);
		// console.log(usersFilterPreferences.brands.indexOf(option));

		if (usersFilterPreferences.brands.includes(option)) {
			const filteredOptions = usersFilterPreferences.brands.filter(brand => brand !== option);
			usersFilterPreferences.brands = filteredOptions;
		} else {
			usersFilterPreferences.brands = [...usersFilterPreferences.brands, option];
		}

		console.log(usersFilterPreferences.brands);
	};

	const handleFilterOptionClick = (e, option) => {
		handleActiveClass(e);
		handleFilterPreferences(option);
	};

	const filterCars = carsToFilter => {
		// setCarsToDisplay(filteredCars)
	};

	useEffect(() => {
		isModalOpen ? document.body.classList.add('preventScroll') : document.body.classList.remove('preventScroll');
	}, [isModalOpen]);

	useEffect(() => {
		filterCars(cars);
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
					<FilterBox title='Choose production year(s):' options={filterYears} $isYears handleFilter={handleFilterOptionClick} />
					<FilterBox title='Choose brand(s):' options={filterBrands} handleFilter={handleFilterOptionClick} />
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
