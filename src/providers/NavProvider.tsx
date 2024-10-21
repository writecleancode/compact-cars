import { NavProviderProps } from 'src/types/types';
import { createContext, useEffect, useState } from 'react';

const initialNavState = false;

export const NavContext = createContext({
	isNavActive: initialNavState,
	handleMobileNav: () => {},
	closeMobileNav: () => {},
});

export const NavProvider = ({ children }: NavProviderProps) => {
	const [isNavActive, setNavState] = useState(initialNavState);

	const handleMobileNav = () => setNavState(prevState => !prevState);

	const closeMobileNav = () => setNavState(false);

    useEffect(() => {
		isNavActive ? document.body.classList.add('preventScroll') : document.body.classList.remove('preventScroll');
	}, [isNavActive]);

	return <NavContext.Provider value={{ isNavActive, handleMobileNav, closeMobileNav }}>{children}</NavContext.Provider>;
};
