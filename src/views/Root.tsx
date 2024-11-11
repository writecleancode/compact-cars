import { OutletContextType } from 'src/types/types';
import { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCar } from 'src/store';
import { NavContext } from 'src/providers/NavProvider';
import { CarsContext } from 'src/providers/CarsProvider';
import { useNotifications } from 'src/hooks/useNotifications';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { Header } from 'src/components/atoms/Header/Header';
import { NavBar } from 'src/components/organisms/NavBar/NavBar';
import { FiltersManagement } from 'src/components/organisms/FiltersManagement/FiltersManagement';
import { SuccessNotification } from 'src/components/atoms/SuccessNotification/SuccessNotification';
import { OutletWrapper, Wrapper } from './Root.styles';

export const Root = () => {
	const currentRoute = useLocation();
	const dispatch = useDispatch();
	const { closeMobileNav } = useContext(NavContext);
	const { cars, comparedCars } = useContext(CarsContext);
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
				<FiltersManagement />
				<OutletWrapper>
					<Outlet context={{ cars, comparedCars, dispatch, addCar } satisfies OutletContextType} />
				</OutletWrapper>
				{successNotifications.length > 0
					? successNotifications.map(id => <SuccessNotification key={id}>✔ Car added to the list</SuccessNotification>)
					: null}
			</Wrapper>
		</div>
	);
};
