import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Index from "../pages";
import App from "../App";

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/:lan/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Index />
			},
			{
				path: "index",
				element: <Index />
			}
		]

	}
]);

export function Routes() {
	return <RouterProvider router={router} />;
} 
