import { useEffect, useState } from "react";
import { Animated, Linking, Text, TouchableOpacity, View } from "react-native";
import useData from "../../context/useData";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
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
			<View
				style={{
					paddingBottom: 10,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 15 }}>Made with ❤️ by Varun Kedia</Text>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<TouchableOpacity
						onPress={() => {
							Linking.openURL("https://appopener.com/lk/y7jcn9z4f");
						}}
						style={{ padding: 5 }}
					>
						<AntDesign name="linkedin-square" size={30} color={colors.fg} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							Linking.openURL("https://appopener.com/ig/f202zopfl");
						}}
						style={{ padding: 5 }}
					>
						<AntDesign name="instagram" size={30} color={colors.fg} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							Linking.openURL("mailto:purplevarun@gmail.com");
						}}
						style={{ padding: 5 }}
					>
						<AntDesign name="mail" size={30} color={colors.fg} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							Linking.openURL("https://github.com/purplevarun");
						}}
						style={{ padding: 5 }}
					>
						<AntDesign name="github" size={30} color={colors.fg} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							Linking.openURL("https://purplevarun.github.io/");
						}}
						style={{ padding: 5 }}
					>
						<MaterialCommunityIcons
							name="face-man-profile"
							size={30}
							color={colors.fg}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</Animated.View>
	);
};
export default Menu;
