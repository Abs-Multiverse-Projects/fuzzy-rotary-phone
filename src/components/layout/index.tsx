import { ReactNode, FC } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import Navbar from "components/navbar";

interface Props {
	className?: string;
	children?: ReactNode[] | ReactNode | string;
	removeNav?: boolean;
}

const Layout: FC<Props> = ({ className, children, removeNav }) => {
	return (
		<>
			<div className={`${styles.container} ${className ?? ""}`}>
				{!removeNav ? <Navbar /> : ""}
				<Link to="/" className={styles.mainTitle}>
					Central Gaming Intelligence
				</Link>
				{children}
			</div>
		</>
	);
};

export default Layout;
