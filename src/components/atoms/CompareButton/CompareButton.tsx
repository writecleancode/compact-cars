import { CompareButtonProps } from 'src/types/types';
import { HorizontalButtonBar, VerticalButtonBar, Wrapper } from './CompareButton.styles';

export const CompareButton = ({ isCompared, ...props }: CompareButtonProps) => {
	return (
		<Wrapper
			title={isCompared ? 'remove car from comparison' : 'add car to comparison'}
			aria-label={isCompared ? 'remove car from comparison' : 'add car to comparison'}
			{...props}>
			<VerticalButtonBar $isCompared={isCompared} />
			<HorizontalButtonBar $isCompared={isCompared} />
		</Wrapper>
	);
};
