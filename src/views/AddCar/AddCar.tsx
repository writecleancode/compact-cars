import { useCallback, useEffect, useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Form } from 'src/components/organisms/Form/Form';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { PreviewTitle, PreviewWrapper, Wrapper } from './AddCar.styles';
import { SuccessMessage } from 'src/components/atoms/SuccessMessage/SuccessMessage';

const initialFormValues = {
	brand: 'Daewoo',
	model: 'Nubira',
	generation: 'I (J100)',
	productionStartYear: 1997,
	productionEndYear: 2003,
	facelift: '1999',
	imgUrl: 'https://www.datocms-assets.com/112049/1699699918-daewoo_nubira_i.jpg',
};

export const AddCar = () => {
	const { setCars } = useOutletContext();
	const [formValues, setFormValues] = useState(initialFormValues);
	const [successNotifications, setSuccessNotifications] = useState([]);

	const handleInputChange = e => {
		setFormValues(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSuccessNotifications = () => {
		const id = uuid();
		setSuccessNotifications(prevState => [...prevState, id]);

		const removeSuccessNotification = id => {
			setSuccessNotifications(prevState => prevState.filter(el => el !== id));
		};

		setTimeout(() => removeSuccessNotification(id), 2000);
	};

	const handleSubmitForm = e => {
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
				<CarCard car={formValues} isPreviewCard />
			</PreviewWrapper>
			{successNotifications.length > 0
				? successNotifications.map(id => <SuccessMessage key={id}>✔ Car added to the list</SuccessMessage>)
				: null}
			{/* {success ? <SuccessMessage>✔ Car added to the list</SuccessMessage> : null} */}
		</Wrapper>
	);
};
