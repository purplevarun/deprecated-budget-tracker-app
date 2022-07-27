import { Text, TouchableOpacity } from "react-native";
import colors from "../../../../../../../context/Data/Colors";

interface Props {
	disabled: () => boolean;
	onPress: (type: "CREDIT" | "DEBIT") => void;
}

const AddButton = ({ disabled, onPress }: Props) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: colors.lightgreen,
				padding: 10,
				borderRadius: 8,
			}}
			disabled={disabled()}
			onPress={() => onPress("CREDIT")}
		>
			<Text style={{ fontSize: 25, color: disabled() ? colors.fg : colors.bg }}>
				Add
			</Text>
		</TouchableOpacity>
	);
};

export default AddButton;
