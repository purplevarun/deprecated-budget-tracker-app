import { Text, View } from "react-native";
import useData from "../../../../context/useData";
import Tagline from "./Tagline";

const MenuContent = () => {
	const { colors } = useData();

	return (
		<View
			style={{
				paddingTop: 20,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				backgroundColor: "magenta",
			}}
		>
			<Tagline />
			<View>
				<Text>hey</Text>
			</View>
		</View>
	);
};
export default MenuContent;
