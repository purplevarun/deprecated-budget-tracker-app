import { View } from "react-native";
import colors from "../../context/Data/Colors";
import useData from "../../context/useData";
import BrandName from "./components/BrandName";
import MenuButton from "./components/menubutton";

const Header = () => {
	const { menuOpen, user } = useData();

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
			<BrandName />
			{user && <MenuButton />}
		</View>
	);
};

export default Header;
