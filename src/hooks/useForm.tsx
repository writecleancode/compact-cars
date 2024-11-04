import { FormContextType, FormProviderProps, formReducerType } from 'src/types/types';
import { ChangeEvent, createContext, useContext, useReducer } from 'react';

const initialFormValues = {
	brand: 'Daewoo',
	model: 'Nubira',
	generation: 'I (J100)',
	productionStartYear: 1997,
	productionEndYear: 2003,
	facelift: '1999',
	img: {
		small: 'https://www.datocms-assets.com/112049/1729758737-daewoo_nubira_i.jpg',
		medium: 'https://www.datocms-assets.com/112049/1729758737-daewoo_nubira_i.jpg',
	},
};

const reducer: formReducerType = (state, action) => {
	switch (action.type) {
		case 'INPUT CHANGE':
			console.log(action);

			return {
				...state,
				[action.field]: action.value,
			};

		case 'IMG INPUT CHANGE': {
			return {
				...state,
				img: {
					small: action.value,
					medium: action.value,
				},
			};
		}

		case 'CLEAR FORM': {
			return {
				brand: '',
				model: '',
				generation: '',
				productionStartYear: 2000,
				productionEndYear: 2000,
				facelift: '',
				img: {
					small: '',
					medium: '',
				},
			};
		}

		default:
			return state;
	}
};

export const FormContext = createContext<FormContextType>({
	formValues: initialFormValues,
	handleInputChange: () => {},
	clearForm: () => {},
});

export const FormProvider = ({ children }: FormProviderProps) => {
	const [formValues, dispatch] = useReducer(reducer, initialFormValues);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.target.name === 'img'
			? dispatch({ type: 'IMG INPUT CHANGE', value: e.target.value })
			: dispatch({ type: 'INPUT CHANGE', field: e.target.name, value: e.target.value });
	};

	const clearForm = () => dispatch({ type: 'CLEAR FORM' });

	return <FormContext.Provider value={{ formValues, handleInputChange, clearForm }}>{children}</FormContext.Provider>;
};

export const useForm = () => {
	const formContext = useContext(FormContext);

	return formContext;
};
