import './assets/styles/fonts.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
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
		<RouterProvider router={router} />
	</StrictMode>
);
