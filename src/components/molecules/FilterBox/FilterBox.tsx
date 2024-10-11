import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { FilterItem, FilterItems, Wrapper } from './FilterBox.styles';

type FilterBoxProps = {
	title: string;
	options: (string | number)[];
	$isYears?: boolean;
};

export const FilterBox = ({ title, options, $isYears, handleFilter }: FilterBoxProps) => {
	return (
		<Wrapper>
			<StyledTitle $isFilterTitle>{title}</StyledTitle>
			<FilterItems>
				{options.map(option => (
					<FilterItem key={option} $isYears={$isYears} data-content={option} data-testid={option} onClick={(e) => handleFilter(e, option)}>
						{option}
					</FilterItem>
				))}
			</FilterItems>
		</Wrapper>
	);
};
