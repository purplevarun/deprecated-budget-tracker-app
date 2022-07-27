import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import LongView from "../../components/longview/LongView";
import colors from "../../context/Data/Colors";

const HomeScreen = () => {
	const getDate = () => {
		const fullDate = new Date().toLocaleString();
		const day = fullDate.slice(0, 10);
		const year = fullDate.slice(19, 24);
		return day + year;
	};
	return (
		<LongView
			style={{
				alignItems: "center",
				backgroundColor: colors.bg,
				minHeight: 800,
			}}
		>
			<View style={{ marginTop: 10, display: "flex", flexDirection: "row" }}>
				<Text style={{ fontSize: 20 }}>Today's Date : </Text>
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>{getDate()}</Text>
			</View>

			<TouchableOpacity
				style={{
					position: "absolute",
					right: 35,
					top: 650,
				}}
			>
				<Ionicons name="ios-add-circle" size={60} color={colors.primary} />
			</TouchableOpacity>
		</LongView>
	);
};
export default HomeScreen;
