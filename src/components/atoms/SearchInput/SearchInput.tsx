import { ChangeEvent } from 'react';
import { SearchIcon } from 'src/assets/icons/SearchIcon';
import { IconBox, Input, Wrapper } from './SearchInput.styles';

type SearchInputProps = {
	value: string;
	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({ value, handleInputChange }: SearchInputProps) => {
	return (
		<Wrapper>
			<Input name='search' id='search' placeholder='find car' value={value} onChange={handleInputChange} />
			<IconBox htmlFor='search' aria-label='find car by name'>
				<SearchIcon />
			</IconBox>
		</Wrapper>
	);
};
