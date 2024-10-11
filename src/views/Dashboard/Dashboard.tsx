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
	const [usersFilterPreferences, setUsersFilterPreferences] = useState({ brands: [], years: [] });
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isModalOpen, setModalState] = useState(false);

	const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchPhrase(e.target.value);
	};

	const openModal = () => setModalState(true);

	const closeModal = () => setModalState(false);

	// const handleFilterOptionActiveStatus = (option, optionType) => {
	// 	setUsersFilterPreferences(prevState => ({ ...prevState }));
	// };

	const handleFilterPreferences = (clickedOption, optionType) => {
		if (usersFilterPreferences[optionType].includes(clickedOption)) {
			const clickedOptionIndex = usersFilterPreferences[optionType].indexOf(clickedOption);
			setUsersFilterPreferences(prevState => ({
				...prevState,
				[optionType]: [...prevState[optionType].slice(0, clickedOptionIndex), ...prevState[optionType].slice(clickedOptionIndex + 1)],
			}));
		} else {
			setUsersFilterPreferences(prevState => ({
				...prevState,
				[optionType]: [...prevState[optionType], clickedOption],
			}));
		}
	};

	const handleFilterOptionClick = option => {
		const optionType = typeof option.value === 'number' ? 'years' : 'brands';

		handleFilterPreferences(option.value, optionType);
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
					<FilterBox title='Choose production year(s):' options={filterYearsData} $isYears handleFilter={handleFilterOptionClick} />
					<FilterBox title='Choose brand(s):' options={filterBrandsData} handleFilter={handleFilterOptionClick} />
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
