import { Text, TouchableOpacity, View } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";

const Header = () => {
	return (
		<View
			style={{
				height: 80,
				backgroundColor: "red",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				paddingRight: 20,
				paddingLeft: 20,
				justifyContent: "space-between",
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

			<TouchableOpacity style={{ marginTop: 5 }}>
				<IonIcons name="grid" size={40} color="orange" />
			</TouchableOpacity>
		</View>
	);
};

export default Header;
