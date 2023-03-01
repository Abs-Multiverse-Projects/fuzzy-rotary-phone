import { FC, useRef } from "react";
import styles from "./style.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { ReactComponent as PlaystationLogo } from "../../assets/playstation-icon.svg";
import { ReactComponent as SteamLogo } from "../../assets/steam-icon.svg";
import { ReactComponent as XboxLogo } from "../../assets/xbox-icon.svg";
import { Platform } from "../../types/";

interface Props {
	variant: Platform;
}

const PlatformCard: FC<Props> = ({ variant }) => {
	const inputRef: React.MutableRefObject<HTMLInputElement> =
		useRef<HTMLInputElement>(null!);
	const logoClasses: string = `${styles.logo}`;
	const bgColor: string =
		variant === "xbox" ? "rgba(16, 124, 16, 0.93)" : "rgba(0, 112, 209, 0.7)";

	const handleButtonClick = () => {
		console.log(inputRef.current.value);
	};

	return (
		<Card
			elevation={8}
			className={styles.card}
			sx={{
				background: bgColor,
				padding: 2,
				width: "300px",
				textAlign: "center",
			}}
		>
			<CardHeader
				title={`Link to ${variant} for platform-specific stats`}
				color={bgColor}
				sx={{
					padding: 0,
					color: "white",
				}}
			/>
			<CardContent className={styles.cardContent}>
				{variant === "ps" ? (
					<PlaystationLogo className={logoClasses} />
				) : variant === "steam" ? (
					<SteamLogo className={logoClasses} />
				) : (
					<XboxLogo className={logoClasses} />
				)}
			</CardContent>

			<FormGroup className={styles.formGroup}>
				<FormControl>
					<TextField
						variant="filled"
						color="secondary"
						inputProps={{ sx: { color: "white" } }}
						InputLabelProps={{ sx: { color: "white" } }}
						inputRef={inputRef}
						label="username"
						fullWidth
					/>
				</FormControl>
				<Button
					variant="outlined"
					color="secondary"
					onClick={handleButtonClick}
				>
					connect
				</Button>
			</FormGroup>
		</Card>
	);
};

export default PlatformCard;
