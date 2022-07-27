import { View } from "react-native";
import Header from "../components/header/Header";
import Buffer from "../components/buffer/Buffer";
import Main from "./Main";

const AppContainer = () => {
	return (
		<View style={{ height: "100%", display: "flex", flexDirection: "column" }}>
			<Buffer />
			<Header />
			<Main />
		</View>
	);
};
export default AppContainer;
