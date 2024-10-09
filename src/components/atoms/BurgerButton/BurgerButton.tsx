import { useState } from 'react';
import { Wrapper } from './BurgerButton.styles';

export const BurgerButton = () => {
	const [isNavActive, setNavState] = useState(false);

	const handleMobileNav = () => setNavState(prevState => !prevState);

	return (
		<Wrapper $isActive={isNavActive} onClick={handleMobileNav}>
			<span className='burger-line burger-line--top'></span>
			<span className='burger-line burger-line--middle'></span>
			<span className='burger-line burger-line--bottom'></span>
		</Wrapper>
	);
};

/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
