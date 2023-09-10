import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import { default as HomeIndex } from "../pages/index";
import { default as GetStartedIndex } from "../pages/getStarted/index";
import App from "../App";
import i18next from "../services/i18n";
import { useEffect, useState } from "react";

function getBreadcrumbTitle(namespace: string, key: string): string {
	return i18next.getFixedT(null, namespace)(key);
}


export function Routes() {
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		if (i18next.isInitialized) {
		  setInitialized(true);
		} else {
		  i18next.on("initialized", () => setInitialized(true));
		}
		
		return () => {
		  i18next.off("initialized");
		};
	  }, []);
	if (!initialized) {
		return <></>;
	}
	  
	const routePaths: RouteObject[] = [
		{
			path: '/',
			element: <App />,
		},
		{
			path: '/:lan/',
			index: false,
			element: <App />,
			children: [
				{
					index: true,
					element: <HomeIndex />,
					handle: {
						crumb: () => getBreadcrumbTitle("pages/Index", "Home")
					}
				},
				{
					path: "getStarted",
					element: <GetStartedIndex />,
					handle: {
						crumb: () => getBreadcrumbTitle("pages/getStarted/Index", "Get started!")
					}
				}
			]
		}
	];
	
	const router = createBrowserRouter(routePaths);
	
	return <RouterProvider router={router} />;
} 
