import { FC, createContext, useState } from "react";
import { AppContext } from "types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "pages/homepage";
import SignIn from "pages/signin";
import GamesPage from "pages/games";
import styles from "App.module.scss";

export const SignedInContext: React.Context<AppContext> = createContext(
	{} as AppContext
);

const App: FC = () => {
	const [signedIn, setSignedIn] = useState<boolean>(false);
	const [userName, setUserName] = useState<string>("");

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			// TODO: errorElement: <ErrorPage />
		},
		{
			path: "/signin",
			element: <SignIn />,
		},
		{
			path: "/games",
			element: <GamesPage />,
		},
	]);

	return (
		<SignedInContext.Provider
			value={{ signedIn, setSignedIn, userName, setUserName }}
		>
			<RouterProvider router={router} />
		</SignedInContext.Provider>
	);
};

export default App;
