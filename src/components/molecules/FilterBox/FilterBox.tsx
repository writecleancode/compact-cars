import { FilterBoxProps } from 'src/types/types';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { FilterItem, FilterItems, Wrapper } from './FilterBox.styles';

export const FilterBox = ({ title, options, $isYears, handleFilter }: FilterBoxProps) => {
	return (
		<Wrapper>
			<StyledTitle $isFilterTitle>{title}</StyledTitle>
			<FilterItems>
				{options.map(option => (
					<FilterItem key={option.value} $isYears={$isYears} $isActive={option.isActive} onClick={() => handleFilter(option.value)}>
						{option.value}
					</FilterItem>
				))}
			</FilterItems>
		</Wrapper>
	);
};
