import { ChangeEvent, useState } from 'react';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { CarCardsWrapper, SearchWrapper, Wrapper } from './Dashboard.styles';
import { SearchInput } from 'src/components/atoms/SearchInput/SearchInput';
import { SortSelect } from 'src/components/atoms/SortSelect';
import { selectOptions } from 'src/data/select';

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
				<CarCard />
				<CarCard />
				<CarCard />
				<CarCard />
				<CarCard />
			</CarCardsWrapper>
		</Wrapper>
	);
};
