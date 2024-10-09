import { StyledInfo, StyledTitle } from './CarInfoBox.styles';

type CarInfoBoxProps = {
	title: string;
	content: string;
};

export const CarInfoBox = ({ title, content }: CarInfoBoxProps) => (
	<div>
		<StyledTitle>{title}</StyledTitle>
		<StyledInfo>{content}</StyledInfo>
	</div>
);
