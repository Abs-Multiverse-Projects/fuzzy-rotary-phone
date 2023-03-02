import { FC, useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import BurgerMenuIcon from "../svg/BurgerMenuIcon";
import Drawer from "@mui/material/Drawer";

const Navbar: FC = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

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
					<Link to="/signin" className={styles.menuItem}>
						Sign in
					</Link>
					<a href="#" className={styles.menuItem}>
						Leaderboard
					</a>
					<a href="#" className={styles.menuItem}>
						Recommended games
					</a>
				</div>
			</Drawer>
		</div>
	);
};

export default Navbar;
