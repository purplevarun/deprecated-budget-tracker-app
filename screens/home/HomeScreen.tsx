import { Text, View } from "react-native";
import LongView from "../../components/longview/LongView";

const HomeScreen = () => {
	return (
		<LongView
			style={{
				justifyContent: "space-between",
				alignItems: "center",
				backgroundColor: "white",
				height: 1000,
			}}
		>
			<Text>Hello World</Text>
			<Text>Hello World</Text>
			<Text>Hello World</Text>
		</LongView>
	);
};
export default HomeScreen;
