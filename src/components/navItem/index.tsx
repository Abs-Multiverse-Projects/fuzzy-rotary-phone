import { FC } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

interface Props {
	linkTo: string;
	text: string;
	className?: string;
}

const NavItem: FC<Props> = ({ linkTo, text, className }) => {
	return (
		<>
			<Link to={linkTo} className={styles.navItem + (className ?? "")}>
				{text}
			</Link>
		</>
	);
};

export default NavItem;
