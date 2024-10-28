import { FormContextType, FormProviderProps } from 'src/types/types';
import { ChangeEvent, createContext, useContext, useState } from 'react';

const initialFormValues = {
	brand: 'Daewoo',
	model: 'Nubira',
	generation: 'I (J100)',
	productionStartYear: 1997,
	productionEndYear: 2003,
	facelift: '1999',
	imgUrl: 'https://www.datocms-assets.com/112049/1729758737-daewoo_nubira_i.jpg',
};

export const FormContext = createContext<FormContextType>({
	formValues: initialFormValues,
	handleInputChange: () => {},
	clearForm: () => {},
});

export const FormProvider = ({ children }: FormProviderProps) => {
	const [formValues, setFormValues] = useState(initialFormValues);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormValues(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const clearForm = () => {
		setFormValues({
			brand: '',
			model: '',
			generation: '',
			productionStartYear: 2000,
			productionEndYear: 2000,
			facelift: '',
			imgUrl: '',
		});
	};

	return <FormContext.Provider value={{ formValues, handleInputChange, clearForm }}>{children}</FormContext.Provider>;
};

export const useForm = () => {
	const formContext = useContext(FormContext);

	return formContext;
};
