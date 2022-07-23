import { useRef, useState } from "react";
import { Animated } from "react-native";

const DataProvider = () => {
	const translateX = useRef(new Animated.Value(-150)).current;

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
				toValue: -150,
				useNativeDriver: true,
			}).start();
		}
	};

	return {
		menuOpen,
		toggleMenu,
		translateX,
	};
};

export default DataProvider;
