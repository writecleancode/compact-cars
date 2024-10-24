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
import { CarCardsWrapper, ControlsWrapper, FiltersWrapper, ManageFiltersButton, NoCarsInfo, SearchWrapper } from './Dashboard.styles';
import { ModalContext } from 'src/providers/ModalProvider';
import { LoadingAnimation } from 'src/components/atoms/LoadingAnimation/LoadingAnimation';

export const Dashboard = () => {
	const [isLoading, setLoadingState] = useState(true);
	const { cars, comparedCars } = useCars();
	const { carsToDisplay, setCarsToDisplay, usersFilterPreferences, handleFilterPreferences, sortCars, findCars, filterCars } =
		useContext(CarsContext);
	const { isModalOpen, openModal, closeModal } = useContext(ModalContext);
	const [selectedSortValue, setSelectedSortValue] = useState('');
	const [searchPhrase, setSearchPhrase] = useState('');

	const handleDisplayCars = () => {
		let matchingCars;

		matchingCars = filterCars();
		matchingCars = findCars(searchPhrase);

		setCarsToDisplay(matchingCars);
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
		setLoadingState(false);
	}, []);

	useEffect(() => {
		handleDisplayCars();
	}, [usersFilterPreferences]);

	useEffect(() => {
		handleDisplayCars();
	}, [cars]);

	return (
		<div>
			<ControlsWrapper>
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
				</FiltersWrapper>
			</ControlsWrapper>
			{isLoading ? (
				<LoadingAnimation />
			) : (
				<CarCardsWrapper>
					{carsToDisplay.length > 0 ? (
						carsToDisplay.map(car => (
							<CarCard key={car.id} car={car} isCompared={comparedCars.some(comparedCar => comparedCar.id === car.id)} />
						))
					) : (
						<NoCarsInfo>There are no cars to display...</NoCarsInfo>
					)}
				</CarCardsWrapper>
			)}

			<Modal isOpen={isModalOpen} closeModal={closeModal}>
				<FilterBox
					title='Choose production year(s):'
					options={usersFilterPreferences.years}
					$isYears
					handleFilter={handleFilterPreferences}
				/>
				<FilterBox title='Choose brand(s):' options={usersFilterPreferences.brands} handleFilter={handleFilterPreferences} />
			</Modal>
		</div>
	);
};
