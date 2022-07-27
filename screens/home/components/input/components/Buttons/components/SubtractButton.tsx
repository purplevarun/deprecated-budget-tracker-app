import { Text, TouchableOpacity } from "react-native";
import colors from "../../../../../../../context/Data/Colors";

interface Props {
	disabled: () => boolean;
}
const SubtractButton = ({ disabled }: Props) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: colors.red,
				padding: 10,
				borderRadius: 8,
			}}
			disabled={disabled()}
		>
			<Text style={{ fontSize: 25, color: disabled() ? colors.fg : colors.bg }}>
				Subtract
			</Text>
		</TouchableOpacity>
	);
};

export default SubtractButton;
