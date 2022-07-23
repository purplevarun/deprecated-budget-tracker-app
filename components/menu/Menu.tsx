import { Animated, Text } from "react-native";
import useData from "../../context/useData";

const Menu = () => {
	const { menuOpen } = useData();
	return (
		<Animated.View
			style={{
				backgroundColor: "red",
				height: "100%",
				width: menuOpen ? 200 : 0,
			}}
		>
			<Text>Menu Open ? = {menuOpen ? "Yes" : "No"}</Text>
		</Animated.View>
	);
};
export default Menu;
