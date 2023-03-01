import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SignIn from "./pages/signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		// TODO: errorElement: <ErrorPage />
	},
	{
		path: "/signin",
		element: <SignIn />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
