import { BurgerButton } from '../BurgerButton/BurgerButton';
import { StyledTitle, Wrapper } from './Header.styles';

export const Header = () => {
	return (
		<Wrapper>
			<StyledTitle>
				Segment C Hatchback cars <span>(late 1990's, early 2000's)</span>
			</StyledTitle>
			<BurgerButton />
		</Wrapper>
	);
};
