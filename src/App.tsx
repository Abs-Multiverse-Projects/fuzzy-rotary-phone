import { FC, createContext, useState } from "react";
import { AppContext } from "./types";
import Home from "./pages/homepage";
import styles from "./App.module.scss";

export const SignedInContext: React.Context<AppContext> = createContext(
	{} as AppContext
);

const App: FC = () => {
	const [signedIn, setSignedIn] = useState<boolean>(false);

	return (
		<SignedInContext.Provider value={{ signedIn, setSignedIn }}>
			<Home />
		</SignedInContext.Provider>
	);
};

export default App;
