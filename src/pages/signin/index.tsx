import { FC, useContext, useRef } from "react";
import styles from "./style.module.scss";
import Layout from "components/layout";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { lime } from "@mui/material/colors";
import { AppContext } from "types";
import { SignedInContext } from "App";
import { NavigateFunction, useNavigate } from "react-router";

const SignIn: FC = () => {
	const { signedIn, setSignedIn, userName, setUserName }: AppContext =
		useContext(SignedInContext);

	const inputRef = useRef<HTMLInputElement>(null);

	const navigate: NavigateFunction = useNavigate();

	const handleInputChange = () => {
		if (inputRef?.current?.value) setUserName(inputRef.current.value);
	};

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		navigate(`/${userName}/home`);
	};

	return (
		<>
			<Layout>
				<Container className={styles.mainContainer}>
					<Box className={styles.outerBox}>
						<Avatar sx={{ bgcolor: lime.A200 }}>
							<LockOutlinedIcon htmlColor="black" />
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
									inputRef={inputRef}
									inputProps={{ onChange: handleInputChange }}
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
