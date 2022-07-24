import { View } from "react-native";
import Header from "../components/header/Header";
import Buffer from "../components/buffer/Buffer";
import LoginConditional from "./LoginConditional";

const Wrapper = () => {
	return (
		<View style={{ height: "100%", display: "flex", flexDirection: "column" }}>
			<Buffer />
			<Header />
			<LoginConditional />
		</View>
	);
};
export default Wrapper;
