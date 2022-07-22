import { Text } from "react-native";
import LongView from "../../components/longview/LongView";

const HomeScreen = () => {
	return (
		<LongView
			style={{
				alignItems: "center",
				backgroundColor: "green",
				minHeight: 1500,
			}}
		>
			<Text>Hello World</Text>
		</LongView>
	);
};
export default HomeScreen;
