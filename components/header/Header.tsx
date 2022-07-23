import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useData from "../../context/useData";

const Header = () => {
	const { toggleMenu } = useData();

	return (
		<View
			style={{
				height: 80,
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				paddingRight: 20,
				paddingLeft: 20,
				justifyContent: "space-between",
				borderBottomColor: "grey",
				borderBottomWidth: 2,
			}}
		>
			<Text
				style={{
					fontSize: 32,
					fontWeight: "bold",
				}}
			>
				Budget Tracker
			</Text>

			<TouchableOpacity style={{ marginTop: 5 }} onPress={toggleMenu}>
				<Ionicons name="grid" size={40} color="orange" />
			</TouchableOpacity>
		</View>
	);
};

export default Header;
