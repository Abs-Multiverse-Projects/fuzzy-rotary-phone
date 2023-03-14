import { FC, useContext, useEffect, useState } from "react";
import { SignedInContext } from "App";
import { AppContext } from "types";
import styles from "./style.module.scss";
import Layout from "components/layout";
import GameCard from "components/gameCard";
import Container from "@mui/material/Container";
import PsnApi from "api/psn";
import { TrophyTitle } from "api/psn/types";

const GamesPage: FC = () => {
	const { signedIn, setSignedIn, userName, setUserName }: AppContext = useContext(SignedInContext);
	const [titlesList, setTitlesList] = useState<TrophyTitle[]>();

	const initialiseUser = async (username: string) => {
		const initAuth = await PsnApi.authenticate(import.meta.env.VITE_NPSSO);
		const psnApi: PsnApi = initAuth ? new PsnApi(initAuth) : ({} as PsnApi); // if theAuth is falsy/null, thing will be an empty authObject
		const user = await psnApi.getProfileFromUserName(username);
		const userTitles = await psnApi.getTitles(user.profile.profile.accountId);
		console.log(userTitles);
		let titles: TrophyTitle[] = [];
		userTitles.titles.trophyTitles.forEach((title) => {
			titles.push(title);
		});
		setTitlesList(titles);
	};

	useEffect(() => {
		initialiseUser(userName);
		console.log(titlesList);
	}, [titlesList?.length]);

	return (
		<Layout>
			<Container className={styles.gamesContainer}>
				{titlesList?.map((title) => {
					return (
						<GameCard
							imgSrc={title.trophyTitleIconUrl}
							title={title.trophyTitleName}
							platform={title.trophyTitlePlatform}
						/>
					);
				})}
			</Container>
		</Layout>
	);
};

export default GamesPage;
