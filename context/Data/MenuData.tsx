import { useRef, useState } from "react";
import { Animated } from "react-native";

const MenuData = () => {
	const menuWidth = 250;

	const translateX = useRef(new Animated.Value(-menuWidth)).current;

	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen((menuOpen) => !menuOpen);
		if (!menuOpen) {
			Animated.timing(translateX, {
				toValue: 0,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.timing(translateX, {
				toValue: -menuWidth,
				useNativeDriver: true,
			}).start();
		}
	};

	return {
		menuOpen,
		toggleMenu,
		translateX,
		menuWidth,
	};
};

export default MenuData;
