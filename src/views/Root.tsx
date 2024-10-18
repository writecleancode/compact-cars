import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { MainTemplate } from 'src/components/templates/MainTemplate/MainTemplate';
import { Header } from 'src/components/atoms/Header/Header';
import { NavBar } from 'src/components/organisms/NavBar/NavBar';
import { cars as carsData } from 'src/data/cars';

export const Root = () => {
	const currentRoute = useLocation();
	const [cars, setCars] = useState(carsData);
	const [comparedCars, setComparedCars] = useState([]);
	const [isNavActive, setNavState] = useState(false);

	const handleMobileNav = () => setNavState(prevState => !prevState);

	const closeMobileNav = () => setNavState(false);

	useEffect(() => {
		closeMobileNav();
	}, [currentRoute]);

	useEffect(() => {
		isNavActive ? document.body.classList.add('preventScroll') : document.body.classList.remove('preventScroll');
	}, [isNavActive]);

	return (
		<div>
			<GlobalStyle />
			<MainTemplate>
				<Header isNavActive={isNavActive} handleMobileNav={handleMobileNav} />
				<NavBar isNavActive={isNavActive} closeMobileNav={closeMobileNav} />
			</MainTemplate>
			<Outlet context={{ cars, setCars, comparedCars, setComparedCars }} />
		</div>
	);
};
