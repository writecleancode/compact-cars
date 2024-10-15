import { HorizontalButtonBar, VerticalButtonBar, Wrapper } from './CompareButton.styles';

export const CompareButton = ({ isCompared }) => {
	return (
		<Wrapper>
			<VerticalButtonBar $isCompared={isCompared} />
			<HorizontalButtonBar $isCompared={isCompared} />
		</Wrapper>
	);
};
