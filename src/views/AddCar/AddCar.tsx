import { ChangeEvent, FormEvent, useState } from 'react';
import { useCars } from 'src/hooks/useCars';
import { v4 as uuid } from 'uuid';
import { Form } from 'src/components/organisms/Form/Form';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { SuccessNotification } from 'src/components/atoms/SuccessNotification/SuccessNotification';
import { PreviewTitle, PreviewWrapper, Wrapper } from './AddCar.styles';
import { useNotifications } from 'src/hooks/useNotifications';

const initialFormValues = {
	brand: 'Daewoo',
	model: 'Nubira',
	generation: 'I (J100)',
	productionStartYear: 1997,
	productionEndYear: 2003,
	facelift: '1999',
	imgUrl: 'https://www.datocms-assets.com/112049/1729758737-daewoo_nubira_i.jpg',
};

export const AddCar = () => {
	const { setCars } = useCars();
	const [formValues, setFormValues] = useState(initialFormValues);
	const { successNotifications, handleSuccessNotifications } = useNotifications();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormValues(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault();
		const newCar = {
			id: uuid(),
			...formValues,
		};
		setCars(prevState => [newCar, ...prevState]);
		handleSuccessNotifications();
	};

	return (
		<Wrapper>
			<Form formValues={formValues} handleInputChange={handleInputChange} handleSubmitForm={handleSubmitForm} />
			<PreviewWrapper>
				<PreviewTitle>Live preview</PreviewTitle>
				<CarCard car={formValues} />
			</PreviewWrapper>
			{successNotifications.length > 0
				? successNotifications.map(id => <SuccessNotification key={id}>✔ Car added to the list</SuccessNotification>)
				: null}
		</Wrapper>
	);
};
