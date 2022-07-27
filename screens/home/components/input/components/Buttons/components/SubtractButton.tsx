import { Text, TouchableOpacity } from "react-native";
import colors from "../../../../../../../context/Data/Colors";

const SubtractButton = () => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: colors.red,
				padding: 10,
				borderRadius: 8,
			}}
		>
			<Text style={{ fontSize: 25, color: colors.bg }}>Subtract</Text>
		</TouchableOpacity>
	);
};

export default SubtractButton;
