import { Text } from "react-native";
import useData from "../../../../../context/useData";

const WelcomeUser = () => {
	const { user } = useData();

	return (
		<Text style={{ marginBottom: 20, fontSize: 20 }}>
			Welcome {user ? user.username : "No User"}
		</Text>
	);
};

export default WelcomeUser;
