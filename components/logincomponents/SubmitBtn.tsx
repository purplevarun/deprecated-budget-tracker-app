import { Text, TouchableOpacity } from "react-native";
import colors from "../../context/Data/Colors";

interface Props {
	text: string;
	handlePress: () => void;
}

const SubmitBtn = ({ text, handlePress }: Props) => {
	const disabled = () => {
		return text.length < 1;
	};

	return (
		<TouchableOpacity
			onPress={handlePress}
			style={{
				margin: 10,
				padding: 10,
				marginTop: 30,
				borderColor: colors.secondary,
				borderWidth: 5,
				backgroundColor: disabled() ? colors.grey : colors.primary,
				borderRadius: 8,
			}}
			disabled={disabled()}
		>
			<Text
				style={{
					color: colors.bg,
					fontSize: 22,
				}}
			>
				Submit
			</Text>
		</TouchableOpacity>
	);
};

export default SubmitBtn;
