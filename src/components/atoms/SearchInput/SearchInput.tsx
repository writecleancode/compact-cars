import { SearchInputProps } from 'src/types/types';
import { SearchIcon } from 'src/assets/icons/SearchIcon';
import { IconBox, Input, Wrapper } from './SearchInput.styles';

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
