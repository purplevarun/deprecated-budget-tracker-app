import { Text, View } from "react-native";
import Header from "../components/header/Header";
import Navigator from "./Navigator";
import Buffer from "../components/buffer/Buffer";

const Wrapper = () => {
	return (
		<View style={{ height: "100%", display: "flex", flexDirection: "column" }}>
			<Buffer />
			<Header />
			<View style={{ height: "100%", display: "flex", flexDirection: "row" }}>
				<Navigator />
			</View>
		</View>
	);
};
export default Wrapper;
