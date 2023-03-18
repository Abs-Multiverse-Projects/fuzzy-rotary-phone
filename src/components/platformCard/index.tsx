import { FC, useRef } from "react";
import styles from "./style.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import PsIcon from "components/svg/PsIcon";
import SteamIcon from "components/svg/SteamIcon";
import XboxIcon from "components/svg/XboxIcon";
import { Platform } from "types/";

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
		// handle button click here
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
				{variant === "PS5" || variant === "PS4" ? (
					<PsIcon className={logoClasses} />
				) : variant === "steam" ? (
					<SteamIcon className={logoClasses} />
				) : (
					<XboxIcon className={logoClasses} />
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
					variant="text"
					sx={{ background: "white", "&:hover": { color: "white" } }}
					color="primary"
					onClick={handleButtonClick}
				>
					connect
				</Button>
			</FormGroup>
		</Card>
	);
};

export default PlatformCard;
