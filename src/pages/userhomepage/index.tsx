import Layout from "components/layout";
import PlatformCard from "components/platformCard";
import { FC } from "react";

const UserHomePage: FC = () => {
	return (
		<Layout>
			<PlatformCard variant="PS5" />
		</Layout>
	);
};

export default UserHomePage;
