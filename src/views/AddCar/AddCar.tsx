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
	// const [success, setSuccesState] = useState(false);
	const [successStatements, setSuccessStatements] = useState([]);

	const handleInputChange = e => {
		setFormValues(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSuccessMessage = () => {
		const id = uuid();
		setSuccessStatements(prevState => [...prevState, id]);

		const removeSuccessMessage = id => {
			setSuccessStatements(prevState => prevState.filter(el => el !== id));
		};

		setTimeout(() => removeSuccessMessage(id), 2000);
	};

	// const handleSuccessMessage = () => {
	// 	setSuccesState(true);
	// 	setTimeout(() => {
	// 		setSuccesState(false);
	// 	}, 2000);
	// };

	const handleSubmitForm = e => {
		e.preventDefault();
		const newCar = {
			id: uuid(),
			...formValues,
		};
		setCars(prevState => [newCar, ...prevState]);
		handleSuccessMessage();
	};

	return (
		<Wrapper>
			<Form formValues={formValues} handleInputChange={handleInputChange} handleSubmitForm={handleSubmitForm} />
			<PreviewWrapper>
				<PreviewTitle>Live preview</PreviewTitle>
				<CarCard car={formValues} isPreviewCard />
			</PreviewWrapper>
			{successStatements.length > 0 ? successStatements.map(id => <SuccessMessage key={id}>✔ Car added to the list</SuccessMessage>) : null}
			{/* {success ? <SuccessMessage>✔ Car added to the list</SuccessMessage> : null} */}
		</Wrapper>
	);
};
