import './assets/styles/fonts.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NavProvider } from './providers/NavProvider.tsx';
import { CarsProvider } from './providers/CarsProvider.tsx';
import { ModalProvider } from './providers/ModalProvider.tsx';
import { NotificationsProvider } from './hooks/useNotifications.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './views/Root.tsx';
import { Dashboard } from './views/Dashboard/Dashboard.tsx';
import { CarComparison } from './views/CarComparison/CarComparison.tsx';
import { AddCar } from './views/AddCar/AddCar.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '',
				element: <Dashboard />,
			},
			{
				path: 'cars-comparison',
				element: <CarComparison />,
			},
			{
				path: 'add-car',
				element: <AddCar />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<NavProvider>
			<CarsProvider>
				<ModalProvider>
					<NotificationsProvider>
						<RouterProvider router={router} />
					</NotificationsProvider>
				</ModalProvider>
			</CarsProvider>
		</NavProvider>
	</StrictMode>
);
