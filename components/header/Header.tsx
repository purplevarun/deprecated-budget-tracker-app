import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useData from "../../context/useData";

const Header = () => {
	const { toggleMenu, menuOpen, colors } = useData();

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
				backgroundColor: colors.primary,
				borderBottomWidth: 2,
				borderBottomColor: menuOpen ? colors.fg : colors.primary,
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
				{menuOpen ? (
					<Ionicons name="grid" size={40} color={colors.fg} />
				) : (
					<Ionicons name="grid-outline" size={40} color={colors.fg} />
				)}
			</TouchableOpacity>
		</View>
	);
};

export default Header;
