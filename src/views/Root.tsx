import { OutletContextType } from 'src/types/types';
import { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavContext } from 'src/providers/NavProvider';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { Header } from 'src/components/atoms/Header/Header';
import { NavBar } from 'src/components/organisms/NavBar/NavBar';
import { CarsContext } from 'src/providers/CarsProvider';

export const Root = () => {
	const currentRoute = useLocation();
	const { closeMobileNav } = useContext(NavContext);
	const { cars, setCars, comparedCars } = useContext(CarsContext);

	useEffect(() => {
		closeMobileNav();
	}, [currentRoute]);

	return (
		<div>
			<GlobalStyle />
			<div>
				<Header />
				<NavBar comparedCarsNumber={comparedCars.length} />
			</div>
			<Outlet context={{ cars, setCars, comparedCars } satisfies OutletContextType} />
		</div>
	);
};
