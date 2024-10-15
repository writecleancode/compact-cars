import { ChangeEvent, useState } from 'react';
import { StyledSelect, Wrapper } from './SortSelect.styles';

type SortSelectProps = {
	options: {
		value: string;
		text: string;
	}[];
};

export const SortSelect = ({ options, handleSort }: SortSelectProps) => {
	const [selectedValue, setSelectedValue] = useState(options[0].value);

	const handleSelectedValueChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value;
		setSelectedValue(selectedValue);
		handleSort(selectedValue);
	};

	return (
		<Wrapper>
			<StyledSelect value={selectedValue} onChange={handleSelectedValueChange}>
				{options.map(({ value, text }) => (
					<option key={value} value={value}>
						{text}
					</option>
				))}
			</StyledSelect>
		</Wrapper>
	);
};
