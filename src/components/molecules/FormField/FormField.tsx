import { FormFieldProps } from 'src/types/types';
import { StyledLabel } from 'src/components/atoms/StyledLabel/StylesLabel';
import { StyledInput } from 'src/components/atoms/StyledInput/StyledInput';
import { Wrapper } from './FormFIeld.styles';

export const FormField = ({ label, name, id, type = 'text', value, onChange }: FormFieldProps) => {
	return (
		<Wrapper>
			<StyledLabel htmlFor={name}>{label}</StyledLabel>
			<StyledInput name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} />
		</Wrapper>
	);
};
