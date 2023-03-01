import { FC } from "react";

interface Props {
	className?: string;
	onClick?: () => void;
}

const BurgerMenuIcon: FC<Props> = ({ className, onClick }) => {
	return (
		<svg
			viewBox="0 0 100 80"
			width="40"
			height="40"
			fill="#FCEE0C"
			className={className}
			onClick={onClick}
		>
			<polyline points="0,0 100,0 90,20 0,20" />
			<polyline points="0,30 90,30 80,50 0,50" />
			<polyline points="0,60 80,60 70,80 0,80" />
		</svg>
	);
};

export default BurgerMenuIcon;
