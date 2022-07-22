import { View } from "react-native";
import Header from "../components/header/Header";
import Navigator from "./Navigator";

const Wrapper = () => {
	return (
		<View style={{ height: "100%", display: "flex", flexDirection: "column" }}>
			<Header />
			<View style={{ height: "100%", display: "flex", flexDirection: "row" }}>
				<Navigator />
			</View>
		</View>
	);
};
export default Wrapper;
