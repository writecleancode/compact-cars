import { SortSelectProps } from 'src/types/types';
import { StyledSelect, Wrapper } from './SortSelect.styles';

export const SortSelect = ({ options, defaultOption, selectedValue, handleSelectedValueChange }: SortSelectProps) => {
	return (
		<Wrapper>
			<StyledSelect value={selectedValue} onChange={handleSelectedValueChange} aria-label='sort cars'>
				{defaultOption ? (
					<option value={''} disabled>
						{defaultOption}
					</option>
				) : null}
				{options.map(({ value, text }) => (
					<option key={value} value={value}>
						{text}
					</option>
				))}
			</StyledSelect>
		</Wrapper>
	);
};
