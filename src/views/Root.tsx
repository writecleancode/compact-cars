import { comparedCars, OutletContextType } from 'src/types/types';
import { cars as carsData } from 'src/data/cars';
import { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavContext } from 'src/providers/NavProvider';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { Header } from 'src/components/atoms/Header/Header';
import { NavBar } from 'src/components/organisms/NavBar/NavBar';

export const Root = () => {
	const currentRoute = useLocation();
	const { closeMobileNav } = useContext(NavContext);
	const [cars, setCars] = useState(carsData);
	const [comparedCars, setComparedCars] = useState<comparedCars>([]);

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
			<Outlet context={{ cars, setCars, comparedCars, setComparedCars } satisfies OutletContextType} />
		</div>
	);
};
