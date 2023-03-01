import { FC, useState } from "react";
import styles from "./style.module.scss";
import Navbar from "../../components/navbar";
import Layout from "../../components/layout";
import PlatformCard from "../../components/platformCard";
import Grid from "@mui/material/Grid";

const Home: FC = () => {
	const [signedIn, setSignedIn] = useState<boolean>(false);
	return (
		<>
			<Layout className={styles.container}>
				{/* no idea why but this fixes typescript error of assigning :Element to :ReactNode[] */}
				<></>
				<Grid className={styles.grid} mt="4rem">
					<PlatformCard variant="xbox" />
					<PlatformCard variant="ps" />
					<PlatformCard variant="steam" />
				</Grid>
			</Layout>
		</>
	);
};

export default Home;
