import { OutletContextType } from 'src/types/types';
import { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavContext } from 'src/providers/NavProvider';
import { CarsContext } from 'src/providers/CarsProvider';
import { SuccessNotification } from 'src/components/atoms/SuccessNotification/SuccessNotification';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { Header } from 'src/components/atoms/Header/Header';
import { NavBar } from 'src/components/organisms/NavBar/NavBar';
import { OutletWrapper, Wrapper } from './Root.styles';
import { useNotifications } from 'src/hooks/useNotifications';

export const Root = () => {
	const currentRoute = useLocation();
	const { closeMobileNav } = useContext(NavContext);
	const { cars, setCars, comparedCars } = useContext(CarsContext);
	const { successNotifications } = useNotifications();

	useEffect(() => {
		closeMobileNav();
	}, [currentRoute]);

	return (
		<div>
			<GlobalStyle />
			<Wrapper>
				<Header />
				<NavBar comparedCarsNumber={comparedCars.length} />
				<OutletWrapper>
					<Outlet context={{ cars, setCars, comparedCars } satisfies OutletContextType} />
				</OutletWrapper>
				{successNotifications.length > 0
					? successNotifications.map(id => <SuccessNotification key={id}>✔ Car added to the list</SuccessNotification>)
					: null}
			</Wrapper>
		</div>
	);
};
