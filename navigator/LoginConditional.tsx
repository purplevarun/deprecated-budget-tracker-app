import { View } from "react-native";
import Menu from "../components/menu/Menu";
import useData from "../context/useData";
import EnterUsernameScreen from "../screens/username/EnterUsernameScreen";
import Navigator from "./Navigator";

const LoginConditional = () => {
	const { user } = useData();
	return (
		<View style={{ height: "100%", display: "flex", flexDirection: "row" }}>
			<Menu />
			{user ? <Navigator /> : <EnterUsernameScreen />}
		</View>
	);
};

export default LoginConditional;
