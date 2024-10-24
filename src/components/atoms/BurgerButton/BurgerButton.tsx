import { useContext } from 'react';
import { NavContext } from 'src/providers/NavProvider';
import { Wrapper } from './BurgerButton.styles';

export const BurgerButton = () => {
	const { isNavActive, handleMobileNav } = useContext(NavContext);

	return (
		<Wrapper $isActive={isNavActive} onClick={handleMobileNav} aria-label={isNavActive ? 'close navigation' : 'open navigation'}>
			<span className='burger-line burger-line--top'></span>
			<span className='burger-line burger-line--middle'></span>
			<span className='burger-line burger-line--bottom'></span>
		</Wrapper>
	);
};
