import { Text, TouchableOpacity, View } from "react-native";
import colors from "../../../../../../context/Data/Colors";
import InputButtonsContainer from "./components/InputButtonsContainer";

const Buttons = () => {
	return (
		<InputButtonsContainer>
			<TouchableOpacity
				style={{
					backgroundColor: colors.lightgreen,
					padding: 10,
					borderRadius: 8,
				}}
			>
				<Text style={{ fontSize: 25, color: colors.bg }}>Add</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={{
					backgroundColor: colors.red,
					padding: 10,
					borderRadius: 8,
				}}
			>
				<Text style={{ fontSize: 25, color: colors.bg }}>Subtract</Text>
			</TouchableOpacity>
		</InputButtonsContainer>
	);
};

export default Buttons;
