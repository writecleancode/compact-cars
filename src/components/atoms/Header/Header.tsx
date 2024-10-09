import { ThemeProvider } from 'styled-components';
import { BurgerButton } from '../BurgerButton/BurgerButton';
import { burgerButtonVariables } from 'src/assets/styles/burgerButtonVariables';
import { StyledTitle, Wrapper } from './Header.styles';

export const Header = ({isNavActive, handleMobileNav}) => {
	return (
		<ThemeProvider theme={burgerButtonVariables}>
			<Wrapper>
				<StyledTitle>
					Segment C Hatchback cars <span>(late 1990's, early 2000's)</span>
				</StyledTitle>
				<BurgerButton isNavActive={isNavActive} handleMobileNav={handleMobileNav} />
			</Wrapper>
		</ThemeProvider>
	);
};
