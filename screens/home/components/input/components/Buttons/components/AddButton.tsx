import { Text, TouchableOpacity } from "react-native";
import colors from "../../../../../../../context/Data/Colors";

const AddButton = () => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: colors.lightgreen,
				padding: 10,
				borderRadius: 8,
			}}
		>
			<Text style={{ fontSize: 25, color: colors.bg }}>Add</Text>
		</TouchableOpacity>
	);
};

export default AddButton;
