import { Text, View } from "react-native";
import useData from "../../../context/useData";

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
			<Text
				style={{
					fontSize: 18,
					fontWeight: "500",
					color: colors.green,
					marginBottom: 30,
				}}
			>
				Keep track of your money
			</Text>
			<View>
				<Text>hey</Text>
			</View>
		</View>
	);
};
export default MenuContent;
