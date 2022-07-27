import { View } from "react-native";
import Menu from "../components/menu/Menu";
import Navigator from "./Navigator";

const Main = () => {
	return (
		<View style={{ height: "100%", display: "flex", flexDirection: "row" }}>
			<Menu />
			<Navigator />
		</View>
	);
};

export default Main;
