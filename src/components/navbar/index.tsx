import { FC, useEffect, useState } from "react";
import styles from "./style.module.scss";
import { ReactComponent as Logo } from "../../assets/burger-menu.svg";
import Drawer from "@mui/material/Drawer";

const Navbar: FC = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const handleClick = () => {
		setShowMenu(true);
		console.log(showMenu);
	};

	return (
		<div className={styles.mainContainer}>
			<Logo className={styles.svg} onClick={handleClick} />
			<Drawer
				PaperProps={{ sx: { background: "rgba(0, 0, 0, 0.7)" } }}
				variant="temporary"
				open={showMenu}
				onClose={() => setShowMenu(false)}
			>
				<div className={styles.navMenu}>
					<a href="#" className={styles.menuItem}>
						Sign in
					</a>
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
