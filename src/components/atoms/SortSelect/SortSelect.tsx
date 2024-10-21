import { StyledSelect, Wrapper } from './SortSelect.styles';

type SortSelectProps = {
	options: {
		value: string;
		text: string;
	}[];
};

export const SortSelect = ({ options, defaultOption, selectedValue, handleSelectedValueChange }: SortSelectProps) => {
	return (
		<Wrapper>
			<StyledSelect value={selectedValue} onChange={handleSelectedValueChange} aria-label='sort cars'>
				<option value={''} disabled>
					{defaultOption}
				</option>
				{options.map(({ value, text }) => (
					<option key={value} value={value}>
						{text}
					</option>
				))}
			</StyledSelect>
		</Wrapper>
	);
};
