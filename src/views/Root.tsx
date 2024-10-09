import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { MainTemplate } from 'src/components/templates/MainTemplate/MainTemplate';
import { Header } from 'src/components/atoms/Header/Header';
import { NavBar } from 'src/components/organisms/NavBar/NavBar';

export const Root = () => {
	const [isNavActive, setNavState] = useState(false);

	const handleMobileNav = () => setNavState(prevState => !prevState);

	const closeMobileNav = () => setNavState(false);

	return (
		<div>
			<GlobalStyle />
			<MainTemplate>
				<Header isNavActive={isNavActive} handleMobileNav={handleMobileNav} />
				<NavBar isNavActive={isNavActive} closeMobileNav={closeMobileNav} />
			</MainTemplate>
			<Outlet />
		</div>
	);
};
