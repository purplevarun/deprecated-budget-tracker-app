import { View } from "react-native";
import Menu from "../components/menu/Menu";
import useData from "../context/useData";
import LoginScreen from "../screens/login/LoginScreen";
import Navigator from "./Navigator";

const LoginConditional = () => {
	const { user } = useData();
	return (
		<View style={{ height: "100%", display: "flex", flexDirection: "row" }}>
			<Menu />
			{user ? <Navigator /> : <LoginScreen />}
		</View>
	);
};

export default LoginConditional;
