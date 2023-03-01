import { FC, useState } from "react";
import styles from "./style.module.scss";
import Navbar from "../../components/navbar";
import PlatformCard from "../../components/platformCard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Home: FC = () => {
	const [signedIn, setSignedIn] = useState<boolean>(false);
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<h1 className={styles.mainTitle}>Central Gaming Intelligence</h1>

				<Grid className={styles.grid} mt='4rem'>
					<PlatformCard variant="xbox" />
					<PlatformCard variant="ps" />
					<PlatformCard variant="steam" />
				</Grid>
			</div>
		</>
	);
};

export default Home;
