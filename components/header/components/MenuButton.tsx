import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import colors from "../../../context/Data/Colors";
import useData from "../../../context/useData";

const MenuButton = () => {
	const { toggleMenu, menuOpen } = useData();

	return (
		<TouchableOpacity style={{ marginTop: 5 }} onPress={toggleMenu}>
			{menuOpen ? (
				<Ionicons name="grid" size={40} color={colors.fg} />
			) : (
				<Ionicons name="grid-outline" size={40} color={colors.fg} />
			)}
		</TouchableOpacity>
	);
};

export default MenuButton;
