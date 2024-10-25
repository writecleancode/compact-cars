import { FormProps } from 'src/types/types';
import { FormField } from 'src/components/molecules/FormField/FormField';
import { StyledButton } from 'src/components/atoms/StyledButton/StyledButton';
import { Wrapper } from './Form.styles';

export const Form = ({ formValues, handleInputChange, handleSubmitForm }: FormProps) => {
	return (
		<Wrapper onSubmit={handleSubmitForm}>
			<FormField label='Brand' name='brand' id='brand' value={formValues.brand} onChange={handleInputChange} />
			<FormField label='Model' name='model' id='model' value={formValues.model} onChange={handleInputChange} />
			<FormField label='Generation' name='generation' id='generation' value={formValues.generation} onChange={handleInputChange} />
			<FormField
				label='Start of production (year)'
				name='productionStartYear'
				id='productionStartYear'
				type='number'
				value={formValues.productionStartYear}
				onChange={handleInputChange}
			/>
			<FormField
				label='End of production (year)'
				name='productionEndYear'
				id='productionEndYear'
				type='number'
				value={formValues.productionEndYear}
				onChange={handleInputChange}
			/>
			<FormField label='Year of facelift' name='facelift' id='facelift' value={formValues.facelift} onChange={handleInputChange} />
			<FormField label='Photo url' name='imgUrl' id='imgUrl' value={formValues.imgUrl} onChange={handleInputChange} />
			<StyledButton type='submit' $hasExtraMargin>
				Add car
			</StyledButton>
		</Wrapper>
	);
};
