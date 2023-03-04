import { FC, useState, useContext } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import BurgerMenuIcon from "../svg/BurgerMenuIcon";
import NavItem from "../navItem";
import Drawer from "@mui/material/Drawer";
import { SignedInContext } from "../../App";

const Navbar: FC = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const { signedIn, setSignedIn } = useContext(SignedInContext);

	const handleClick = () => {
		setShowMenu(true);
	};

	return (
		<div className={styles.mainContainer}>
			<BurgerMenuIcon className={styles.svg} onClick={handleClick} />
			<Drawer
				PaperProps={{
					sx: { background: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(4px)" },
				}}
				variant="temporary"
				slotProps={{ backdrop: { sx: { backdropFilter: "blur(4px)" } } }}
				open={showMenu}
				onClose={() => setShowMenu(false)}
			>
				<div className={styles.navMenu}>
					<NavItem linkTo="/" text="Home" />
					{signedIn ? (
						<NavItem linkTo="/games" text="My games" />
					) : (
						<NavItem linkTo="/signin" text="Sign in" />
					)}
					<NavItem linkTo="/" text="Leaderboard" />
					<NavItem linkTo="/" text="Recommended games" />
				</div>
			</Drawer>
		</div>
	);
};

export default Navbar;
