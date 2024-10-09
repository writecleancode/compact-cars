import { ChangeEvent, useState } from 'react';
import { cars as carsData } from 'src/data/cars';
import { SearchInput } from 'src/components/atoms/SearchInput/SearchInput';
import { SortSelect } from 'src/components/atoms/SortSelect';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { selectOptions } from 'src/data/select';
import { CarCardsWrapper, SearchWrapper, Wrapper } from './Dashboard.styles';

export const Dashboard = () => {
	const [searchPhrase, setSearchPhrase] = useState('');

	const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchPhrase(e.target.value);
	};

	return (
		<Wrapper>
			<SearchWrapper>
				<SearchInput value={searchPhrase} handleInputChange={handleSearchInputChange} />
				<SortSelect options={selectOptions} />
			</SearchWrapper>
			<CarCardsWrapper>
				{carsData.map(car => (
					<CarCard key={car.id} car={car} />
				))}
			</CarCardsWrapper>
		</Wrapper>
	);
};
