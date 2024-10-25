import { useContext } from 'react';
import { CarsContext } from 'src/providers/CarsProvider';
import { FilterBox } from '../FilterBox/FilterBox';

export const FilterBoxBrands = () => {
	const { usersFilterPreferences, handleFilterPreferences } = useContext(CarsContext);

	return <FilterBox title='Choose brand(s):' options={usersFilterPreferences.brands} handleFilter={handleFilterPreferences} />;
};
