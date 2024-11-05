import { FormEvent } from 'react';
import { useCars } from 'src/hooks/useCars';
import { useForm } from 'src/hooks/useForm';
import { useNotifications } from 'src/hooks/useNotifications';
import { v4 as uuid } from 'uuid';
import { Form } from 'src/components/organisms/Form/Form';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { PreviewTitle, PreviewWrapper, Wrapper } from './AddCar.styles';

export const AddCar = () => {
	const { dispatch, addCar } = useCars();
	const { formValues, handleInputChange, clearForm } = useForm();
	const { handleSuccessNotifications } = useNotifications();

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault();
		const newCar = {
			id: uuid(),
			...formValues,
		};
		dispatch(addCar({ newCar: newCar }));
		clearForm();
		handleSuccessNotifications();
	};

	return (
		<Wrapper>
			<Form formValues={formValues} handleInputChange={handleInputChange} handleSubmitForm={handleSubmitForm} />
			<PreviewWrapper>
				<PreviewTitle>Live preview</PreviewTitle>
				<CarCard car={formValues} />
			</PreviewWrapper>
		</Wrapper>
	);
};
