import { useEffect, useState } from "react";
import { Animated, Text } from "react-native";
import useData from "../../context/useData";

const Menu = () => {
	const { menuOpen, translateX } = useData();

	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (menuOpen) {
			setWidth(150);
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
				backgroundColor: "red",
				height: "100%",
				width,
				alignItems: "center",
				transform: [{ translateX }],
			}}
		>
			<Text>Menu Open ? = {menuOpen ? "Yes" : "No"}</Text>
		</Animated.View>
	);
};
export default Menu;
