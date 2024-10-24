import { CarInfoBoxProps } from 'src/types/types';
import { StyledInfo, StyledTitle } from './CarInfoBox.styles';

export const CarInfoBox = ({ title, content }: CarInfoBoxProps) => (
	<div>
		<StyledTitle>{title}</StyledTitle>
		<StyledInfo>{content}</StyledInfo>
	</div>
);
