import { FC } from "react";
import styles from "./style.module.scss";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Platform } from "types";

interface Props {
	imgSrc: string;
	title: string;
	platform: Platform;
}

const GameCard: FC<Props> = ({ imgSrc, title, platform }) => {
	const borderColor: string =
		platform === "xbox" ? "rgb(16, 124, 16)" : "rgb(0, 112, 209)";

	return (
		<Box className={styles.gameCardBox}>
			<Card raised className={styles.card}>
				<CardActionArea className={styles.cardActionArea}>
					<CardMedia component="img" image={imgSrc} alt={title} />
				</CardActionArea>
				<div
					style={{ border: `2px solid ${borderColor}` }}
					className={styles.imageOverlay}
				>
					{platform.toUpperCase()}
				</div>
			</Card>
			<Typography className={styles.cardTitle} p={1} data-text={title.replace("Trophies", "")}>
				{title.replace("Trophies", "")}
			</Typography>
		</Box>
	);
};

export default GameCard;
