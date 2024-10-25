import { useContext } from 'react';
import { CarsContext } from 'src/providers/CarsProvider';
import { FilterBox } from '../FilterBox/FilterBox';

export const FilterBoxYears = () => {
	const { usersFilterPreferences, handleFilterPreferences } = useContext(CarsContext);

	return (
		<FilterBox title='Choose production year(s):' options={usersFilterPreferences.years} $isYears handleFilter={handleFilterPreferences} />
	);
};
