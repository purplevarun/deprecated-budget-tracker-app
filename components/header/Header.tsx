import { Text, View } from "react-native";
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
				paddingLeft: 20,
			}}
		>
			<IonIcons name="grid" size={40} />
		</View>
	);
};

export default Header;
