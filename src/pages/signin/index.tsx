import { FC } from "react";
import styles from "./style.module.scss";
import Layout from "../../components/layout";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const SignIn: FC = () => {
	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		console.log("hello :)");
	};

	return (
		<>
			<Layout>
				<></>
				<Container className={styles.mainContainer}>
					<Box className={styles.outerBox}>
						<Avatar>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>

						<Box component="form" noValidate className={styles.formBox}>
							<div className={styles.formInputs}>
								<TextField
									required
									fullWidth
									id="username"
									label="username"
									name="username"
									autoFocus
								/>
								<TextField
									required
									fullWidth
									name="password"
									label="password"
									type="password"
									id="password"
								/>
							</div>

							<div className={styles.formActions}>
								<Button
									className={styles.signInButton}
									type="submit"
									onClick={(e) => handleSubmit(e)}
									fullWidth
									variant="contained"
								>
									sign in
								</Button>

								<Grid className={styles.supportLinksContainer}>
									<Link
										href="#"
										variant="body2"
										className={styles.forgotPasswordLink}
									>
										Forgot password?
									</Link>
									<Link href="#" variant="body2" className={styles.signUpLink}>
										Don't have an account? Sign Up
									</Link>
								</Grid>
							</div>
						</Box>
					</Box>
				</Container>
			</Layout>
		</>
	);
};

export default SignIn;
