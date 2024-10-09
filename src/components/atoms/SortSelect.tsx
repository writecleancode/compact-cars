import { ChangeEvent, useState } from 'react';
import { StyledSelect, Wrapper } from './SortSelect.styles';

type SortSelectProps = {
	options: {
		value: string;
		text: string;
	}[];
};

export const SortSelect = ({ options }: SortSelectProps) => {
	const [selectedValue, setSelectedValue] = useState(options[0].value);

	const handleSelectedValue = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(e.target.value);
	};

	return (
		<Wrapper>
			<StyledSelect value={selectedValue} onChange={handleSelectedValue}>
				{options.map(({ value, text }) => (
					<option key={value} value={value}>
						{text}
					</option>
				))}
			</StyledSelect>
		</Wrapper>
	);
};
