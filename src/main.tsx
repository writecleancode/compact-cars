import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './views/Root.tsx';
import './assets/styles/fonts.css';
import { Dashboard } from './views/Dashboard/Dashboard.tsx';

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
				element: <div>Cars comparison - Work in progress...</div>,
			},
			{
				path: 'add-car',
				element: <div>Add car - Work in progress...</div>,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
