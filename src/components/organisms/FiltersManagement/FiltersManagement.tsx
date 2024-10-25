import { FilterBoxBrands } from 'src/components/molecules/FilterBoxBrands/FilterBoxBrands';
import { FilterBoxYears } from 'src/components/molecules/FilterBoxYears/FilterBoxYears';
import { Wrapper } from './FiltersManagement.styles';

export const FiltersManagement = () => {
	return (
		<Wrapper>
			<FilterBoxYears />
			<FilterBoxBrands />
		</Wrapper>
	);
};
