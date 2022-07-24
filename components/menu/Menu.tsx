import { useEffect, useState } from "react";
import { Animated, Linking, Text, TouchableOpacity, View } from "react-native";
import useData from "../../context/useData";
import Contacts from "./components/Contacts";
const Menu = () => {
	const { menuOpen, translateX, menuWidth, colors } = useData();

	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (menuOpen) {
			setWidth(menuWidth);
		} else {
			setTimeout(() => {
				setWidth(0);
			}, 500);
		}
	}, [menuOpen]);

	return (
		<Animated.View
			style={{
				display: "flex",
				flexDirection: "column",
				backgroundColor: colors.primary,
				height: "100%",
				width,
				alignItems: "center",
				transform: [{ translateX }],
				justifyContent: "space-between",
				paddingBottom: 120,
			}}
		>
			<View>
				<Text>hello</Text>
				<Text>sadhsaui</Text>
				<Text>safdmnsa</Text>
			</View>
			<Contacts />
		</Animated.View>
	);
};
export default Menu;
