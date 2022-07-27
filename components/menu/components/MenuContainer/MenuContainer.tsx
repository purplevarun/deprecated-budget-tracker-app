import { useEffect, useState } from "react";
import { Animated } from "react-native";
import colors from "../../../../context/Data/Colors";
import useData from "../../../../context/useData";

const MenuContainer = ({ children }: { children: any }) => {
	const { menuOpen, translateX, menuWidth } = useData();
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
			{children}
		</Animated.View>
	);
};

export default MenuContainer;
