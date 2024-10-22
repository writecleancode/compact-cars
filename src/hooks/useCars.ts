import { useOutletContext } from 'react-router-dom';
import { OutletContextType } from 'src/types/types';

export const useCars = () => {
	return useOutletContext<OutletContextType>();
};
