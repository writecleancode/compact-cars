import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { FilterItem, FilterItems, Wrapper } from './FilterBox.styles';

type FilterBoxProps = {
	title: string;
	options: { value: string | number; isActive: boolean }[];
	$isYears?: boolean;
};

export const FilterBox = ({ title, options, $isYears, handleFilter }: FilterBoxProps) => {
	return (
		<Wrapper>
			<StyledTitle $isFilterTitle>{title}</StyledTitle>
			<FilterItems>
				{options.map(option => (
					<FilterItem
						key={option.value}
						$isYears={$isYears}
						$isActive={option.isActive}
						// data-content={option.value}
						// data-testid={option.value}
						onClick={() => handleFilter(option)}>
						{option.value}
					</FilterItem>
				))}
			</FilterItems>
		</Wrapper>
	);
};
