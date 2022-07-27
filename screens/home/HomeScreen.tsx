import { Text } from "react-native";
import LongView from "../../components/longview/LongView";
import colors from "../../context/Data/Colors";

const HomeScreen = () => {
	return (
		<LongView
			style={{
				justifyContent: "space-between",
				alignItems: "center",
				backgroundColor: colors.bg,
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
