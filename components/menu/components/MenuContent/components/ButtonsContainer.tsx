import { Text, TouchableOpacity, View } from "react-native";

const ButtonsContainer = () => {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<TouchableOpacity>
				<Text>Home</Text>
			</TouchableOpacity>

			<TouchableOpacity>
				<Text>My Trips</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ButtonsContainer;
