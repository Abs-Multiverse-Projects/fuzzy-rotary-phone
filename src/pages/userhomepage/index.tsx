import { FC, useContext } from "react";
import styles from "./style.module.scss";
import { Typography } from "@mui/material";
import Layout from "components/layout";
import PlatformCard from "components/platformCard";
import { SignedInContext } from "App";
import { AppContext } from "types";
import { Link } from "react-router-dom";

interface Props {
	error?: boolean;
}

const UserHomePage: FC<Props> = ({ error }) => {
	const { signedIn, setSignedIn, userName, setUserName }: AppContext =
		useContext(SignedInContext);
	const userToDisplay: string = userName ? userName : "that user";
	if (!error) {
		return (
			<Layout>
				<PlatformCard variant="PS5" />
			</Layout>
		);
	} else {
		return (
			<Layout>
				<div className={styles.errorBackground}>
					<Typography variant="h3" color="white" className={styles.text}>
						Sorry, it looks like{" "}
						<span className={userName ? styles.userName : ""}>{userToDisplay}</span> has their
						profile set to private. Either{" "}
						<Link to="/signin" className={styles.signInLink}>
							sign in
						</Link>{" "}
						as
						<span className={userName ? styles.userName : ""}> {userToDisplay}</span> or ask
						them to turn their profile to public.
					</Typography>
				</div>
			</Layout>
		);
	}
};

export default UserHomePage;
