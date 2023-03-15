import { FC, createContext, useState, useEffect } from "react";
import { AppContext } from "types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "pages/homepage";
import SignIn from "pages/signin";
import GamesPage from "pages/games";
import styles from "App.module.scss";
import UserHomePage from "pages/userhomepage";

export const SignedInContext: React.Context<AppContext> = createContext(
	{} as AppContext
);
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
	{
		path: `/:username/home`,
		element: <UserHomePage />,
	},
]);

const App: FC = () => {
	const [signedIn, setSignedIn] = useState<boolean>(false);
	const [userName, setUserName] = useState<string>("");

	return (
		<SignedInContext.Provider value={{ signedIn, setSignedIn }}>
			<RouterProvider router={router} />
		</SignedInContext.Provider>
	);
};

export default App;
