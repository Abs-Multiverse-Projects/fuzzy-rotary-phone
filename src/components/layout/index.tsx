import { ReactNode, FC } from "react";
import styles from "./style.module.scss";
import Navbar from "../navbar";

interface Props {
	className?: string;
	children?: ReactNode[] | string;
	removeNav?: boolean;
}

const Layout: FC<Props> = ({ className, children, removeNav }) => {
	return (
		<>
			<div className={`${styles.container} ${className}`}>
				{!removeNav ? <Navbar /> : ""}
				<h1 className={styles.mainTitle}>Central Gaming Intelligence</h1>
				{children}
			</div>
		</>
	);
};

export default Layout;
