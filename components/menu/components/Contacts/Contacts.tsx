import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import useData from "../../../../context/useData";

const Contacts = () => {
	const { colors } = useData();

	return (
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
	);
};

export default Contacts;
